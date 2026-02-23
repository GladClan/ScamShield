import { HelperQuestion, HelperResult } from '../types';

export const helperQuestions: HelperQuestion[] = [
  {
    id: 'source',
    question: 'How did you receive this offer or message?',
    options: [
      { text: 'Email from unknown sender', riskScore: 3, nextQuestion: 'urgency' },
      { text: 'Text message from unknown number', riskScore: 3, nextQuestion: 'urgency' },
      { text: 'Social media message from stranger', riskScore: 2, nextQuestion: 'urgency' },
      { text: 'Social media ad or post', riskScore: 2, nextQuestion: 'urgency' },
      { text: 'Website I found through search', riskScore: 1, nextQuestion: 'urgency' },
      { text: 'From someone I know personally', riskScore: 0, nextQuestion: 'urgency' },
    ],
  },
  {
    id: 'urgency',
    question: 'Does the message create a sense of urgency?',
    options: [
      { text: 'Yes, I must act within hours or lose opportunity', riskScore: 3, nextQuestion: 'payment' },
      { text: 'Yes, there\'s a deadline of a day or two', riskScore: 2, nextQuestion: 'payment' },
      { text: 'Somewhat, but it\'s not extreme', riskScore: 1, nextQuestion: 'payment' },
      { text: 'No urgency mentioned', riskScore: 0, nextQuestion: 'payment' },
    ],
  },
  {
    id: 'payment',
    question: 'What payment method is being requested?',
    options: [
      { text: 'Gift cards or prepaid cards', riskScore: 5, nextQuestion: 'info' },
      { text: 'Wire transfer or cryptocurrency', riskScore: 4, nextQuestion: 'info' },
      { text: 'Payment app (friends/family option)', riskScore: 3, nextQuestion: 'info' },
      { text: 'Check or money order', riskScore: 2, nextQuestion: 'info' },
      { text: 'Credit card on secure website', riskScore: 0, nextQuestion: 'info' },
      { text: 'PayPal goods/services or platform payment', riskScore: 0, nextQuestion: 'info' },
    ],
  },
  {
    id: 'info',
    question: 'What information are they requesting?',
    options: [
      { text: 'Password, PIN, or full SSN', riskScore: 5, nextQuestion: null },
      { text: 'Bank account or credit card details', riskScore: 4, nextQuestion: null },
      { text: 'Personal details like address or date of birth', riskScore: 2, nextQuestion: null },
      { text: 'Just my name and email', riskScore: 1, nextQuestion: null },
      { text: 'No sensitive information requested', riskScore: 0, nextQuestion: null },
    ],
  },
];

export function calculateHelperResult(totalScore: number): HelperResult {
  if (totalScore >= 10) {
    return {
      riskLevel: 'high',
      title: 'High Risk - Likely a Scam',
      message: 'Based on your answers, this shows multiple red flags commonly seen in scams. Do not proceed.',
      actions: [
        'Do not send any money or information',
        'Do not click any links in the message',
        'Block the sender',
        'Report it to the platform where you received it',
        'If you already provided information, secure your accounts immediately',
        'Consider reporting to FTC at ReportFraud.ftc.gov',
      ],
    };
  } else if (totalScore >= 5) {
    return {
      riskLevel: 'medium',
      title: 'Medium Risk - Proceed with Caution',
      message: 'There are some warning signs present. Take extra precautions before proceeding.',
      actions: [
        'Verify the sender through official channels',
        'Research the company independently',
        'Never use payment methods without buyer protection',
        'Don\'t share sensitive personal information',
        'Look for reviews from other customers',
        'Trust your instincts - if something feels off, walk away',
      ],
    };
  } else {
    return {
      riskLevel: 'low',
      title: 'Lower Risk - But Stay Alert',
      message: 'This doesn\'t show major red flags, but always stay cautious online.',
      actions: [
        'Still verify the legitimacy independently',
        'Use secure payment methods with buyer protection',
        'Keep records of all communications',
        'Never share passwords or sensitive account details',
        'Watch for any changes in behavior or new red flags',
        'Research the seller or company before committing',
      ],
    };
  }
}
