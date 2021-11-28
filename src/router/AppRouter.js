import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import LoginPage from '../components/login/LoginPage';
import LoginContextProvider from '../context/LoginContext';
import TrainerContextProvider from '../context/TrainerContext';
const AppRouter = () => {
    return (
        <BrowserRouter>
            <TrainerContextProvider>
                <LoginContextProvider>
                    <Routes>
                        <Route path="/" element={<Navigate to="/login" />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </LoginContextProvider>
            </TrainerContextProvider>
        </BrowserRouter>
    );
};

export default AppRouter;