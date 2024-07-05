import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ActivityInfo from './index';
import { useDeleteActivityMutate } from '../../hooks/deleteActivity';
import axios from 'axios';

jest.mock('../../hooks/deleteActivity'); 

jest.mock('axios');

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock('@radix-ui/react-dialog', () => ({
  Root: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Trigger: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Portal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Title: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Close: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Content: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Overlay: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));


const mockActivity = {
  id: '1',
  name: 'Atividade 1',
  description: 'Descrição da Atividade 1',
};

const queryClient = new QueryClient();

describe('ActivityInfo Component', () => {
  beforeEach(() => {
    
    (useDeleteActivityMutate as jest.Mock).mockReturnValue({
      mutate: jest.fn(),
      isSuccess: false,
    });
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
        data: mockActivity,
      });
  });

  it('should render loading state initially', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/activity/1']}>
          <Routes>
            <Route path="/activity/:activityId" element={<ActivityInfo />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText('Carregando...')).toBeInTheDocument();

    await waitFor(() => {
        const loadingElement = screen.queryByText('Carregando..');
        return !loadingElement;
    });
  });
  it('should be render activity details after data is loaded ', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/activity/1']}>
          <Routes>
            <Route path="/activity/:activityId" element={<ActivityInfo />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    );

    await waitFor(() => {
        const loadingElement = screen.queryByText('Carregando..');
        return !loadingElement;
    });

      expect(screen.getByText('Atividade 1')).toBeInTheDocument();
      expect(screen.getByText('Descrição da Atividade 1')).toBeInTheDocument();
  });

  it('should call handleEditActivity when Edit button is clicked', async () => {
    render(
        <QueryClientProvider client={queryClient}>
          <MemoryRouter initialEntries={['/activity/1']}>
            <Routes>
              <Route path="/activity/:activityId" element={<ActivityInfo />} />
            </Routes>
          </MemoryRouter>
        </QueryClientProvider>
      );
  
      await waitFor(() => {
        const loadingElement = screen.queryByText('Carregando...');
        return !loadingElement;
      });
  
      await waitFor(()=> {
          const editButton = screen.getByText('Editar');
          fireEvent.click(editButton);    
        })

      expect(mockedUsedNavigate).toHaveBeenCalledWith('/editActivity/1');
  });
  it('should call handleDeleteActivity when delete button is clicked and confirmed', async () => {
    render(
        <QueryClientProvider client={queryClient}>
          <MemoryRouter initialEntries={['/activity/1']}>
            <Routes>
              <Route path="/activity/:activityId" element={<ActivityInfo />} />
            </Routes>
          </MemoryRouter>
        </QueryClientProvider>
      );
  
      await waitFor(() => {
        const loadingElement = screen.queryByText('Carregando...');
        return !loadingElement;
      });
  
      await waitFor(() => {
          const DeleteButton = screen.getByText('Deletar');
          fireEvent.click(DeleteButton);   
        })
     
     await waitFor(() => {
        const dialogTitle = screen.getByText('Você deseja deletar o comentário?');
        expect(dialogTitle).toBeInTheDocument();
      });

      const confirmButton = screen.getByText('Confirmar');
      fireEvent.click(confirmButton)
      

      expect(useDeleteActivityMutate().mutate).toHaveBeenCalledWith('1');
  });
})