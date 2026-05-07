export const COMPANY = {
  name: "Rahul's Art Agency",
  owner: "Rahul Bose",
  email: "rahul.bose@artagency.in",
  phone: "+91 8878 989 878",
  location: "Mumbai, India",
  teamSize: 8,
  founded: "2024",
  industry: ["Design Studio", "Marketing & Advertising", "Consulting"],
  totalInvestment: 2000000,
  valuation: "₹50–75 Lakhs",
  breakEvenMonth: "Month 4 (July 2025)"
};

export const MONTHLY_PNL = [
  { month: "Apr'25", revenue: 320000, expenses: 191000, profit: 129000, margin: 0.403 },
  { month: "May'25", revenue: 345000, expenses: 193000, profit: 152000, margin: 0.441 },
  { month: "Jun'25", revenue: 370000, expenses: 196000, profit: 174000, margin: 0.470 },
  { month: "Jul'25", revenue: 395000, expenses: 198000, profit: 197000, margin: 0.499 },
  { month: "Aug'25", revenue: 412000, expenses: 200000, profit: 212000, margin: 0.515 },
  { month: "Sep'25", revenue: 430000, expenses: 203000, profit: 227000, margin: 0.528 },
  { month: "Oct'25", revenue: 448000, expenses: 205000, profit: 243000, margin: 0.542 },
  { month: "Nov'25", revenue: 460000, expenses: 207000, profit: 253000, margin: 0.550 },
  { month: "Dec'25", revenue: 475000, expenses: 208000, profit: 267000, margin: 0.562 },
  { month: "Jan'26", revenue: 482000, expenses: 209000, profit: 273000, margin: 0.566 },
  { month: "Feb'26", revenue: 490000, expenses: 210000, profit: 280000, margin: 0.571 },
  { month: "Mar'26", revenue: 488000, expenses: 211000, profit: 277000, margin: 0.568 }
];

export const AI_TOOLS = [
  { name: "ChatGPT Plus", category: "AI – Copywriting", plan: "Plus", users: 4, monthly: 6800, annual: 81600, dailyHrs: 4, monthlyHrs: 120, score: 8.5, contractEnd: "Mar 2026", primaryUsers: "Marketing Head, Design Head", notes: "Content, strategy, briefs, ad copy" },
  { name: "Claude Pro", category: "AI – Writing/Analysis", plan: "Pro", users: 2, monthly: 3400, annual: 40800, dailyHrs: 3, monthlyHrs: 90, score: 8.0, contractEnd: "Mar 2026", primaryUsers: "Founder, Admin", notes: "Long-form content, SOPs, analysis" },
  { name: "Midjourney", category: "AI – Image Gen", plan: "Standard", users: 3, monthly: 2700, annual: 32400, dailyHrs: 4, monthlyHrs: 120, score: 8.2, contractEnd: "Mar 2026", primaryUsers: "Design Head, Sr Creative", notes: "Visual concepts, mood boards" },
  { name: "Adobe Firefly", category: "AI – Design", plan: "Teams", users: 2, monthly: 6600, annual: 79200, dailyHrs: 3, monthlyHrs: 90, score: 7.8, contractEnd: "Sep 2025", primaryUsers: "Design Head, Creative Staff", notes: "Generative design, fill", alert: "expiring_soon" },
  { name: "Runway ML", category: "AI – Video", plan: "Pro", users: 2, monthly: 10500, annual: 126000, dailyHrs: 2, monthlyHrs: 60, score: 7.0, contractEnd: "Jun 2025", primaryUsers: "Sr Creative, Marketing Head", notes: "AI video editing & motion graphics", alert: "urgent" },
  { name: "Gemini Advanced", category: "AI – Productivity", plan: "Business", users: 3, monthly: 2700, annual: 32400, dailyHrs: 2, monthlyHrs: 60, score: 6.5, contractEnd: "Mar 2026", primaryUsers: "Admin, IT, Founder", notes: "Docs, email, workspace integration" },
  { name: "Perplexity Pro", category: "AI – Research", plan: "Pro", users: 2, monthly: 3200, annual: 38400, dailyHrs: 2, monthlyHrs: 60, score: 7.2, contractEnd: "Jan 2026", primaryUsers: "Founder, Marketing Head", notes: "Market research, competitor intel" },
  { name: "ElevenLabs", category: "AI – Voice/Audio", plan: "Starter", users: 1, monthly: 1700, annual: 20400, dailyHrs: 1, monthlyHrs: 30, score: 5.5, contractEnd: "Monthly", primaryUsers: "Marketing Head", notes: "AI voiceovers for video content", alert: "underused" }
];

