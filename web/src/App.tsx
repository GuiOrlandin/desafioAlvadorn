import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import { queryClient } from "./lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyle } from "./styles/global";
import ActivityInfo from "./routes/activityInfo";
import EditActivity from "./routes/editActivity";

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/activityInfo/:activityId",
      element: <ActivityInfo />,
    },
    {
      path: "/editActivity/:activityId",
      element: <EditActivity />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </QueryClientProvider>
  );
}
