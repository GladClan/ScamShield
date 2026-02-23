import { ChecklistItem } from '../types';

export const redFlagsChecklist: ChecklistItem[] = [
  {
    id: 'price',
    category: 'General',
    text: 'Price is significantly below market value',
    explanation: 'If a deal seems too good to be true, it usually is. Scammers lure victims with unrealistically low prices.',
  },
  {
    id: 'urgency',
    category: 'General',
    text: 'Creates false sense of urgency',
    explanation: 'Pressure tactics like "act now," "limited time," or "other buyers waiting" are designed to make you act without thinking.',
  },
  {
    id: 'payment',
    category: 'Payment',
    text: 'Requests unusual payment methods',
    explanation: 'Gift cards, wire transfers, cryptocurrency, or payment apps set to "friends/family" offer no buyer protection.',
  },
  {
    id: 'outside-platform',
    category: 'Payment',
    text: 'Wants to complete transaction outside the platform',
    explanation: 'Moving off-platform removes buyer protection and makes it easier for scammers to disappear.',
  },
  {
    id: 'personal-info',
    category: 'Information',
    text: 'Asks for sensitive personal information',
    explanation: 'Legitimate businesses never ask for passwords, full SSN, or account PINs via email or text.',
  },
  {
    id: 'email-domain',
    category: 'Communication',
    text: 'Email address doesn\'t match official domain',
    explanation: 'Check carefully - scammers use similar domains like "paypa1.com" instead of "paypal.com".',
  },
  {
    id: 'generic-greeting',
    category: 'Communication',
    text: 'Uses generic greetings',
    explanation: 'Real companies use your name. "Dear Customer" or "Dear User" suggests mass phishing.',
  },
  {
    id: 'spelling',
    category: 'Communication',
    text: 'Poor grammar and spelling errors',
    explanation: 'Professional companies proofread their communications. Many errors suggest a scam.',
  },
  {
    id: 'no-meet',
    category: 'In-Person Sales',
    text: 'Refuses to meet in person or video chat',
    explanation: 'For local sales, legitimate sellers should be willing to meet safely or video chat to verify items.',
  },
  {
    id: 'overpayment',
    category: 'Payment',
    text: 'Offers to pay more than asking price',
    explanation: 'Overpayment scams involve fake checks where scammer asks you to refund the difference.',
  },
  {
    id: 'new-profile',
    category: 'Online Presence',
    text: 'New or suspicious online profile',
    explanation: 'Accounts created recently with few connections or activity may be set up for scamming.',
  },
  {
    id: 'no-contact',
    category: 'Website',
    text: 'Website has no contact information',
    explanation: 'Legitimate businesses provide multiple ways to contact them including phone and address.',
  },
  {
    id: 'not-secure',
    category: 'Website',
    text: 'Website shows security warnings',
    explanation: 'Check the address bar. If the browser warns the site is unsafe, or the address does not start with "https://", avoid entering personal or payment information.'
  },
  {
    id: 'threats',
    category: 'Communication',
    text: 'Contains threats or demands',
    explanation: 'Messages threatening account closure, legal action, or arrest are scare tactics used by scammers.',
  },
];
