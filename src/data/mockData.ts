import { CourseItem, FacilityItem, QualificationBadge, ShortcutDemo, StudentSelection } from '../types';

export const INSTITUTE_DETAILS = {
  name: "R.D. Career Classes",
  tagline: "Agra's No. 1 Defense & Officer Training Academy",
  location: "Diamond City, Gwalior Rd, Nagla Padma, Agra, Rohta, Uttar Pradesh 282009",
  address: "Diamond City, Gwalior Rd, Nagla Padma, Agra, Rohta, Uttar Pradesh 282009",
  addressLine1: "Diamond City, Gwalior Rd",
  addressLine2: "Nagla Padma, Agra, Rohta, Uttar Pradesh 282009",
  foundedYear: "2015",
  yearsExperience: "11+",
  studentsMentored: "20,000+",
  selectionsCount: "2,850+",
  founderName: "Mr. Ravi Pachori Sir",
  founderTitle: "Founder, Director & Chief Mathematics Specialist",
  officialPhone: "9808124401",
  officialPhoneFormatted: "+91 9808124401",
  youtubeChannelName: "Selection Runway",
  youtubeSubscribers: "1.7K+",
  youtubeUrl: "https://youtube.com/@selectionrunway?si=FXdPSvqly9-fI0UR",
  youtubeFeaturedUrl: "https://www.youtube.com/@SelectionRunway/featured",
  whatsappBaseUrl: "https://wa.me/919808124401",
  discountBanner: "Honoring Our Soldiers & Empowering Women: Special Concessions Available for Girl Students & Children of Defense Personnel!"
};

export const FOUNDER_QUALIFICATIONS: QualificationBadge[] = [
  {
    icon: "ShieldAlert",
    title: "Ex-Assistant Commandant",
    dept: "Central Armed Police Forces (CAPF)",
    highlight: "Officer Rank Leadership & Discipline"
  },
  {
    icon: "BadgeCheck",
    title: "Ex-Sub Inspector (SI)",
    dept: "Police Department",
    highlight: "Ground Reality & Physical Exam Veteran"
  },
  {
    icon: "Medal",
    title: "SSC CPO Qualified",
    dept: "Staff Selection Commission",
    highlight: "All India Defense/Police Officer Ranking"
  },
  {
    icon: "Trophy",
    title: "SSC CGL Qualified",
    dept: "Central Govt Premier Officer Exams",
    highlight: "Top Scorer in Advanced Mathematics & Logic"
  },
  {
    icon: "Compass",
    title: "Agra's No. 1 Math Specialist",
    dept: "R.D. Career Classes",
    highlight: "Creator of 'Selection Runway Shortcuts'"
  }
];

