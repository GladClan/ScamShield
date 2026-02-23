import { useState } from 'react';
import { ChevronLeft, HelpCircle, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { helperQuestions, calculateHelperResult } from '../data/helperQuestions';
import { HelperOption } from '../types';

interface HelperPageProps {
  onNavigate: (page: string) => void;
}

export function HelperPage({ onNavigate }: HelperPageProps) {
  const [currentQuestionId, setCurrentQuestionId] = useState<string>('source');
  const [answers, setAnswers] = useState<Map<string, number>>(new Map());
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = helperQuestions.find((q) => q.id === currentQuestionId);

  const handleAnswer = (option: HelperOption) => {
    const newAnswers = new Map(answers);
    newAnswers.set(currentQuestionId, option.riskScore);
    setAnswers(newAnswers);

    if (option.nextQuestion) {
      setCurrentQuestionId(option.nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionId('source');
    setAnswers(new Map());
    setShowResult(false);
  };

  if (showResult) {
    const totalScore = Array.from(answers.values()).reduce((sum, score) => sum + score, 0);
    const result = calculateHelperResult(totalScore);

    return (
      <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Button
          variant="outline"
          onClick={() => onNavigate('home')}
          className="mb-6 inline-flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
        <Card className="mb-6">
          <div className="text-center mb-8">
            <div
              className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
                result.riskLevel === 'high'
                  ? 'bg-red-100'
                  : result.riskLevel === 'medium'
                  ? 'bg-orange-100'
                  : 'bg-green-100'
              }`}
            >
              <AlertTriangle
                className={`w-10 h-10 ${
                  result.riskLevel === 'high'
                    ? 'text-red-600'
                    : result.riskLevel === 'medium'
                    ? 'text-orange-600'
                    : 'text-green-600'
                }`}
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{result.title}</h1>
            <p className="text-lg text-gray-700">{result.message}</p>
          </div>

          <div
            className={`rounded-lg p-6 mb-6 ${
              result.riskLevel === 'high'
                ? 'bg-red-50 border-2 border-red-200'
                : result.riskLevel === 'medium'
                ? 'bg-orange-50 border-2 border-orange-200'
                : 'bg-green-50 border-2 border-green-200'
            }`}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recommended Actions</h2>
            <ul className="space-y-3">
              {result.actions.map((action, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-white ${
                      result.riskLevel === 'high'
                        ? 'bg-red-600'
                        : result.riskLevel === 'medium'
                        ? 'bg-orange-600'
                        : 'bg-green-600'
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span className="text-gray-800 flex-1">{action}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <Button
              onClick={handleRestart}
              fullWidth size="lg"
            >
              Check Another Situation
            </Button>
            {result.riskLevel === 'high' && (
              <Button
                onClick={() => onNavigate('help')}
                variant="outline"
                fullWidth
              >
                I Think I've Been Scammed
              </Button>
            )}
          </div>
        </Card>

        <Card className="bg-blue-50 border-2 border-blue-200">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Trust Your Instincts</h3>
              <p className="text-gray-700">
                This tool provides guidance, but your gut feeling matters too. If something feels wrong, it's always safer to walk away and verify through official channels.
              </p>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  if (!currentQuestion) return null;

  const progress = ((answers.size) / helperQuestions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Button
          variant="outline"
          onClick={() => onNavigate('home')}
          className="mb-6 inline-flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Is This a Scam?</h1>
        <p className="text-lg text-gray-600 mb-4">
          Answer a few questions about the situation, and we'll help you evaluate the risk level.
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <Card>
        <div className="mb-6">
          <div className="flex items-start gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <h2 className="text-2xl font-bold text-gray-900">{currentQuestion.question}</h2>
          </div>
        </div>

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-gray-800 font-medium flex-1">{option.text}</span>
              </div>
            </button>
          ))}
        </div>

        {answers.size > 0 && (
          <div className="mt-6 pt-6 border-t">
            <Button
              variant="outline"
              onClick={handleRestart}
              className="text-sm text-gray-600 hover:text-gray-900 underline"
            >
              Start over
            </Button>
          </div>
        )}
      </Card>

      <Card className="mt-6 bg-blue-50 border-2 border-blue-200">
        <div className="flex items-start gap-3">
          <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-gray-900 mb-2">How This Works</h3>
            <p className="text-gray-700 text-sm">
              This tool analyzes common scam indicators based on your answers. It's designed to help you make informed decisions, but always verify through official channels when in doubt.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
