import { ShieldAlert, BookOpen, Target, LifeBuoy } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: BookOpen,
      title: 'Learn About Scams',
      description: 'Understand common scam types and how to recognize them',
      action: () => onNavigate('scam-types'),
      color: 'text-blue-600',
    },
    {
      icon: Target,
      title: 'Spot the Scam',
      description: 'Practice identifying scams with interactive scenarios',
      action: () => onNavigate('quiz'),
      color: 'text-green-600',
    },
    {
      icon: ShieldAlert,
      title: 'Is This a Scam?',
      description: 'Get help evaluating suspicious messages or offers',
      action: () => onNavigate('helper'),
      color: 'text-orange-600',
    },
    {
      icon: LifeBuoy,
      title: 'Get Help',
      description: 'Resources if you\'ve been scammed or need support',
      action: () => onNavigate('help'),
      color: 'text-red-600',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Stay Safe Online
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Learn to recognize and avoid online scams. Protect yourself, your money, and your personal information with confidence.
        </p>
      </div>

      <Card className="mb-12 bg-blue-50 border-2 border-blue-200">
        <div className="flex flex-col md:flex-row items-start gap-4">
          <ShieldAlert className="w-12 h-12 text-blue-600 flex-shrink-0" />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              How Online Scams Work
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Scammers use psychological tricks to make you act quickly without thinking. They create urgency, offer deals that seem too good to be true, and pretend to be trustworthy people or companies. By learning the warning signs, you can protect yourself.
            </p>
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="text-sm font-semibold text-gray-900 mb-2">Remember:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Legitimate companies never ask for passwords via email</li>
                <li>• If a deal seems too good to be true, it probably is</li>
                <li>• Pressure to act immediately is a major red flag</li>
                <li>• Always verify before sending money or information</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {features.map((feature) => (
          <Card key={feature.title} hoverable>
            <div className="flex flex-col h-full">
              <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-6 flex-1">{feature.description}</p>
              <Button onClick={feature.action} fullWidth>
                Get Started
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-3">Quick Safety Tips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Before You Click</h3>
              <p className="text-sm">Hover over links to see where they really go. Don't click suspicious links in emails or texts.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Before You Pay</h3>
              <p className="text-sm">Use payment methods with buyer protection. Avoid wire transfers, gift cards, or cryptocurrency.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Before You Share</h3>
              <p className="text-sm">Never share passwords, PINs, or full account numbers. Verify who you're really talking to.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">When In Doubt</h3>
              <p className="text-sm">Stop and verify through official channels. It's always better to be cautious than sorry.</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