export const COURSES: CourseItem[] = [
  {
    id: "airforce-xy",
    title: "Airforce X & Y Group / Agniveer Special",
    badge: "Most Demanded in Agra",
    discountTag: "Special Discounts for Girls & Army Wards",
    targetExams: ["Airforce Group X (Technical)", "Airforce Group Y (Non-Tech)", "Agniveer Vayu"],
    subjects: [
      "Technical Math by Ravi Sir",
      "Physics (Concepts & Numericals)",
      "English Grammar & Comprehension",
      "RAGA (Reasoning, General Awareness, Aptitude)"
    ],
    duration: "4 - 5 Months Intensive + Test Series",
    batchType: "Offline Classroom + Free Online Runway Backup",
    originalFee: "₹8,500",
    discountedFee: "₹4,999",
    feeNote: "₹4,999 (Special Discounts for Girls & Army Wards)",
    popular: true,
    highlights: [
      "Special Airforce Formula Revision Sheet",
      "100+ Speed Tests before actual exam",
      "Daily Morning Doubt Sessions by Ravi Sir",
      "Phase-2 Group Discussion (GD) & SRT Training"
    ],
    whatsAppText: "Hi Ravi Sir, I want to inquire about Airforce X/Y Group Batch and check discount eligibility."
  },
  {
    id: "ssc-complete",
    title: "SSC GD / CGL / CHSL / CPO Masterclass",
    badge: "Highest Selections 2024-25",
    discountTag: "Special Discounts for Girls & Army Wards",
    targetExams: ["SSC CGL", "SSC CPO (Sub-Inspector)", "SSC CHSL (10+2)", "SSC GD Constable"],
    subjects: [
      "Arithmetic & Advance Math by Ravi Sir",
      "Logical & Non-Verbal Reasoning",
      "General Studies (Polity, History, Science, Geography)",
      "Hindi / English Comprehensive"
    ],
    duration: "6 Months Foundation + Lifetime Doubt Support",
    batchType: "Daily 3 Hours Batch (Morning & Evening)",
    originalFee: "₹7,500",
    discountedFee: "₹3,999",
    feeNote: "₹3,999 (Special Discounts for Girls & Army Wards)",
    popular: true,
    highlights: [
      "Solve SSC Tier-1 & 2 Math in under 20 seconds",
      "Previous 10 Years TCS PYQ (Previous Year Questions) Solved",
      "Complete Handwritten Class Notes Provided",
      "Direct guidance from SSC CGL & CPO Qualified Mentor"
    ],
    whatsAppText: "Hi Ravi Sir, I want to inquire about the SSC Complete Batch."
  },
  {
    id: "navy-foundation",
    title: "Navy SSR / AA / MR Foundation",
    badge: "Technical & Non-Technical",
    discountTag: "Special Discounts for Girls & Army Wards",
    targetExams: ["Navy SSR (Senior Secondary Recruit)", "Navy AA (Artificer Apprentice)", "Navy MR (Matric Recruit)"],
    subjects: [
      "Complete Technical/Non-Technical syllabus",
      "Mock Test Series with OMR Evaluation",
      "Applied Mathematics & Vectors",
      "General Science & Naval GK"
    ],
    duration: "4 Months Target Batch",
    batchType: "Offline Regular + Digital Practice Sets",
    originalFee: "₹8,000",
    discountedFee: "₹4,999",
    feeNote: "₹4,999 (Special Discounts for Girls & Army Wards)",
    popular: false,
    highlights: [
      "Rigorous Physics & Math Drill Sessions",
      "Navy CBT (Computer Based Test) Interface Practice",
      "Medical Standard & Physical Test Guidance",
      "Weekly Progress Tracker for Parents"
    ],
    whatsAppText: "Hi Ravi Sir, I want to inquire about the Navy SSR/AA Batch."
  },
  {
    id: "up-police-si",
    title: "UP Police SI / Constable / UPSSSC PET",
    badge: "Ex-SI Mentorship Advantage",
    discountTag: "Special Discounts for Girls & Army Wards",
    targetExams: ["UP Police Sub-Inspector (Daroga)", "UP Police Constable", "UPSSSC PET"],
    subjects: [
      "UPSI Special Math by Ravi Sir",
      "Samanya Hindi (सामान्य हिंदी) 100/100 Strategy",
      "General Knowledge & Constitution (मूल विधि व संविधान)",
      "Mental Aptitude & Reasoning"
    ],
    duration: "4 - 5 Months Complete Coverage",
    batchType: "Target Crash + Foundation Batches",
    originalFee: "₹6,500",
    discountedFee: "₹3,499",
    feeNote: "₹3,499 (Special Discounts for Girls & Army Wards)",
    popular: true,
    highlights: [
      "Taught by Ex-Sub Inspector with real department insight",
      "Mastery in IPC, CrPC & constitutional case laws for UPSI",
      "100+ Hindi & Math Rapid Fire Quizzes",
      "Physical Ground Training Guidance on weekends"
    ],
    whatsAppText: "Hi Ravi Sir, I want to inquire about UP Police SI/Constable Batch."
  }
];

