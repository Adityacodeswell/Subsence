import {useState, useMemo} from 'react';
import {
  ArrowRight, 
  Building2, 
  Check, 
  User, 
  Search, 
  ChevronRight, 
  Plus, 
  X,
  CreditCard,
  Cloud,
  Zap,
  Target,
  ShieldCheck,
  TrendingDown,
  LayoutDashboard,
  Wallet,
  Settings,
  Mail,
  Smartphone,
  Lock,
  ArrowUpRight
} from 'lucide-react';
import {motion, AnimatePresence} from 'motion/react';
import {cn} from '../lib/utils';
import {COMPANY} from '../constants';

const STEPS_LABELS = ['About Yourself', 'Company Details', 'Tools', 'Priority', 'Payment', 'Finish'];

const INDUSTRIES = [
  'Advertising', 'Agriculture', 'Aerospace', 'Automotive', 'Apparel', 'Banking', 
  'Biotechnology', 'Broadcasting', 'Chemical', 'Computer', 'Construction', 'Consulting', 
  'Consumer Goods', 'Defense', 'Education', 'Electronics', 'Energy', 'Entertainment', 
  'Environmental', 'Finance', 'Food', 'Health', 'Hospitality', 'Insurance', 'Jewelery', 
  'Law', 'Manufacturing', 'Marketing', 'Media', 'Not For Profit', 'Real Estate', 
  'Retail', 'Shipping', 'Technology', 'Telecommunications', 'Transportation', 'Utilities'
];

interface OnboardingProps { onComplete: () => void; }

