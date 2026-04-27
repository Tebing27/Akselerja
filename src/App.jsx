import { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Landing, { TopBar, NavBar, Footer } from './components/Landing';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import LearningView from './components/LearningView';
import ChatView from './components/ChatView';
import Auth from './components/Auth';
import Onboarding from './components/Onboarding';
import CompanyDashboardView from './components/CompanyDashboardView';
import JobListView from './components/JobListView';
import JobDetailView from './components/JobDetailView';
import PostJobView from './components/PostJobView';

function App() {
  const [role, setRole] = useState('seeker');
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  const handleAuthComplete = (action, authRole) => {
    setRole(authRole);
    if (authRole === 'seeker' && action === 'register') {
      navigate('/onboarding');
    } else {
      navigate(authRole === 'company' ? '/company' : '/dashboard');
    }
  };

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    navigate('/jobs/detail');
  };

  const MainLayout = ({ children, view }) => (
    <div className="flex min-h-screen animate-fade-in bg-gray-50">
      <Sidebar currentView={view} onViewChange={(v) => navigate(`/${v}`)} role={role} />
      <main className="flex-1 p-10 overflow-y-auto h-screen">
        <div className="max-w-[1000px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );

  const PublicLayout = ({ children }) => (
    <div className="min-h-screen bg-white font-inter">
      <TopBar />
      <NavBar onNavigate={(screen, r) => { if(r) setRole(r); navigate(`/${screen === 'landing' ? '' : screen}`); }} />
      <main className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );

  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<Landing onNavigate={(screen, r) => { setRole(r); navigate(`/${screen}`); }} />} />
        <Route path="/auth" element={<Auth role={role} onBack={() => navigate('/')} onComplete={handleAuthComplete} />} />
        <Route path="/onboarding" element={<Onboarding onComplete={() => navigate('/dashboard')} />} />
        
        {/* Public Routes */}
        <Route path="/jobs" element={<PublicLayout><JobListView isActive={true} onSelectJob={handleJobSelect} /></PublicLayout>} />
        <Route path="/jobs/detail" element={<PublicLayout><JobDetailView isActive={true} job={selectedJob} onBack={() => navigate('/jobs')} /></PublicLayout>} />
        
        {/* Seeker Dashboard Routes */}
        <Route path="/dashboard" element={<MainLayout view="dashboard"><DashboardView isActive={true} onToLearning={() => navigate('/learning')} /></MainLayout>} />
        <Route path="/learning" element={<MainLayout view="learning"><LearningView isActive={true} /></MainLayout>} />
        <Route path="/chat" element={<MainLayout view="chat"><ChatView isActive={true} /></MainLayout>} />
        
        {/* Company Dashboard Routes */}
        <Route path="/company" element={<MainLayout view="talent-pool"><CompanyDashboardView isActive={true} /></MainLayout>} />
        <Route path="/talent-pool" element={<MainLayout view="talent-pool"><CompanyDashboardView isActive={true} /></MainLayout>} />
        <Route path="/post-job" element={<MainLayout view="post-job"><PostJobView onBack={() => navigate('/talent-pool')} /></MainLayout>} />
      </Routes>
    </div>
  );
}

export default App;
