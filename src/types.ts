export interface ScamType {
  id: string;
  title: string;
  description: string;
  redFlags: string[];
  whatToDo: string[];
  examples: string[];
  videoUrl?: string;
  icon: string;
}

export interface QuizScenario {
  id: string;
  type: 'marketplace' | 'email' | 'website' | 'message';
  title: string;
  content: string;
  imageUrl?: string;
  redFlags: RedFlag[];
  isScam: boolean;
  explanation: string;
  safetyTips: string[];
}

export interface RedFlag {
  id: string;
  text: string;
  position?: { top: string; left: string };
  severity: 'high' | 'medium' | 'low';
}

export interface ChecklistItem {
  id: string;
  text: string;
  category: string;
  explanation: string;
}

export interface HelperQuestion {
  id: string;
  question: string;
  options: HelperOption[];
}

export interface HelperOption {
  text: string;
  riskScore: number;
  nextQuestion?: string;
}

export interface HelperResult {
  riskLevel: 'high' | 'medium' | 'low';
  title: string;
  message: string;
  actions: string[];
}
