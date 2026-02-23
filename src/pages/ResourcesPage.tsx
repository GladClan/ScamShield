import { ChevronLeft, Shield, FileText, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { redFlagsChecklist } from '../data/checklist';
import { useState } from 'react';

interface ResourcesPageProps {
  onNavigate: (page: string) => void;
}

export function ResourcesPage({ onNavigate }: ResourcesPageProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'checklist' | 'shopping' | 'links' | 'help'>('help');

  const categories = Array.from(new Set(redFlagsChecklist.map((item) => item.category)));

  const renderChecklist = () => (
    <div className="space-y-6">
      {categories.map((category) => (
        <div key={category}>
          <h3 className="text-xl font-bold text-gray-900 mb-4">{category}</h3>
          <div className="space-y-3">
            {redFlagsChecklist
              .filter((item) => item.category === category)
              .map((item) => (
                <Card
                  key={item.id}
                  className="cursor-pointer hover:border-blue-300 border-2 border-transparent"
                  onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-1">{item.text}</p>
                      {expandedItem === item.id && (
                        <p className="text-gray-600 text-sm mt-2 pt-2 border-t">
                          {item.explanation}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderShoppingGuide = () => (
    <div className="space-y-6">
      <Card className="bg-green-50 border-2 border-green-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Before You Buy Online</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800">Check the website address carefully for misspellings</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800">Search for independent reviews of the seller</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800">Verify contact information and physical address</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800">Compare prices with other retailers</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800">Read the return and refund policy</span>
          </li>
        </ul>
      </Card>

      <Card>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Safe Payment Methods</h3>
        <div className="space-y-4">
          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">Recommended</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Credit cards (fraud protection)</li>
              <li>• PayPal goods and services</li>
              <li>• Platform-specific payment systems (Facebook Pay, etc.)</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <h4 className="font-semibold text-red-900 mb-2">Avoid</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Gift cards or prepaid cards</li>
              <li>• Wire transfers (Western Union, MoneyGram)</li>
              <li>• Cryptocurrency</li>
              <li>• Payment apps set to "friends/family"</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Marketplace Safety</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800">Meet in public, well-lit locations</span>
          </li>
          <li className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800">Bring a friend when meeting someone new</span>
          </li>
          <li className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800">Inspect items in person before paying</span>
          </li>
          <li className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800">Video chat with seller to verify item exists</span>
          </li>
          <li className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800">Check seller's profile, reviews, and history</span>
          </li>
        </ul>
      </Card>
    </div>
  );

  const renderLinkSafety = () => (
    <div className="space-y-6">
      <Card className="bg-blue-50 border-2 border-blue-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">How to Check Links Safely</h3>
        <ol className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
              1
            </span>
            <div>
              <p className="font-semibold text-gray-900">Hover Before You Click</p>
              <p className="text-gray-700 text-sm mt-1">
                On desktop, hover over the link to see the actual URL at the bottom of your browser. On mobile, press and hold the link to preview it.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
              2
            </span>
            <div>
              <p className="font-semibold text-gray-900">Check the Domain Carefully</p>
              <p className="text-gray-700 text-sm mt-1">
                Look for misspellings or extra characters. "paypa1.com" (with a number 1) is not "paypal.com"
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
              3
            </span>
            <div>
              <p className="font-semibold text-gray-900">Go Direct Instead</p>
              <p className="text-gray-700 text-sm mt-1">
                Instead of clicking email links, type the official website address directly or use a saved bookmark
              </p>
            </div>
          </li>
        </ol>
      </Card>

      <Card>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Email Safety</h3>
        <div className="space-y-3">
          <div className="bg-red-50 rounded-lg p-4">
            <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Red Flags in Emails
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Sender email doesn't match official company domain</li>
              <li>• Generic greetings like "Dear Customer"</li>
              <li>• Urgent threats or time pressure</li>
              <li>• Requests for passwords or sensitive information</li>
              <li>• Unexpected attachments</li>
              <li>• Poor spelling and grammar</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-bold text-gray-900 mb-4">QR Code Safety</h3>
        <p className="text-gray-700 mb-4">
          QR codes can hide malicious links. Before scanning:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800">Only scan codes from trusted sources</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800">Check the preview URL before opening</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800">Be cautious of codes in public places</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800">Never scan codes that promise free money or prizes</span>
          </li>
        </ul>
      </Card>
    </div>
  );

  const renderHelp = () => (
    <div className="space-y-6">
      <Card className="bg-red-50 border-2 border-red-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">If You've Been Scammed</h3>
        <p className="text-gray-700 mb-6">
          First, take a deep breath. You're not alone, and there are steps you can take right now to protect yourself and potentially recover.
        </p>
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">Immediate Steps</h4>
            <ol className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="font-bold">1.</span>
                <span>Stop all communication with the scammer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">2.</span>
                <span>If you paid by credit card, contact your bank immediately to dispute the charge</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">3.</span>
                <span>If you shared passwords, change them right away</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">4.</span>
                <span>Enable two-factor authentication on all accounts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">5.</span>
                <span>Save all evidence: messages, receipts, screenshots</span>
              </li>
            </ol>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Where to Report</h3>
        <div className="space-y-4">
          <a
            href="https://reportfraud.ftc.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <ExternalLink className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-900">Federal Trade Commission (FTC)</p>
                <p className="text-sm text-gray-600">Report fraud and scams</p>
              </div>
            </div>
          </a>
          <a
            href="https://www.ic3.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <ExternalLink className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-900">FBI Internet Crime Complaint Center</p>
                <p className="text-sm text-gray-600">Report cybercrime</p>
              </div>
            </div>
          </a>
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Protect Your Identity</h3>
        <p className="text-gray-700 mb-4">
          If you shared personal information like your Social Security number:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800">Place a fraud alert on your credit reports</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800">Consider a credit freeze</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800">Monitor your credit reports closely</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800">File a report at IdentityTheft.gov</span>
          </li>
        </ul>
      </Card>

      <Card className="bg-blue-50 border-2 border-blue-200">
        <h3 className="text-xl font-bold text-gray-900 mb-3">You're Not Alone</h3>
        <p className="text-gray-700">
          Scammers are professionals who manipulate emotions and create urgency. Being scammed doesn't mean you're careless - it means someone took advantage of your trust. Learn from this experience and help others by sharing what happened.
        </p>
      </Card>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Button
          variant="outline"
          onClick={() => onNavigate('home')}
          className="mb-6 inline-flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources & Guides</h1>
        <p className="text-lg text-gray-600">
          Everything you need to stay safe online, from quick reference checklists to detailed guides.
        </p>
      </div>

      <div className="mb-6 overflow-x-auto">
        <div className="flex gap-2 min-w-max sm:min-w-0">
          <Button
            variant={activeTab === 'checklist' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('checklist')}
            className="inline-flex items-center gap-2"
          >
            <FileText className="w-4 h-4 mr-2" />
            Red Flags
          </Button>
          <Button
            variant={activeTab === 'shopping' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('shopping')}
            className="inline-flex items-center gap-2"
          >
            <Shield className="w-4 h-4 mr-2" />
            Safe Shopping
          </Button>
          <Button
            variant={activeTab === 'links' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('links')}
            className="inline-flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Link Safety
          </Button>
          <Button
            variant={activeTab === 'help' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('help')}
            className="inline-flex items-center gap-2"
          >
            <AlertCircle className="w-4 h-4 mr-2" />
            Need Help
          </Button>
        </div>
      </div>

      {activeTab === 'checklist' && renderChecklist()}
      {activeTab === 'shopping' && renderShoppingGuide()}
      {activeTab === 'links' && renderLinkSafety()}
      {activeTab === 'help' && renderHelp()}
    </div>
  );
}