export default function Onboarding({onComplete}: OnboardingProps) {
  const [currentLogicalStep, setCurrentLogicalStep] = useState(0);
  
  // Form State
  const [setupType, setSetupType] = useState<'company' | 'freelancer' | null>(null);
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Rahul Bose',
    email: 'rahul.bose@artagency.in',
    phone: '+91 8878 989 878',
    password: ''
  });
  const [companyInfo, setCompanyInfo] = useState({
    name: 'Art Agency',
    size: '6-20',
    industry: 'Design Studio'
  });
  const [toolSearch, setToolSearch] = useState('');
  const [selectedTools, setSelectedTools] = useState<string[]>(['Slack', 'Notion', 'Figma', 'Google Workspace', 'OpenAI']);
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>(['Reduce software waste', 'Track AI spend']);
  const [dashboardFocus, setDashboardFocus] = useState<string[]>(['Contract Management', 'Cost Optimization']);
  const [plan, setPlan] = useState<'Base' | 'Standard' | 'Pro'>('Pro');

  // Mapping logical steps to progress bar steps (1-6)
  const progressStep = useMemo(() => {
    if (currentLogicalStep <= 0) return 0; // Welcome screen
    if (currentLogicalStep <= 2) return 1; // Work Setup, Personal Info
    if (currentLogicalStep === 3) return 2; // Company Details
    if (currentLogicalStep <= 6) return 3; // Tools Discovery, Selection, Permissions
    if (currentLogicalStep <= 8) return 4; // Priorities, Dash Focus
    if (currentLogicalStep === 9) return 5; // Payment
    return 6; // Finish
  }, [currentLogicalStep]);

  const nextStep = () => setCurrentLogicalStep(prev => prev + 1);
  const prevStep = () => setCurrentLogicalStep(prev => Math.max(0, prev - 1));

  return (
    <div className="min-h-screen bg-lavender flex flex-col font-sans text-primary">
      {/* Header */}
      <header className="p-6 md:p-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/src/assets/images/logo.jpeg" alt="SubSense Logo" className="w-10 h-10 object-contain" />
          <span className="text-2xl font-black tracking-tight">SubSense</span>
        </div>
        {currentLogicalStep > 0 && currentLogicalStep < 10 && (
          <button onClick={prevStep} className="text-sm font-bold text-primary/60 hover:text-primary transition-colors">
            Back
          </button>
        )}
      </header>

      <main className="flex-1 flex flex-col items-center justify-center py-6 px-6 md:px-10 overflow-hidden">
        {/* Progress Bar */}
        {progressStep > 0 && progressStep < 6 && (
          <div className="w-full max-w-4xl mb-12">
            <div className="flex justify-between relative">
              <div className="absolute top-4 left-0 w-full h-0.5 bg-gray-200 -z-10" />
              <div 
                className="absolute top-4 left-0 h-0.5 bg-primary transition-all duration-500 -z-10" 
                style={{width: `${((progressStep - 1) / (STEPS_LABELS.length - 1)) * 100}%`}}
              />
              {STEPS_LABELS.map((label, idx) => {
                const stepNum = idx + 1;
                const isActive = progressStep === stepNum;
                const isCompleted = progressStep > stepNum;
                
                return (
                  <div key={label} className="flex flex-col items-center gap-3">
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ring-4 ring-lavender",
                      isCompleted ? "bg-primary text-white" : 
                      isActive ? "bg-primary text-white scale-110 shadow-lg shadow-primary/20" : 
                      "bg-white text-gray-400 border border-gray-200"
                    )}>
                      {isCompleted ? <Check size={16} strokeWidth={3} /> : stepNum}
                    </div>
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-widest hidden md:block",
                      isActive ? "text-primary" : "text-gray-400"
                    )}>
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div 
            key={currentLogicalStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-5xl"
          >
            {currentLogicalStep === 0 && <Welcome next={nextStep} />}
            {currentLogicalStep === 1 && (
              <WorkSetup 
                type={setupType} 
                setType={setSetupType} 
                next={nextStep} 
              />
            )}
            {currentLogicalStep === 2 && (
              <AccountDetails 
                info={personalInfo} 
                setInfo={setPersonalInfo} 
                next={nextStep} 
              />
            )}
            {currentLogicalStep === 3 && (
              <CompanyDetails 
                info={companyInfo} 
                setInfo={setCompanyInfo} 
                next={nextStep} 
              />
            )}
            {currentLogicalStep === 4 && (
              <ToolDiscovery next={nextStep} skip={() => setCurrentLogicalStep(5)} />
            )}
            {currentLogicalStep === 5 && (
              <ToolSelection 
                selected={selectedTools} 
                setSelected={setSelectedTools} 
                search={toolSearch}
                setSearch={setToolSearch}
                next={nextStep} 
              />
            )}
            {currentLogicalStep === 6 && (
              <Permissions next={nextStep} />
            )}
            {currentLogicalStep === 7 && (
              <Priorities 
                selected={selectedPriorities} 
                setSelected={setSelectedPriorities} 
                next={nextStep} 
              />
            )}
            {currentLogicalStep === 8 && (
              <DashboardFocus 
                selected={dashboardFocus} 
                setSelected={setDashboardFocus} 
                next={nextStep} 
              />
            )}
            {currentLogicalStep === 9 && (
              <Plans 
                selected={plan} 
                setSelected={setPlan} 
                next={nextStep} 
              />
            )}
            {currentLogicalStep >= 10 && <Finish onComplete={onComplete} name={personalInfo.name} />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

// --- Subcomponents ---

function Welcome({next}: any) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
      <div className="flex-1 space-y-8 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight">
          Welcome to <br />
          <span className="text-primary italic">SubSense</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary/70 max-w-lg mx-auto md:mx-0">
          Track subscriptions, AI tools, and team expenses without the chaos.
        </p>
        <button 
          onClick={next} 
          className="group bg-cta text-primary hover:bg-primary hover:text-cta px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 transition-all mx-auto md:mx-0 shadow-xl shadow-cta/20 active:scale-95"
        >
          Get Started 
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px] bg-lavender rounded-[60px] overflow-hidden flex items-end justify-center">
        <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="relative w-full h-full flex items-center justify-center">
              <img 
                src="/src/assets/images/1st image.png" 
                alt="Welcome Illustration" 
                className="max-h-full object-contain relative z-10" 
              />
            </div>
        </div>
      </div>
    </div>
  );
}

function WorkSetup({type, setType, next}: any) {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl md:text-7xl font-serif italic font-black">Work Setup</h2>
        <p className="text-xl text-primary/60">How do you plan to use Subsense?</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <button 
          onClick={() => { setType('company'); next(); }}
          className={cn(
            "p-10 rounded-[40px] text-left transition-all group relative overflow-hidden",
            type === 'company' ? "bg-primary text-white scale-[1.02]" : "bg-white hover:bg-white/80"
          )}
        >
          <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8", type === 'company' ? "bg-white/10" : "bg-lavender")}>
            <Building2 size={32} />
          </div>
          <h3 className="text-3xl font-black mb-4">Company</h3>
          <p className={cn("text-lg", type === 'company' ? "text-white/70" : "text-primary/60")}>
            I want to manage subscriptions for my entire team or organization.
          </p>
          <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRight />
          </div>
        </button>

        <button 
          onClick={() => { setType('freelancer'); next(); }}
          className={cn(
            "p-10 rounded-[40px] text-left transition-all group relative overflow-hidden",
            type === 'freelancer' ? "bg-primary text-white scale-[1.02]" : "bg-white hover:bg-white/80"
          )}
        >
          <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8", type === 'freelancer' ? "bg-white/10" : "bg-lavender")}>
            <User size={32} />
          </div>
          <h3 className="text-3xl font-black mb-4">Freelancer</h3>
          <p className={cn("text-lg", type === 'freelancer' ? "text-white/70" : "text-primary/60")}>
            I'm an individual looking to track my personal professional tools.
          </p>
          <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRight />
          </div>
        </button>
      </div>
    </div>
  );
}

function AccountDetails({info, setInfo, next}: any) {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">
      <div className="flex-1 space-y-10">
        <div className="space-y-4">
          <h2 className="text-6xl font-black leading-tight">Let's get <br />you in</h2>
          <p className="text-xl text-primary/60">Create your account to start managing tools.</p>
        </div>
        
        <div className="space-y-4 max-w-md">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-4 text-primary/30" size={20} />
              <input 
                value={info.name} 
                onChange={e => setInfo({...info, name: e.target.value})}
                className="w-full bg-white border-2 border-transparent focus:border-primary p-4 pl-12 rounded-2xl outline-none transition-all font-bold"
                placeholder="Rahul Bose"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-1">Work Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-primary/30" size={20} />
              <input 
                value={info.email} 
                onChange={e => setInfo({...info, email: e.target.value})}
                className="w-full bg-white border-2 border-transparent focus:border-primary p-4 pl-12 rounded-2xl outline-none transition-all font-bold"
                placeholder="rahul.bose@artagency.in"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-1">Phone</label>
              <div className="relative">
                <Smartphone className="absolute left-4 top-4 text-primary/30" size={20} />
                <input 
                  value={info.phone} 
                  onChange={e => setInfo({...info, phone: e.target.value})}
                  className="w-full bg-white border-2 border-transparent focus:border-primary p-4 pl-12 rounded-2xl outline-none transition-all font-bold text-sm"
                  placeholder="+91 8878 989 878"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-4 text-primary/30" size={20} />
                <input 
                  type="password"
                  value={info.password} 
                  onChange={e => setInfo({...info, password: e.target.value})}
                  className="w-full bg-white border-2 border-transparent focus:border-primary p-4 pl-12 rounded-2xl outline-none transition-all font-bold text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>
        </div>

        <button onClick={next} className="bg-primary text-cta px-12 py-5 rounded-2xl font-black text-xl flex items-center gap-3 shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
          Continue <ArrowRight />
        </button>
      </div>
      
      <div className="hidden md:flex flex-1 h-[600px] bg-white rounded-[60px] border border-white p-12 items-center justify-center overflow-hidden">
         <motion.img 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            src="/src/assets/images/2nd image.png" 
            alt="Account Illustration" 
            className="max-h-full object-contain" 
         />
      </div>
    </div>
  );
}