export const FACILITIES: FacilityItem[] = [
  {
    id: "officer-discipline",
    icon: "Shield",
    title: "Ex-Defense Officer Guidance & Military Discipline",
    subtitle: "Ex-Assistant Commandant & Ex-SI Mentorship",
    description: "Learn inside an environment sculpted with authentic defense discipline. Ravi Sir trains students with officer mindset, punctuality, and strategic focus."
  },
  {
    id: "short-tricks",
    icon: "Sparkles",
    title: "Ravi Sir's Signature Speed-Math Shortcuts",
    subtitle: "Mathematics & Aptitude Shortcut Algorithms",
    description: "Eliminate lengthy formula crutches. Solve complex questions of Compound Interest, Time-Work, Geometry, and Trigonometry in under 15 seconds."
  },
  {
    id: "dpp-tests",
    icon: "FileText",
    title: "Free Study Materials & Daily Practice Papers (DPP)",
    subtitle: "Chapter-Wise & All-Agra Rank Tests",
    description: "Every single classroom concept is reinforced with free printed study material, a 25-question DPP sheet, and chapter-wise formula flashcards."
  },
  {
    id: "mock-exams",
    icon: "Award",
    title: "Weekly Full-Length Mock Exams",
    subtitle: "Real CBT Interface & Negative Marking Simulation",
    description: "Simulated exam conditions every Saturday with full OMR and online evaluation, All-Agra merit ranking, and detailed error analysis."
  },
  {
    id: "fitness-guidance",
    icon: "Activity",
    title: "Physical Fitness & Medical Test Orientation",
    subtitle: "1600m Running, Chest & Medical Pre-Check",
    description: "Do not get rejected in medical or physical rounds. Get practical tips on running timings, pushups, sit-ups, and defense medical standards directly from ex-officers."
  },
  {
    id: "special-waivers",
    icon: "HeartHandshake",
    title: "Special Fee Waivers for Girls & Defense Personnel Wards",
    subtitle: "Honoring Soldiers & Empowering Women",
    description: "Significant fee concessions and scholarships for girl students and children of Indian Army, Navy, Air Force, and Police martyrs/personnel."
  }
];

export const MATH_SHORTCUT_DEMOS: ShortcutDemo[] = [
  {
    id: "compound-interest",
    title: "Compound Interest without Formula",
    category: "Arithmetic Mastery",
    problem: "Find CI on ₹10,000 @ 10% per annum for 3 years.",
    traditionalMethod: {
      steps: [
        "A = P(1 + R/100)^t = 10000(1 + 10/100)³",
        "A = 10000 × (11/10) × (11/10) × (11/10) = 13,310",
        "CI = Amount - Principal = 13,310 - 10,000 = ₹3,310",
        "Requires large multiplication & cube calculation"
      ],
      timeTaken: "2 to 3 Minutes"
    },
    raviSirShortcut: {
      trick: "Golden Ratio Method: 3 : 3 : 1",
      explanation: "10% of 10,000 = 1,000. 10% of 1,000 = 100. 10% of 100 = 10. Just multiply: (3 × 1000) + (3 × 100) + (1 × 10) = 3000 + 300 + 10 = ₹3,310. Answer in mind without pen!",
      timeTaken: "5 to 8 Seconds"
    }
  },
  {
    id: "time-and-work",
    title: "Time & Work (Pipe & Cistern) Trick",
    category: "Speed & Accuracy",
    problem: "A can do a work in 12 days, B in 15 days, and C in 20 days. In how many days can they finish it together?",
    traditionalMethod: {
      steps: [
        "1 Day work: 1/12 + 1/15 + 1/20",
        "LCM of 12, 15, 20 = 60",
        "Total work fraction = (5 + 4 + 3)/60 = 12/60 = 1/5",
        "Inverting fraction gives 5 days"
      ],
      timeTaken: "90 Seconds"
    },
    raviSirShortcut: {
      trick: "Efficiency Matrix on Total LCM 60",
      explanation: "Total Work = 60 units. Efficiency of A=5, B=4, C=3. Combined Efficiency = 5+4+3 = 12 units/day. Days = 60 / 12 = 5 Days directly. Zero fraction mess!",
      timeTaken: "6 Seconds"
    }
  },
  {
    id: "unit-digit",
    title: "Unit Digit Cyclicity for SSC CGL / CPO",
    category: "Number Systems",
    problem: "Find the unit digit of (7¹⁰⁵ × 3⁵⁸ + 4⁹⁹).",
    traditionalMethod: {
      steps: [
        "Writing out long power tables",
        "Calculating remainders manually across 3 parts",
        "High risk of calculation error under exam pressure"
      ],
      timeTaken: "2 Minutes"
    },
    raviSirShortcut: {
      trick: "Power ÷ 4 Modulo Rule",
      explanation: "7^(105 mod 4) = 7¹ = 7. 3^(58 mod 4) = 3² = 9. 4^odd = 4. Result unit digit = (7 × 9) + 4 = 63 + 4 = 67 -> Unit digit is 7! Solved in 7 seconds.",
      timeTaken: "7 Seconds"
    }
  }
];

