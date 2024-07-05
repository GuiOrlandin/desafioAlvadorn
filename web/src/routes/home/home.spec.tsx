import React from 'react';
import Home from "./index"
import {render, screen, waitFor, waitForElementToBeRemoved} from "@testing-library/react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';

const queryClient = new QueryClient();
jest.mock('axios');


describe('Home component', () => {
    it('should be able to render Home', () => {
      render(
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      );
  
      expect(screen.getByText('Carregando..')).toBeInTheDocument();
    });

    it('should render activity cards after data is loaded', async () => {
        const mockActivities = [
          { id: '1', name: 'Activity 1', description: 'Description 1' },
          { id: '2', name: 'Activity 2', description: 'Description 2' },
        ];
        (axios.get as jest.Mock).mockResolvedValue({ data: mockActivities });
    
        render(
          <QueryClientProvider client={queryClient}>
            <Home />
          </QueryClientProvider>
        );
    
        await waitFor(() => {
            const loadingElement = screen.queryByText('Carregando..');
            return !loadingElement;
          });
      
          mockActivities.forEach(async (activity) => {
            const activityNameElement = await screen.findByText(activity.name, { exact: false });
            const activityDescriptionElement = await screen.findByText(activity.description, { exact: false });
      
            expect(activityNameElement).toBeInTheDocument();
            expect(activityDescriptionElement).toBeInTheDocument();
          });
        });
  });