import React, { lazy, Suspense } from "react";
import { PAGE_PATH } from "@utils/constants/common.constants";
import { Navigate, Route, Routes } from "react-router-dom";
import BackdropLoader from "@components/BackdropLoader";
import AppLayout from "../App/layots/AppLayout";


const Home = lazy(() => import ("@pages/Home/Home"));
const Resume = lazy(() => import("@pages/Resume/Resume"));

const AppPages = () => {
    const Loader = <BackdropLoader isLoading />;

    const routes = [
        {
            path: PAGE_PATH.main,
            element: <Home />
        },
        {
            path: PAGE_PATH.resume,
            element: <Resume />

        }
    ].map(({ path, element }) => <Route key={path} path={path} element={<Suspense fallback={Loader}>{element}</Suspense>} />);


    return (
        <Routes>
            <Route path={PAGE_PATH.main} element={<AppLayout />}>
                {routes}
                <Route path="*" element={<Navigate to={PAGE_PATH.main} replace />} />
            </Route>
        </Routes>
    );

};

export default AppPages;