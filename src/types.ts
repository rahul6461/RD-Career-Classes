export interface CourseItem {
  id: string;
  title: string;
  badge: string;
  targetExams: string[];
  subjects: string[];
  duration: string;
  batchType: string;
  originalFee: string;
  discountedFee: string;
  feeNote: string;
  highlights: string[];
  whatsAppText: string;
  discountTag?: string;
  popular?: boolean;
}

export interface FacilityItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface QualificationBadge {
  icon: string;
  title: string;
  dept: string;
  highlight: string;
}

export interface ShortcutDemo {
  id: string;
  title: string;
  category: string;
  problem: string;
  traditionalMethod: {
    steps: string[];
    timeTaken: string;
  };
  raviSirShortcut: {
    trick: string;
    explanation: string;
    timeTaken: string;
  };
}

export interface StudentSelection {
  name: string;
  exam: string;
  rankOrPost: string;
  year: string;
  location: string;
  quote: string;
  badgeColor: string;
}

export interface QuickInquiryData {
  name: string;
  phone: string;
  targetExam: string;
  category: string;
  preferredTiming?: string;
  notes?: string;
}
