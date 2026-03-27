import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { TopBar, BottomNav } from './components/Navigation';
import { Dashboard } from './components/Dashboard';
import { Roster } from './components/Roster';
import { Calendar } from './components/Calendar';
import { Stats } from './components/Stats';
import { Members } from './components/Members';
import { Payments } from './components/Payments';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Login, RoleSelection } from './components/Auth';
import { ErrorBoundary } from './components/ErrorBoundary';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { role, loading } = useAuth();

  if (loading) return null;
  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

function AppContent() {
  const { user, role, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <TopBar />
        <main className="flex-1 flex items-center justify-center p-4">
          <Login />
        </main>
      </div>
    );
  }

  if (!role) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <TopBar />
        <main className="flex-1 pt-20 px-4">
          <RoleSelection />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar />
      <main className="flex-1 pt-20 pb-32 px-4 max-w-7xl mx-auto w-full">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route 
            path="/roster" 
            element={
              <ProtectedRoute allowedRoles={['jugador', 'tecnico', 'administrativo']}>
                <Roster />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/calendar" 
            element={
              <ProtectedRoute allowedRoles={['jugador', 'tecnico', 'administrativo', 'socio', 'padre']}>
                <Calendar />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/stats" 
            element={
              <ProtectedRoute allowedRoles={['jugador', 'tecnico']}>
                <Stats />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/members" 
            element={
              <ProtectedRoute allowedRoles={['administrativo', 'socio']}>
                <Members />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/payments" 
            element={
              <ProtectedRoute allowedRoles={['administrativo', 'socio', 'padre']}>
                <Payments />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <BottomNav />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}
