
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '@/pages/home/HomePage';
import { AuthLayout } from '@/pages/auth/AuthLayout';
import { LoginPage } from '@/pages/auth/LoginPage';
import { RegisterPage } from '@/pages/auth/RegisterPage';
import { BankingSetup } from '@/pages/onboarding/BankingSetup';
import { OnboardingComplete } from '@/pages/onboarding/OnboardingComplete';
import { BankingCallback } from '@/pages/onboarding/BankingCallback';
import { BudgetingPage } from '@/pages/dashboard/BudgetingPage';
import { ToolsPage } from '@/pages/tools/ToolsPage';
import { AnalysisPage } from '@/pages/tools/AnalysisPage';
import { AuthProvider, useAuth } from './AuthProvider';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { RequireAuth } from './components/RequireAuth';
import { SuccessStories } from '@/pages/tools/successStories';
function App() {
  return (
    <BrowserRouter> {/* Wrap everything inside the Router */}
      
      <AuthProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <DashboardLayout />
              </RequireAuth>
            }
          >

          </Route>
          <Route path="/onboarding">
            <Route path="banking" element={<BankingSetup />} />
            <Route path="complete" element={<OnboardingComplete />} />
            <Route path="banking/callback" element={<BankingCallback />} />
          </Route>
          <Route path="/budgeting" element={<BudgetingPage />} />
          <Route path="tools" element={<ToolsPage />} />
          <Route path="tools/analysis" element={<AnalysisPage />} />
          <Route path="analysis" element={<AnalysisPage />} />
          <Route path="tools/successStories" element={<SuccessStories />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
