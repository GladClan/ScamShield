import { useState } from 'react';
import { ChevronLeft, AlertTriangle, CheckCircle, XCircle, ChevronRight } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { quizScenarios } from '../data/quizScenarios';

interface QuizPageProps {
  onNavigate: (page: string) => void;
}

export function QuizPage({ onNavigate }: QuizPageProps) {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const scenario = quizScenarios[currentScenario];

  const handleAnswer = (isScam: boolean) => {
    setUserAnswer(isScam);
    setShowFeedback(true);
    setScore((prev) => ({
      correct: prev.correct + (isScam === scenario.isScam ? 1 : 0),
      total: prev.total + 1,
    }));
  };

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
    if (currentScenario < quizScenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setUserAnswer(null);
      setShowFeedback(false);
    } else {
      onNavigate('resources');
    }
  };

  const handleRestart = () => {
    setCurrentScenario(0);
    setUserAnswer(null);
    setShowFeedback(false);
    setScore({ correct: 0, total: 0 });
  };

  const isCorrect = userAnswer === scenario.isScam;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Button
          variant="outline"
          onClick={() => onNavigate('home')}
          className="mb-6 inline-flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Spot the Scam</h1>
        <p className="text-lg text-gray-600 mb-4">
          Practice identifying real scams with realistic scenarios. Each one is based on actual scam tactics.
        </p>
        {score.total > 0 && (
          <div className="flex items-center gap-4 text-sm">
            <span className="font-semibold">
              Score: {score.correct} / {score.total}
            </span>
            <span className="text-gray-500">
              ({Math.round((score.correct / score.total) * 100)}% correct)
            </span>
            <Button
              variant="outline"
              onClick={() => handleRestart}
              className="ml-auto text-blue-600 hover:text-blue-700 underline"
            >
              Reset
            </Button>
          </div>
        )}
      </div>

      <Card className="mb-6">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-gray-500">
              Scenario {currentScenario + 1} of {quizScenarios.length}
            </span>
            <span className="text-sm font-semibold text-blue-600 capitalize">
              {scenario.type}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{scenario.title}</h2>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <pre className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed">
            {scenario.content}
          </pre>
        </div>

        {!showFeedback && (
          <div className="space-y-3">
            <p className="text-lg font-semibold text-gray-900 mb-4">
              Is this a scam or legitimate?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                onClick={() => handleAnswer(true)}
                variant="danger"
                size="lg"
                fullWidth
              >
                <span className="flex flex-col items-center justify-center w-full">
                  <XCircle className="w-5 h-5 mr-2" />
                  This is a SCAM
                </span>
              </Button>
              <Button
                onClick={() => handleAnswer(false)}
                variant="primary"
                size="lg"
                fullWidth
              >
                <span className="flex flex-col items-center justify-center w-full">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  This is LEGIT
                </span>
              </Button>
            </div>
          </div>
        )}

        {showFeedback && (
          <div className="space-y-6">
            <div
              className={`rounded-lg p-6 ${
                isCorrect
                  ? 'bg-green-50 border-2 border-green-200'
                  : 'bg-red-50 border-2 border-red-200'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                {isCorrect ? (
                  <>
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <span className="text-2xl font-bold text-green-900">
                      Correct!
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-8 h-8 text-red-600" />
                    <span className="text-2xl font-bold text-red-900">
                      Not quite
                    </span>
                  </>
                )}
              </div>
              <p className="text-gray-800 text-lg">
                This is <strong>{scenario.isScam ? 'a SCAM' : 'LEGITIMATE'}</strong>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Explanation</h3>
              <p className="text-gray-700 leading-relaxed">{scenario.explanation}</p>
            </div>

            {scenario.redFlags.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  Red Flags in This Scenario
                </h3>
                <div className="space-y-2">
                  {scenario.redFlags.map((flag) => (
                    <div
                      key={flag.id}
                      className={`flex items-start gap-3 p-3 rounded-lg ${
                        flag.severity === 'high'
                          ? 'bg-red-50 border border-red-200'
                          : flag.severity === 'medium'
                          ? 'bg-orange-50 border border-orange-200'
                          : 'bg-yellow-50 border border-yellow-200'
                      }`}
                    >
                      <AlertTriangle
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          flag.severity === 'high'
                            ? 'text-red-600'
                            : flag.severity === 'medium'
                            ? 'text-orange-600'
                            : 'text-yellow-600'
                        }`}
                      />
                      <span className="text-gray-800">{flag.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety Tips</h3>
              <ul className="space-y-2">
                {scenario.safetyTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              onClick={handleNext} 
              size="lg" 
              fullWidth
              className="inline-flex items-center gap-2"
            >
              {currentScenario < quizScenarios.length - 1 ? (
                <>
                  Next Scenario
                  <ChevronRight className="w-5 h-5 ml-2" />
                </>
              ) : (
                'Start Over'
              )}
            </Button>
          </div>
        )}
      </Card>

      <Card className="bg-blue-50 border-2 border-blue-200">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Pro Tip</h3>
        <p className="text-gray-700">
          Take your time analyzing each scenario. In real life, scammers rely on you acting quickly without thinking. The more you practice, the easier it becomes to spot red flags instantly.
        </p>
      </Card>
    </div>
  );
}
