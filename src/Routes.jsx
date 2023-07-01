import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const CarListPage = lazy(() => import('./pages/CarListPage/CarsListPage'));


const MyRoutes = () => {
    return (
        <Suspense>
            <Routes>
                <Route path="/*" element={<CarListPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Suspense>
    )
};

export default MyRoutes;