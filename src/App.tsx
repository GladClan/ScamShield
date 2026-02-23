import { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ScamTypesPage } from './pages/ScamTypesPage';
import { QuizPage } from './pages/QuizPage';
import { HelperPage } from './pages/HelperPage';
import { ResourcesPage } from './pages/ResourcesPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'scam-types':
        return <ScamTypesPage onNavigate={handleNavigate} />;
      case 'quiz':
        return <QuizPage onNavigate={handleNavigate} />;
      case 'helper':
        return <HelperPage onNavigate={handleNavigate} />;
      case 'resources':
      case 'help':
        return <ResourcesPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main className="pb-12">
        {renderPage()}
      </main>
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">
              Stay safe online by staying informed and cautious.
            </p>
            <p className="text-sm">
              This educational platform provides general guidance. Always verify through official channels.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