export const STUDENT_TESTIMONIALS: StudentSelection[] = [
  {
    name: "Vikram Rajput",
    exam: "Airforce Agniveer (Group X)",
    rankOrPost: "Airman - Intake 01/2024",
    year: "2024",
    location: "Khandari, Agra",
    quote: "Ravi Sir's math shortcuts in Technical Math were a game changer. I cleared both the written test and the GD round with high marks. R.D. Classes feels like an officer training academy.",
    badgeColor: "bg-sky-500"
  },
  {
    name: "Deepak Sharma",
    exam: "UP Police Sub-Inspector (UPSI)",
    rankOrPost: "Sub-Inspector (SI)",
    year: "2023",
    location: "Fatehabad, Agra",
    quote: "Who can teach UPSI better than someone who has himself served as an SI? Ravi Sir taught us Mool Vidhi and tricky arithmetic with real-life case examples. Proud student of R.D. Career Classes!",
    badgeColor: "bg-emerald-600"
  },
  {
    name: "Anjali Tomar",
    exam: "SSC CPO 2023",
    rankOrPost: "Delhi Police Sub-Inspector",
    year: "2023",
    location: "Sikandra, Agra",
    quote: "As a female aspirant, getting proper physical guidance alongside high-level math was crucial. Ravi Sir personally guided my mock interviews and 800m sprint timing.",
    badgeColor: "bg-amber-600"
  },
  {
    name: "Mohit Kushwaha",
    exam: "SSC GD Constable",
    rankOrPost: "CISF Rifleman",
    year: "2024",
    location: "Etmadpur, Agra",
    quote: "Fee at R.D. Career Classes was within my family's budget. Ravi Sir gave me free test series and stayed after class until all my doubts were solved. Today I wear the uniform with pride!",
    badgeColor: "bg-blue-600"
  }
];

export const FAQS = [
  {
    q: "Where is R.D. Career Classes located in Agra?",
    a: "R.D. Career Classes is situated at Diamond City, Gwalior Rd, Nagla Padma, Agra, Rohta, Uttar Pradesh 282009. Easily accessible via Gwalior Road with convenient transport connectivity and a peaceful study environment."
  },
  {
    q: "Are demo classes available before paying fees?",
    a: "Yes! We provide 2 days of free demo classes so you can experience Ravi Pachori Sir's unique teaching style and 'Selection Runway Shortcuts' first-hand. Call or WhatsApp on 9808124401 to book your seat."
  },
  {
    q: "Does Ravi Pachori Sir teach Mathematics in all batches personally?",
    a: "Yes, 100%! Mr. Ravi Pachori Sir personally conducts the Core Mathematics, Aptitude, and Advanced Reasoning sessions to ensure every student masters his speed tricks."
  },
  {
    q: "Can I pay the coaching fee in easy installments?",
    a: "Absolutely. Our goal is to make elite defense & competitive education accessible to every hardworking student in Agra. Monthly installment options are available without any extra interest."
  },
  {
    q: "Is physical fitness & medical examination guidance included?",
    a: "Yes, physical training routines, 1600-meter endurance strategies, chest expansion drills, and preliminary medical checks are provided free of cost to all enrolled students."
  }
];
