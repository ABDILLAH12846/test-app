import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../../app/store';
import Navbar from '../../element/navbar/navbar';

export default function ProtectedRoute() {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    return isAuthenticated ? (
        <>
            <Navbar />
            <Outlet />
        </>
    ) : <Navigate to="/" />;
}
