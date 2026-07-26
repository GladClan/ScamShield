import { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ScamTypesPage } from './pages/ScamTypesPage';
import { QuizPage } from './pages/QuizPage';
import { HelperPage } from './pages/HelperPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { AlertTriangle } from 'lucide-react';

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
          <div className="mx-auto rounded-xl from-amber-50 via-white to-amber-50 p-5 text-center text-gray-700 ">
            <p className="mb-5 text-sm font-medium text-gray-800">
              Stay safe online by staying informed and cautious.
            </p>
            <div className="flex items-center justify-center gap-2 text-amber-800 border-b-2 border-amber-900 pb-1">
              <AlertTriangle className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm font-bold uppercase tracking-[0.2em]">Disclaimer</p>
              <AlertTriangle className="h-5 w-5 flex-shrink-0" />
            </div>
            <p className="text-sm leading-1 text-gray-800">
              This website is a student educational project and provides general information only.
              It is offered 'as-is' without warranties of any kind. The creators assume no liability for scams, financial losses,
                or other negative outcomes, even if you follow the guidance here.
              For official assistance, consult law enforcement or regulatory agencies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
