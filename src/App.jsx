import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";

import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";
import Reports from "@/routes/dashboard/reports";
import PendingUsers from "@/routes/dashboard/pendingUsers";
import VerifiedUsers from "@/routes/dashboard/verifiedUsers";
import PendingCars from "@/routes/dashboard/pendingCars";
import VerifiedCars from "@/routes/dashboard/verifiedCars";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <DashboardPage />,
                },
                {
                    path: "reports",
                    element: <Reports />,
                },
                // {
                //     path: "reports",
                //     element: <h1 className="title">Reports</h1>,
                // },
                {
                    path: "pendingUsers",
                    element: <PendingUsers />,
                },
                {
                    path: "verifiedUsers",
                    element: <VerifiedUsers />,
                },
                {
                    path: "pendingCars",
                    element: <PendingCars />,
                },
                {
                    path: "verifiedCars",
                    element: <VerifiedCars />,
                },
                {
                    path: "settings",
                    element: <h1 className="title">Settings</h1>,
                },
            ],
        },
    ]);

    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
