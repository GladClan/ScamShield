import { ScamType } from '../types';

export const scamTypes: ScamType[] = [
  {
    id: 'facebook-marketplace',
    title: 'Facebook Marketplace Scams',
    icon: 'ShoppingBag',
    description: 'Scammers pose as buyers or sellers on Facebook Marketplace to steal money or personal information.',
    redFlags: [
      'Seller asks you to complete purchase outside of Facebook',
      'Price is significantly lower than market value',
      'Buyer offers to pay more than asking price',
      'Payment through unusual methods (gift cards, wire transfer)',
      'Profile has few friends or was recently created',
      'Seller refuses to meet in person or video chat',
      'Urgency tactics: "must sell today" or "other buyers waiting"',
    ],
    whatToDo: [
      'Always use Facebook\'s built-in payment system',
      'Meet in public, safe locations for local pickups',
      'Video chat with seller to verify item exists',
      'Research typical prices before buying',
      'Check seller\'s profile history and reviews',
      'Never share personal financial information',
      'Trust your instincts - if it feels wrong, walk away',
    ],
    examples: [
      'iPhone listed at $200 when typical price is $600+',
      'Buyer sends check for more than asking price',
      'Seller only accepts PayPal Friends and Family or gift cards',
      'Item is never available to see in person',
    ],
    references: [
      {
        title: 'Facebook Help Center',
        link: 'https://www.facebook.com/help/1156544111079919',
        description: 'Facebook\'s official help center, giving a list of helpful tips on staying safe and buying and selling responsibly.',
      },
      {
        title: 'United Community Bank',
        link: 'https://ucbbank.com/resource-library/id-theft-security/facebook-marketplace-scams',
        description: 'United Community Bank goes into detail about tactics used by scammers, going into detail on how to avoid falling into their traps.',
      },
      {
        title: 'NetSafe',
        link: 'https://netsafe.org.nz/scams/facebook-marketplace-scams',
        description: 'A New Zealand webpage dedicated to teaching about spotting Marketplace scams and what to do if you\'ve experienced a scam.',
      },
    ]
  },
  {
    id: 'fake-online-stores',
    title: 'Fake Online Shopping Sites',
    icon: 'Store',
    description: 'Fraudulent websites that look like legitimate stores but steal your payment information or never deliver products.',
    redFlags: [
      'Website address has misspellings or unusual domains',
      'No contact information or physical address',
      'Prices are too good to be true',
      'Poor grammar and spelling throughout site',
      'No customer reviews or only fake-looking reviews',
      'Browser shows security warnings or the checkout page isn’t using HTTPS',
      'Limited or no return policy information',
    ],
    whatToDo: [
      'Check the website address carefully for misspellings',
      'Look for contact information and physical address',
      'Search for reviews on independent sites',
      'Verify the site is secure',
      'Use credit cards with fraud protection',
      'Check domain age using WHOIS lookup',
      'Avoid sites that only accept wire transfers or cryptocurrency',
    ],
    examples: [
      'Site claims to sell designer goods at 90% off',
      'Contact page has only a form, no phone or address',
      'Domain registered just weeks ago',
      'Stock photos used instead of real product images',
    ],
    references: [
      {
        title: 'University of Colorado',
        link: 'https://www.cu.edu/security/how-spot-fake-online-stores',
        description: 'Teaches about how fake online store scams work, the risks, the red flags to watch for, and what to do if you\'ve already entered personal or payment information',
      },
      {
        title: 'Office of the Comptroller of the Currency',
        link: 'https://www.occ.gov/topics/consumers-and-communities/consumer-protection/fraud-resources/online-and-digital-scams.html',
        description: 'An official United States website talking about how online and digital scams work, common methods, warning signs, ways to avoid getting scammed, and how to report it.',
      },
    ]
  },
  {
    id: 'phishing-emails',
    title: 'Phishing Emails & Texts',
    icon: 'Mail',
    description: 'Messages pretending to be from legitimate companies to trick you into revealing passwords, credit card numbers, or other sensitive information.',
    redFlags: [
      'Sender email doesn\'t match official company domain',
      'Generic greetings like "Dear Customer"',
      'Urgent threats: "Account will be closed in 24 hours"',
      'Requests for passwords, credit card numbers, or SSN',
      'Suspicious links that don\'t match company website',
      'Poor spelling and grammar',
      'Unexpected attachments',
    ],
    whatToDo: [
      'Never click links in unexpected emails',
      'Go directly to the official website instead',
      'Check sender\'s email address carefully',
      'Look for https:// and correct domain (website address) before logging in',
      'Contact the company through official channels',
      'Enable two-factor authentication on all accounts',
      'Report phishing to your email provider',
    ],
    examples: [
      'PayPal email from "security@paypa1-alerts.com"',
      'Bank alert asking you to "verify your account immediately"',
      'Netflix message saying payment failed with suspicious link',
      'IRS email demanding immediate payment (IRS never emails)',
    ],
    references: [
      {
        title: 'Federal Bureau of Intelligence',
        link: 'https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams/spoofing-and-phishing',
        description: 'Descriptions of what spoofing and phishing are, and how to protect yourself from these scams.',
      },
      {
        title: 'Federal Trade Commission',
        link: 'https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams',
        description: 'A detailed article about phishing, including how to recognize it, how to protect yourself, what to do if you suspect you\'re being scammed, and how to report phishing.',
      },
      {
        title: 'National Council on Aging',
        link: 'https://www.ncoa.org/article/how-to-prevent-phishing-scams-a-guide-for-seniors/',
        description: 'An article especially for adults over the age of 60 covering what is phishing, how it works, why it works so well, how to avoid it, and what to do if you think you\'ve been targeted by a phishing scam.',
      },
    ]
  },
  {
    id: 'fake-payment-confirmations',
    title: 'Fake Payment Confirmations',
    icon: 'CreditCard',
    description: 'Scammers send fake payment receipts to trick you into thinking you\'ve been charged or to steal your payment information.',
    redFlags: [
      'Email about purchase you didn\'t make',
      'Phone number in email asking you to call',
      'Requests to click link to cancel charge',
      'Email doesn\'t appear in official app',
      'Transaction not shown in your real account',
      'Poor formatting or unofficial logo',
      'Sense of urgency to "cancel now"',
    ],
    whatToDo: [
      'Check your actual bank or credit card account',
      'Log into official app directly (don\'t click email links)',
      'Contact company through official website number',
      'Don\'t call phone numbers provided in suspicious emails',
      'Report the fake email to the real company',
      'Mark as spam in your email',
      'Review recent transactions in your accounts',
    ],
    examples: [
      'Amazon order confirmation for $800 laptop you didn\'t buy',
      'PayPal receipt with call number to "dispute charge"',
      'Apple receipt that doesn\'t show in your Apple ID',
      'Subscription renewal that isn\'t in your actual account',
    ],
    references: [
      {
        title: 'Federal Trade Commission',
        link: 'https://consumer.ftc.gov/articles/how-spot-avoid-and-report-fake-check-scams',
        description: 'How To Spot, Avoid, and Report Fake Check Scams',
      },
      {
        title: 'Microsoft Support',
        link: 'https://support.microsoft.com/en-us/security/how-to-spot-a-fake-order-scam',
        description: 'How to spot a "fake order" scam. This webpage talks about how scammers can send genuine-appearing order confirmations that are actually invitations for them to steal your personal information.',
      },
      {
        title: 'Washington State | Office of the Attorney General',
        link: 'https://www.atg.wa.gov/wire-transfer-scams',
        description: 'An official United States webpage talkign about examples of various wire transfer scams and how to recognize them.',
      },
    ]
  },
];
