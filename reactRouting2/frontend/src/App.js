import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Events, { loaderEvents } from "./pages/Events";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventsPage from "./pages/NewEventPage";
import RootEventsNav from "./pages/RootEventsNav";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/events",
        element: <RootEventsNav />,
        children: [
          {
            path: "/events",
            element: <Events />,
            loader: loaderEvents,
          },
          {
            path: "/events/:eventId",
            element: <EventDetailPage />,
            children: [
              { path: "/events/:eventId", element: <EventDetailPage /> },
              { path: "/events/:eventId/edit", element: <EventDetailPage /> },
            ],
          },
          { path: "/events/new", element: <NewEventsPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