function CompanyDetails({info, setInfo, next}: any) {
  const [showIndustryList, setShowIndustryList] = useState(false);
  const [industrySearch, setIndustrySearch] = useState('');
  
  const filteredIndustries = INDUSTRIES.filter(i => i.toLowerCase().includes(industrySearch.toLowerCase()));

  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative">
      <div className="flex-1 space-y-10 w-full">
        <div className="space-y-4">
          <h2 className="text-6xl font-black leading-tight">Tell us about <br />your company</h2>
          <p className="text-xl text-primary/60">This helps us customize your dashboard benchmarks.</p>
        </div>

        <div className="space-y-8 max-w-md">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-1">Company Name</label>
            <input 
              value={info.name} 
              onChange={e => setInfo({...info, name: e.target.value})}
              className="w-full bg-white border-2 border-transparent focus:border-primary p-4 rounded-2xl outline-none transition-all font-bold"
              placeholder="e.g. Acme Corp"
            />
          </div>

          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-1">Company Size</label>
            <div className="flex flex-wrap gap-2">
              {['1-5', '6-20', '21-50', '51-200', '201-500', '500+'].map(size => (
                <button 
                  key={size}
                  onClick={() => setInfo({...info, size})}
                  className={cn(
                    "px-5 py-2.5 rounded-xl font-bold transition-all border-2",
                    info.size === size ? "bg-primary text-white border-primary" : "bg-white text-primary/40 border-transparent hover:border-primary/20"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-1">Industry</label>
            <button 
              onClick={() => setShowIndustryList(true)}
              className="w-full bg-white border-2 border-transparent hover:border-primary p-4 rounded-2xl text-left flex items-center justify-between transition-all group"
            >
              <span className={cn("font-bold", info.industry ? "text-primary" : "text-primary/30")}>
                {info.industry || "Select Industry"}
              </span>
              <ChevronRight className="text-primary/20 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <button onClick={next} className="bg-primary text-cta px-12 py-5 rounded-2xl font-black text-xl flex items-center gap-3 shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
          Continue <ArrowRight />
        </button>
      </div>

      <div className="hidden md:flex flex-1 h-[600px] bg-white rounded-[60px] border border-white p-12 items-center justify-center overflow-hidden">
         <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            src="/src/assets/images/3rd image.png" 
            alt="Company Illustration" 
            className="max-h-full object-contain rounded-3xl" 
         />
      </div>

      {/* Industry Drawer Simulation */}
      <AnimatePresence>
        {showIndustryList && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowIndustryList(false)}
              className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-40"
            />
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 h-[80vh] bg-white rounded-t-[40px] z-50 p-8 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-black">Select Industry</h3>
                <button onClick={() => setShowIndustryList(false)} className="p-2 hover:bg-lavender rounded-full transition-colors">
                  <X />
                </button>
              </div>
              
              <div className="relative mb-8">
                <Search className="absolute left-5 top-5 text-primary/30" />
                <input 
                  autoFocus
                  placeholder="Search industries..."
                  value={industrySearch}
                  onChange={e => setIndustrySearch(e.target.value)}
                  className="w-full bg-lavender/50 p-5 pl-14 rounded-2xl font-bold outline-none"
                />
              </div>

              <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredIndustries.map(industry => (
                  <button 
                    key={industry}
                    onClick={() => { setInfo({...info, industry}); setShowIndustryList(false); }}
                    className={cn(
                      "p-5 rounded-2xl text-left font-bold transition-all flex items-center justify-between group",
                      info.industry === industry ? "bg-primary text-white" : "bg-lavender/30 hover:bg-lavender"
                    )}
                  >
                    {industry}
                    {info.industry === industry && <Check size={20} />}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function ToolDiscovery({next, skip}: any) {
  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">
      <div className="flex-1 space-y-10">
        <div className="space-y-4">
          <h2 className="text-6xl font-black leading-tight">Which tools do you <br />currently use?</h2>
          <p className="text-xl text-primary/60">Connect your work accounts to automatically fetch subscriptions or add them manually.</p>
        </div>

        <div className="space-y-4 max-w-md">
          <button onClick={next} className="w-full flex items-center gap-6 p-8 bg-white rounded-3xl group hover:shadow-xl hover:shadow-primary/5 transition-all text-left">
            <div className="w-16 h-16 bg-lavender rounded-2xl flex items-center justify-center shrink-0">
               <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-black mb-1">Fetch from Google Workspace</h4>
              <p className="text-sm text-primary/50">Automatically detect and import all SaaS tools your team uses.</p>
            </div>
            <ArrowRight className="ml-auto text-primary/20 group-hover:translate-x-1 group-hover:text-primary transition-all" />
          </button>

          <button onClick={skip} className="w-full flex items-center gap-6 p-8 bg-white border-2 border-dashed border-gray-200 rounded-3xl group hover:border-primary/20 transition-all text-left">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center shrink-0">
               <Plus className="text-primary/30" />
            </div>
            <div>
              <h4 className="text-xl font-black mb-1 text-primary/60">Add Tools Manually</h4>
              <p className="text-sm text-primary/40">Select from our tool library or create custom entries.</p>
            </div>
            <ArrowRight className="ml-auto text-primary/20 group-hover:translate-x-1 transition-all" />
          </button>
        </div>
      </div>

      <div className="hidden md:flex flex-1 h-[600px] bg-white rounded-[60px] border border-white p-12 items-center justify-center overflow-hidden">
         <motion.img 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            src="/src/assets/images/4th image.png" 
            alt="Tools Illustration" 
            className="max-h-full object-contain rounded-3xl" 
         />
      </div>
    </div>
  );
}

function ToolSelection({selected, setSelected, search, setSearch, next}: any) {
  const allTools = [
    { name: 'Slack', color: '#4A154B' },
    { name: 'Notion', color: '#000000' },
    { name: 'Figma', color: '#F24E1E' },
    { name: 'Google Workspace', color: '#4285F4' },
    { name: 'OpenAI', color: '#10A37F' },
    { name: 'Jira', color: '#0052CC' },
    { name: 'HubSpot', color: '#FF7A59' },
    { name: 'Zoom', color: '#2D8CFF' },
    { name: 'Canva', color: '#00C4CC' },
    { name: 'AWS', color: '#232F3E' },
    { name: 'Salesforce', color: '#00A1E0' },
    { name: 'Linear', color: '#5E6AD2' },
  ];

  const filteredTools = allTools.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));

  const toggle = (tool: string) => {
    setSelected((prev: string[]) => prev.includes(tool) ? prev.filter(t => t !== tool) : [...prev, tool]);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-6xl font-black">Which tools do you <br />currently use?</h2>
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-5 top-5 text-primary/30" />
          <input 
            placeholder="Search tools..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-white p-5 pl-14 rounded-2xl font-bold outline-none border border-transparent focus:border-primary shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredTools.map(tool => (
          <button 
            key={tool.name}
            onClick={() => toggle(tool.name)}
            className={cn(
              "p-6 rounded-[32px] flex flex-col items-center justify-center gap-4 transition-all relative border-2",
              selected.includes(tool.name) ? "bg-white border-primary shadow-lg shadow-primary/5" : "bg-white/40 border-transparent hover:bg-white/60"
            )}
          >
            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-xl")}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: tool.color }}>
                   {tool.name[0]}
                </div>
            </div>
            <span className="text-[12px] font-bold uppercase tracking-wider">{tool.name}</span>
            {selected.includes(tool.name) && (
              <div className="absolute top-3 right-3 w-6 h-6 bg-primary text-cta rounded-full flex items-center justify-center">
                <Check size={14} strokeWidth={4} />
              </div>
            )}
          </button>
        ))}
        {allTools.length > filteredTools.length && (
          <div className="p-6 rounded-[32px] bg-white/20 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-2 opacity-50">
             <Plus />
             <span className="text-[10px] font-bold">Add Custom</span>
          </div>
        )}
      </div>

      <div className="flex justify-center pt-8">
        <button onClick={next} className="bg-primary text-cta px-16 py-5 rounded-2xl font-black text-xl flex items-center gap-3 shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
          Continue <ArrowRight />
        </button>
      </div>
    </div>
  );
}

function Permissions({next}: any) {
  return (
    <div className="max-w-4xl mx-auto space-y-12 bg-white rounded-[60px] p-12 md:p-20 shadow-2xl shadow-primary/5 text-center">
      <div className="w-24 h-24 bg-lavender rounded-3xl flex items-center justify-center mx-auto mb-10">
        <ShieldCheck size={48} className="text-primary" />
      </div>
      
      <div className="space-y-4">
        <h2 className="text-5xl font-black">We will be able to:</h2>
        <p className="text-xl text-primary/60 max-w-lg mx-auto">
          SubSense connects securely to your Workspace to find subscription data.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto py-8">
        <div className="flex gap-4">
          <div className="shrink-0 w-6 h-6 bg-cta/30 text-primary rounded-full flex items-center justify-center mt-1">
            <Check size={14} strokeWidth={3} />
          </div>
          <p className="font-bold">View your basic profile information (name, email)</p>
        </div>
        <div className="flex gap-4">
          <div className="shrink-0 w-6 h-6 bg-cta/30 text-primary rounded-full flex items-center justify-center mt-1">
            <Check size={14} strokeWidth={3} />
          </div>
          <p className="font-bold">List and view admin roles for your directory</p>
        </div>
        <div className="flex gap-4">
          <div className="shrink-0 w-6 h-6 bg-cta/30 text-primary rounded-full flex items-center justify-center mt-1">
            <Check size={14} strokeWidth={3} />
          </div>
          <p className="font-bold">View metadata about SaaS apps and billing</p>
        </div>
        <div className="flex gap-4">
          <div className="shrink-0 w-6 h-6 bg-cta/30 text-primary rounded-full flex items-center justify-center mt-1">
            <Check size={14} strokeWidth={3} />
          </div>
          <p className="font-bold">Access is read-only. We never modify your data.</p>
        </div>
      </div>

      <div className="space-y-6">
        <button onClick={next} className="bg-primary text-white px-20 py-5 rounded-2xl font-black text-xl hover:scale-[1.02] active:scale-95 transition-all">
          I Understand & Trust
        </button>
        <p className="text-sm text-primary/40">You can revoke access at any time from your account settings.</p>
      </div>
    </div>
  );
}

function Priorities({selected, setSelected, next}: any) {
  const priorities = [
    { title: 'Reduce software waste', icon: <TrendingDown />, desc: 'Identify unused licenses and redundant tools.' },
    { title: 'Track AI spend', icon: <Zap />, desc: 'Monitor burgeoning costs of AI tool subscriptions.' },
    { title: 'Team productivity', icon: <Target />, desc: 'Measure how tools impact team output.' },
    { title: 'Benchmark spend', icon: <ArrowUpRight />, desc: 'Compare your spend against industry averages.' },
    { title: 'Manage renewals', icon: <Smartphone />, desc: 'Never miss a renewal or price hike again.' },
    { title: 'Improve visibility', icon: <LayoutDashboard />, desc: 'Get a single view of all company-wide tools.' },
  ];

  const toggle = (p: string) => {
    setSelected((prev: string[]) => prev.includes(p) ? prev.filter(i => i !== p) : [...prev, p]);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-6xl font-black">What do you want SubSense <br />to help with first?</h2>
        <p className="text-xl text-primary/60">Choose your top 2 priorities to tailor your initial experience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {priorities.map(p => (
          <button 
            key={p.title}
            onClick={() => toggle(p.title)}
            className={cn(
              "p-8 rounded-[40px] text-left transition-all relative border-2 group",
              selected.includes(p.title) ? "bg-primary text-white border-primary scale-105 shadow-2xl shadow-primary/20" : "bg-white border-transparent hover:border-primary/20"
            )}
          >
            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", selected.includes(p.title) ? "bg-white/10" : "bg-lavender")}>
              {p.icon}
            </div>
            <h3 className="text-2xl font-black mb-2">{p.title}</h3>
            <p className={cn("text-sm", selected.includes(p.title) ? "text-white/60" : "text-primary/40")}>{p.desc}</p>
            {selected.includes(p.title) && (
              <div className="absolute top-6 right-6 w-8 h-8 bg-cta text-primary rounded-full flex items-center justify-center shadow-lg">
                <Check size={18} strokeWidth={4} />
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <button onClick={next} className="bg-primary text-cta px-16 py-5 rounded-2xl font-black text-xl flex items-center gap-3 shadow-2xl shadow-primary/20">
          Continue <ArrowRight />
        </button>
      </div>
    </div>
  );
}

function DashboardFocus({selected, setSelected, next}: any) {
  const modules = [
    { name: 'Contract Management', icon: <Smartphone /> },
    { name: 'Renewals', icon: <TrendingDown /> },
    { name: 'AI Management', icon: <Zap /> },
    { name: 'Cost Optimization', icon: <Wallet /> },
    { name: 'Shadow IT', icon: <Lock /> },
  ];

  const toggle = (m: string) => {
    setSelected((prev: string[]) => prev.includes(m) ? prev.filter(i => i !== m) : [...prev, m]);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-6xl font-black italic font-serif">What should your <br />Dashboard focus on</h2>
        <p className="text-xl text-primary/60">Toggle the modules you want to see standard on your home screen.</p>
      </div>

      <div className="space-y-4">
        {modules.map(m => (
          <div key={m.name} className="bg-white p-6 rounded-3xl flex items-center justify-between shadow-sm border border-white/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-lavender rounded-xl flex items-center justify-center text-primary">
                 {m.icon}
              </div>
              <span className="text-xl font-bold">{m.name}</span>
            </div>
            <button 
              onClick={() => toggle(m.name)}
              className={cn(
                "w-14 h-8 rounded-full relative transition-all duration-300",
                selected.includes(m.name) ? "bg-primary" : "bg-gray-200"
              )}
            >
              <div className={cn(
                "absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300",
                selected.includes(m.name) ? "left-7 shadow-[0_0_15px_rgba(255,255,255,0.4)]" : "left-1"
              )} />
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <button onClick={next} className="bg-primary text-cta px-16 py-5 rounded-2xl font-black text-xl flex items-center gap-3 shadow-2xl shadow-primary/20">
          Finish Setup <ArrowRight />
        </button>
      </div>
    </div>
  );
}

function Plans({selected, setSelected, next}: any) {
  const plans = [
    {
      name: 'Base',
      price: '0',
      desc: 'Free forever for individuals',
      features: ['Up to 10 tools', 'Personal dashboard', 'Manual tracking']
    },
    {
      name: 'Standard',
      price: '24',
      desc: 'Better for small teams (5-20)',
      features: ['Unlimited tools', 'Google fetch integration', 'Basic savings reports', 'Renewal alerts'],
      popular: false
    },
    {
      name: 'Pro',
      price: '49',
      desc: 'Everything for power users & larger teams',
      features: ['Everything in Standard', 'AI Spend Analytics', 'Custom Benchmarks', 'Priority Support', 'SSO & Multi-admin'],
      popular: true
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-6xl font-black">Choose your <br />SubSense plan</h2>
        <p className="text-xl text-primary/60">Start with our most popular plan, switch anytime.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-8">
        {plans.map(p => (
          <div 
            key={p.name}
            className={cn(
               "p-10 rounded-[48px] flex flex-col transition-all relative",
               p.popular ? "bg-primary text-white scale-[1.05] shadow-2xl shadow-primary/30 z-10" : "bg-white text-primary"
            )}
          >
            {p.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cta text-primary text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-xl">
                Most Popular
              </div>
            )}
            <h3 className="text-3xl font-black mb-2">{p.name}</h3>
            <p className={cn("text-sm mb-10", p.popular ? "text-white/60" : "text-primary/40")}>{p.desc}</p>
            
            <div className="flex items-baseline gap-2 mb-10">
              <span className="text-6xl font-black italic font-serif">₹{p.price}</span>
              <span className={cn("text-xs font-bold uppercase", p.popular ? "text-white/40" : "text-primary/20")}>/ month / user</span>
            </div>

            <div className="space-y-4 flex-1 mb-10">
              {p.features.map(f => (
                <div key={f} className="flex gap-3 text-sm">
                   <div className={cn("shrink-0 w-5 h-5 rounded-full flex items-center justify-center", p.popular ? "bg-cta/20 text-cta" : "bg-primary/10 text-primary")}>
                      <Check size={12} strokeWidth={4} />
                   </div>
                   <span className="font-bold">{f}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => { setSelected(p.name as any); next(); }}
              className={cn(
                "w-full py-5 rounded-2xl font-black text-xl transition-all",
                p.popular ? "bg-white text-primary hover:bg-cta hover:text-primary" : "bg-lavender text-primary hover:bg-primary hover:text-white"
              )}
            >
              Select {p.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Finish({onComplete, name}: any) {
  return (
    <div className="max-w-4xl mx-auto text-center space-y-12">
      <div className="w-48 h-48 mx-auto relative">
        <div className="absolute inset-0 bg-cta/20 rounded-full animate-pulse" />
        <div className="absolute inset-4 bg-cta/40 rounded-full" />
        <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-5xl">🎉</div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-7xl font-black">You're all set, <br /><span className="text-primary italic font-serif">{name.split(' ')[0]}!</span></h2>
        <p className="text-2xl text-primary/60 max-w-lg mx-auto">
          We've analyzed your stack and prepared your dashboard.
        </p>
      </div>

      <div className="bg-white p-12 rounded-[60px] shadow-2xl shadow-primary/5 inline-block relative border-t-[12px] border-cta">
        <p className="text-xs font-black text-primary/30 uppercase tracking-[0.3em] mb-4">Estimated First-Month Savings</p>
        <div className="text-8xl font-black font-serif italic mb-12">₹28,000</div>
        
        <button 
          onClick={onComplete} 
          className="bg-primary text-cta hover:bg-cta hover:text-primary px-16 py-6 rounded-3xl font-black text-2xl flex items-center gap-4 transition-all mx-auto shadow-xl"
        >
          Open My Dashboard 
          <LayoutDashboard size={28} />
        </button>
      </div>
    </div>
  );
}