export const SAAS_TOOLS = [
  { name: "Notion AI", category: "AI – Productivity", plan: "Team", users: 8, monthly: 1600, annual: 19200, dailyHrs: 4, monthlyHrs: 120, score: 8.0, contractEnd: "Apr 2026" },
  { name: "Canva Pro", category: "Design", plan: "Teams", users: 4, monthly: 1400, annual: 16800, dailyHrs: 5, monthlyHrs: 150, score: 8.5, contractEnd: "Mar 2026" },
  { name: "Google Workspace", category: "Productivity", plan: "Business", users: 8, monthly: 1800, annual: 21600, dailyHrs: 6, monthlyHrs: 180, score: 9.0, contractEnd: "Ongoing" },
  { name: "Figma", category: "UI/UX Design", plan: "Professional", users: 2, monthly: 4800, annual: 57600, dailyHrs: 5, monthlyHrs: 150, score: 8.8, contractEnd: "Mar 2026" },
  { name: "Slack", category: "Communication", plan: "Pro", users: 6, monthly: 2400, annual: 28800, dailyHrs: 4, monthlyHrs: 120, score: 7.5, contractEnd: "Feb 2026" },
  { name: "Zoom", category: "Video Calls", plan: "Pro", users: 4, monthly: 1300, annual: 15600, dailyHrs: 2, monthlyHrs: 60, score: 7.0, contractEnd: "Jan 2026" },
  { name: "HubSpot CRM", category: "CRM", plan: "Starter", users: 2, monthly: 1900, annual: 22800, dailyHrs: 2, monthlyHrs: 60, score: 6.8, contractEnd: "Mar 2026" },
  { name: "Jira", category: "Project Mgmt", plan: "Standard", users: 4, monthly: 1200, annual: 14400, dailyHrs: 3, monthlyHrs: 90, score: 7.2, contractEnd: "Mar 2026" },
  { name: "Adobe Creative Cloud", category: "Design", plan: "Teams", users: 3, monthly: 5200, annual: 62400, dailyHrs: 4, monthlyHrs: 120, score: 8.1, contractEnd: "Sep 2025", alert: "expiring_soon" },
  { name: "Dropbox Business", category: "Storage", plan: "Plus", users: 4, monthly: 900, annual: 10800, dailyHrs: 1, monthlyHrs: 30, score: 5.8, contractEnd: "Dec 2025", alert: "underused" }
];

export const INVESTMENT = [
  { source: "Personal Savings", amount: 600000, pct: 0.30, type: "Equity", status: "Deployed" },
  { source: "Friends & Family", amount: 400000, pct: 0.20, type: "Equity", status: "Deployed" },
  { source: "Bank Loan (HDFC)", amount: 1000000, pct: 0.50, type: "Debt", status: "EMI ₹33,214/mo" }
];

export const KPIS = {
  financial: [
    { name: "Monthly Revenue", actual: "₹4,88,000", target: "₹5,00,000", achievement: "97.6%", status: "growing" },
    { name: "Net Profit Margin", actual: "60.8%", target: "55.0%", achievement: "110.5%", status: "strong" },
    { name: "AI + Software Spend", actual: "₹38,000", target: "₹40,000", achievement: "95.0%", status: "controlled" },
    { name: "CAC", actual: "₹3,200", target: "₹3,000", achievement: "106.7%", status: "watch" },
    { name: "ROI on Investment", actual: "23.4%", target: "20.0%", achievement: "117.0%", status: "excellent" }
  ],
  operational: [
    { name: "Active Projects", actual: "34", target: "30", achievement: "113.3%", status: "strong" },
    { name: "Project On-Time Delivery", actual: "88.0%", target: "90.0%", achievement: "97.8%", status: "near_target" },
    { name: "Utilization Rate", actual: "78.0%", target: "80.0%", achievement: "97.5%", status: "near_target" },
    { name: "Revision Requests Rate", actual: "18.5%", target: "15.0%", achievement: "81.0%", status: "watch" }
  ]
};
