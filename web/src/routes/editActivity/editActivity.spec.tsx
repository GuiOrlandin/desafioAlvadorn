import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEditActivityMutate } from '../../hooks/editActivity';
import axios from 'axios';
import EditActivity from './index';

jest.mock('axios');

jest.mock('../../hooks/editActivity');

const queryClient = new QueryClient();

const mockActivity = {
  id: '1',
  name: 'Activity Name',
  description: 'Activity Description',
};

describe('Edit Activity Component', () => {
  beforeEach(() => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
        data: mockActivity,
      });
      (useEditActivityMutate as jest.Mock).mockReturnValue({
        mutate: jest.fn(),
        isSuccess: false,
      });
  });

  it('should render loading state initially', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[`/editActivity/1`]}>
          <Routes>
            <Route path="/editActivity/:activityId" element={<EditActivity />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText('Carregando..')).toBeInTheDocument();
  }),

  it('should render inputs after loading', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[`/editActivity/1`]}>
          <Routes>
            <Route path="/editActivity/:activityId" element={<EditActivity />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    );

    await waitFor(() => {
        const loadingElement = screen.queryByText('Carregando..');
        return !loadingElement;
      });

      const nameHeading = screen.getByRole('heading', { name: "Nome" });
      const descriptionHeading = screen.getByRole('heading', { name: "Descrição"});


      expect(nameHeading).toBeInTheDocument();
      expect(descriptionHeading).toBeInTheDocument();
  })

  it('should edit activity on submit', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/editActivity/1']}>
          <Routes>
            <Route path="/editActivity/:activityId" element={<EditActivity />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    );

    await waitFor(() => {
      const loadingElement = screen.queryByText('Carregando..');
      return !loadingElement;
    });

    const nameHeading = screen.getByRole('heading', { name: "Nome" }).nextElementSibling as HTMLInputElement;
    const descriptionHeading = screen.getByRole('heading', { name: "Descrição"}).nextElementSibling as HTMLInputElement;



    fireEvent.change(nameHeading, { target: { value: 'New Activity Name' } });
    fireEvent.change(descriptionHeading, { target: { value: 'New Activity Description' } });

   

    
    const sendButton = screen.getByText('Enviar');
    fireEvent.click(sendButton);

    expect(useEditActivityMutate().mutate).toHaveBeenCalledWith({
      id: '1',
      name: 'New Activity Name', 
      description: 'New Activity Description', 
    });
  });
})