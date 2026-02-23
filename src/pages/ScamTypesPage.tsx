import { useState } from 'react';
import { ChevronLeft, AlertTriangle, CheckCircle, ShoppingBag, Store, Mail, CreditCard } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { VideoEmbed } from '../components/VideoEmbed';
import { scamTypes } from '../data/scamTypes';

interface ScamTypesPageProps {
  onNavigate: (page: string) => void;
}

const iconMap: Record<string, typeof ShoppingBag> = {
  ShoppingBag,
  Store,
  Mail,
  CreditCard,
};

export function ScamTypesPage({ onNavigate }: ScamTypesPageProps) {
  const [selectedScam, setSelectedScam] = useState<string | null>(null);

  if (selectedScam) {
    const scam = scamTypes.find((s) => s.id === selectedScam);
    if (!scam) return null;

    const Icon = iconMap[scam.icon] || AlertTriangle;

    return (
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Button
          variant="outline"
          onClick={() => setSelectedScam(null)}
          className="mb-6 inline-flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to All Scam Types
        </Button>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Icon className="w-10 h-10 text-blue-600" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{scam.title}</h1>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">{scam.description}</p>
        </div>

        <Card className="mb-6 bg-red-50 border-2 border-red-200">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <h2 className="text-2xl font-bold text-gray-900">Red Flags to Watch For</h2>
          </div>
          <ul className="space-y-3">
            {scam.redFlags.map((flag, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                  !
                </span>
                <span className="text-gray-800 flex-1">{flag}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="mb-6 bg-green-50 border-2 border-green-200">
          <div className="flex items-start gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <h2 className="text-2xl font-bold text-gray-900">How to Protect Yourself</h2>
          </div>
          <ul className="space-y-3">
            {scam.whatToDo.map((action, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 flex-1">{action}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-World Examples</h2>
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            {scam.examples.map((example, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-blue-600 font-bold flex-shrink-0">{index + 1}.</span>
                <span className="text-gray-700">{example}</span>
              </div>
            ))}
          </div>
        </Card>

        {scam.videoUrl && (
          <Card>
            <VideoEmbed
              videoUrl={scam.videoUrl}
              title="Learn More"
              caption="Watch this video for additional information and examples"
            />
          </Card>
        )}

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button onClick={() => onNavigate('quiz')} fullWidth>
            Practice Spotting Scams
          </Button>
          <Button onClick={() => onNavigate('helper')} variant="outline" fullWidth>
            Is This a Scam?
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Button
          variant="outline"
          onClick={() => onNavigate('home')}
          className="mb-6 inline-flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Common Scam Types</h1>
        <p className="text-lg text-gray-600">
          Learn about the most common online scams and how to recognize them before they happen to you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scamTypes.map((scam) => {
          const Icon = iconMap[scam.icon] || AlertTriangle;
          return (
            <Card key={scam.id} hoverable onClick={() => setSelectedScam(scam.id)}>
              <div className="flex items-start gap-4">
                <Icon className="w-10 h-10 text-blue-600 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{scam.title}</h3>
                  <p className="text-gray-600 mb-4">{scam.description}</p>
                  <div className="flex items-center text-sm text-blue-600 font-medium">
                    Learn More
                    <ChevronLeft className="w-4 h-4 ml-1 rotate-180" />
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="mt-8 bg-blue-50 border-2 border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't See Your Scam Type?</h2>
        <p className="text-gray-700 mb-4">
          While we cover the most common scams, new ones appear constantly. If you encounter something suspicious:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span>Use our "Is This a Scam?" tool to evaluate it</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span>Report it to the FTC at ReportFraud.ftc.gov</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span>Trust your instincts - if it feels wrong, it probably is</span>
          </li>
        </ul>
      </Card>
    </div>
  );
}
