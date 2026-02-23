import { QuizScenario } from '../types';

export const quizScenarios: QuizScenario[] = [
  {
    id: 'marketplace-iphone',
    type: 'marketplace',
    title: 'Facebook Marketplace iPhone Listing',
    content: `iPhone 14 Pro Max - Brand New in Box!

Price: $350 (Retail $1,099)

Selling brand new iPhone 14 Pro Max. Still sealed in original packaging. Got it as a gift but already have a phone. Must sell TODAY as I'm moving out of state tomorrow!

Payment: Zelle, Venmo, or Cash App only (Facebook pay not working for me right now)

Can't meet in person because I'm busy packing, but I can ship it to you as soon as payment clears. Will send tracking number.

Contact me ASAP - have 3 other people interested!`,
    redFlags: [
      {
        id: 'price',
        text: 'Price is 68% below retail - too good to be true',
        severity: 'high',
      },
      {
        id: 'urgency',
        text: 'Creates false urgency with "must sell TODAY" and "moving tomorrow"',
        severity: 'high',
      },
      {
        id: 'payment',
        text: 'Refuses Facebook payment, wants untraceable payment methods',
        severity: 'high',
      },
      {
        id: 'no-meeting',
        text: 'Won\'t meet in person or show item - claims "too busy"',
        severity: 'high',
      },
      {
        id: 'pressure',
        text: 'Pressure tactic: "3 other people interested"',
        severity: 'medium',
      },
    ],
    isScam: true,
    explanation: 'This is a classic Facebook Marketplace scam. The extremely low price, urgency tactics, refusal to use secure payment, and unwillingness to meet in person are all major red flags. The scammer will take your money and disappear without sending anything.',
    safetyTips: [
      'Always use Facebook\'s official payment system for buyer protection',
      'Meet sellers in person at safe, public locations',
      'If price seems too good to be true, it probably is',
      'Be wary of any urgency or pressure tactics',
      'Check seller\'s profile history and reviews',
    ],
  },
  {
    id: 'email-bank',
    type: 'email',
    title: 'Bank Security Alert Email',
    content: `From: security-alerts@chase-secure-banking.com
Subject: URGENT: Suspicious Activity Detected

Dear Valued Customer,

We have detected unusual activity on your Chase account. For your security, we have temporarily limited access to your account.

To restore full access, please verify your identity immediately by clicking the link below:

Verify My Account Now

If you do not verify within 24 hours, your account will be permanently closed.

Thank you for banking with Chase.
Chase Security Team`,
    redFlags: [
      {
        id: 'domain',
        text: 'Email domain is not official Chase domain (@chase.com)',
        severity: 'high',
      },
      {
        id: 'generic',
        text: 'Generic greeting "Dear Valued Customer" instead of your name',
        severity: 'medium',
      },
      {
        id: 'urgency',
        text: 'Creates panic with "24 hours" deadline and "permanently closed"',
        severity: 'high',
      },
      {
        id: 'link',
        text: 'Suspicious link that likely leads to fake website',
        severity: 'high',
      },
    ],
    isScam: true,
    explanation: 'This is a phishing email. Chase would never email asking you to verify your account through a link, use your real name (not "Dear Customer"), and contact you through official channels. The fake domain and urgency tactics are designed to make you panic and click without thinking.',
    safetyTips: [
      'Banks never ask for sensitive information via email',
      'Always check the sender\'s email address carefully',
      'Go directly to the bank\'s official website or app',
      'Call the bank using the number on your card',
      'Enable two-factor authentication for extra security',
    ],
  },
  {
    id: 'marketplace-legit',
    type: 'marketplace',
    title: 'Facebook Marketplace Desk Listing',
    content: `Solid Wood Desk - Great Condition

Price: $120 (Paid $300 new 2 years ago)

Selling my desk because I'm upgrading to a standing desk. It's in great shape with minor wear on the corner (see photos). Dimensions: 60"W x 30"D x 30"H.

Payment: Cash or Facebook Pay
Pickup: Available this week, flexible with timing

Located in downtown area. Happy to answer questions or send more photos. Check out my other listings and reviews - I've sold several items on Marketplace.

Thanks for looking!`,
    redFlags: [],
    isScam: false,
    explanation: 'This appears to be a legitimate listing. The price is reasonable (used discount but not suspicious), seller is flexible and not pushy, accepts secure payment methods, and is willing to provide more information. The mention of previous sales and reviews is also a good sign.',
    safetyTips: [
      'Still meet in a public, safe location for pickup',
      'Inspect the item in person before paying',
      'Check the seller\'s reviews and previous listings',
      'Use Facebook Pay for transaction protection',
      'Bring a friend when meeting someone new',
    ],
  },
  {
    id: 'marketplace-overpayment',
    type: 'marketplace',
    title: 'Facebook Marketplace Buyer Overpays',
    content: `Hi! I'm interested in the couch you're selling.
  
I can't pick it up myself because I'm out of town, but my cousin can come get it tomorrow.
  
I'll send you $800 now to hold it, and you can refund the extra $200 back to me after. Please send the refund quickly once you get the payment.
  
I'll pay via Zelle — it's faster and safer.`,
    redFlags: [
      {
        id: 'overpayment',
        text: 'Buyer sends more money than agreed and asks for a refund',
        severity: 'high',
      },
      {
        id: 'third-party',
        text: 'Uses a third party ("my cousin") to avoid meeting directly',
        severity: 'medium',
      },
      {
        id: 'payment',
        text: 'Pushes Zelle, which offers no seller protection',
        severity: 'high',
      },
      {
        id: 'urgency',
        text: 'Pressures for a quick refund before payment fully clears',
        severity: 'high',
      },
    ],
    isScam: true,
    explanation: 'This is a common overpayment scam. The payment the buyer sends is usually fake or later reversed, but the refund you send is real. Once the scammer gets the refund, they disappear.',
    safetyTips: [
      'Never refund money from an overpayment',
      'Only accept the exact agreed amount',
      'Use Facebook Pay or cash for in-person transactions',
      'Be cautious of buyers who refuse to meet directly',
    ],
  },
  {
    id: 'sms-delivery',
    type: 'sms',
    title: 'Package Delivery Problem Text',
    content: `USPS: We were unable to deliver your package due to an address issue.
  
Please confirm your address within 12 hours to avoid return to sender:
http://usps-tracking-support.com/confirm`,
    redFlags: [
      {
        id: 'link',
        text: 'Suspicious link that is not an official USPS domain',
        severity: 'high',
      },
      {
        id: 'urgency',
        text: 'Creates urgency with a short deadline',
        severity: 'high',
      },
      {
        id: 'unsolicited',
        text: 'You were not expecting a delivery issue',
        severity: 'medium',
      },
    ],
    isScam: true,
    explanation: 'This is a phishing text designed to steal personal and payment information. USPS does not send links asking you to confirm addresses via text.',
    safetyTips: [
      'Do not click links in unexpected texts',
      'Go directly to the official USPS website if concerned',
      'Delete and report suspicious delivery messages',
    ],
  },
  {
    id: 'email-fake-receipt',
    type: 'email',
    title: 'Unexpected Order Confirmation Email',
    content: `Subject: Your Order Confirmation #847392
  
Thank you for your purchase!
  
Item: Apple MacBook Pro 16"
Total Charged: $2,498.99
  
If you did not authorize this purchase, click here to cancel your order immediately.
  
Cancel Order`,
    redFlags: [
      {
        id: 'unexpected',
        text: 'You did not place this order',
        severity: 'high',
      },
      {
        id: 'panic',
        text: 'Uses fear to make you click quickly',
        severity: 'high',
      },
      {
        id: 'link',
        text: 'Cancellation link likely leads to a fake support page',
        severity: 'high',
      },
    ],
    isScam: true,
    explanation: 'This scam relies on panic. The link leads to a fake support page where scammers ask for your card details or remote access. Real companies do not handle disputes this way.',
    safetyTips: [
      'Never click links in unexpected order emails',
      'Check your bank or account directly',
      'Contact the company using their official website',
    ],
  },
  {
    id: 'marketplace-legit-buyer',
    type: 'marketplace',
    title: 'Facebook Marketplace Legit Buyer',
    content: `Hi! I'm interested in the bookshelf.
  
Is it still available? Would today at 6pm work for pickup? I can pay cash or Facebook Pay — whichever you prefer.
  
Thanks!`,
    redFlags: [],
    isScam: false,
    explanation: 'This message is short and polite, asks normal questions, offers secure payment options, and is willing to meet in person. There are no pressure tactics or unusual requests.',
    safetyTips: [
      'Confirm pickup details clearly',
      'Meet in a public place if possible',
      'Avoid sharing unnecessary personal information',
    ],
  },
  {
    id: 'support-chat',
    type: 'social',
    title: 'Pop-Up Tech Support Chat',
    content: `⚠️ WARNING: Your device has been infected with malware.

Chat now with a certified technician to fix the issue immediately.
  
Do NOT close this window or your data may be lost.`,
    redFlags: [
      {
        id: 'fear',
        text: 'Uses scare tactics to create panic',
        severity: 'high',
      },
      {
        id: 'pop-up',
        text: 'Unexpected pop-up claiming your device is infected',
        severity: 'high',
      },
      {
        id: 'pressure',
        text: 'Tells you not to close the window',
        severity: 'high',
      },
    ],
    isScam: true,
    explanation: 'These fake alerts try to trick users into calling or chatting with scammers who charge money or steal information. Legit companies do not use browser pop-ups to report infections.',
    safetyTips: [
      'Close the browser tab or restart your device',
      'Do not call numbers shown in pop-ups',
      'Run trusted antivirus software',
    ],
  },
  {
    id: 'email-legit-alert',
    type: 'email',
    title: 'Legitimate Account Security Alert',
    content: `Subject: New Sign-In Detected

We noticed a new sign-in to your account from a new device.
  
If this was you, no action is needed.
If not, please log in to your account to secure it.`,
    redFlags: [],
    isScam: false,
    explanation: 'This is a legitimate security alert. It does not include links, does not ask for personal information, and does not use panic or threats.',
    safetyTips: [
      'Log in by typing the site address yourself',
      'Use strong, unique passwords',
      'Enable two-factor authentication',
    ],
  },
];
