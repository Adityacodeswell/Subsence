import {useState, ReactNode} from 'react';
import {
  LayoutDashboard, 
  Package, 
  Bot, 
  CreditCard, 
  Calendar, 
  Lightbulb, 
  BarChart3, 
  Settings, 
  Search, 
  Bell, 
  Moon, 
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  AlertTriangle
} from 'lucide-react';
import {cn, formatINR} from '../lib/utils';
import {COMPANY, MONTHLY_PNL} from '../constants';
import {
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area,
  PieChart, Pie, Cell,
  LineChart, Line
} from 'recharts';

import ApplicationsPage from './pages/Applications';
import AISpendPage from './pages/AISpend';
import SaaSSpendPage from './pages/SaaSSpend';
import RenewalsPage from './pages/Renewals';
import SavingsPage from './pages/Savings';
import ReportsPage from './pages/Reports';
import SettingsPage from './pages/Settings';
const SidebarItem = ({icon: Icon, label, active, onClick}: {icon: any, label: string, active?: boolean, onClick: () => void}) => (
  <button 
    onClick={onClick}
    className={cn(
      "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold text-sm",
      active ? "bg-primary text-white shadow-lg" : "text-gray-500 hover:bg-light-purple hover:text-primary"
    )}
  >
    <Icon size={18} />
    {label}
  </button>
);

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardHome />;
      case 'applications': return <ApplicationsPage />;
      case 'aiSpend': return <AISpendPage />;
      case 'saasSpend': return <SaaSSpendPage />;
      case 'renewals': return <RenewalsPage />;
      case 'savings': return <SavingsPage />;
      case 'reports': return <ReportsPage />;
      case 'settings': return <SettingsPage />;
      default: return <DashboardHome />;
    }
  };

  return (
    <div className="flex h-screen bg-[#F7F8FC] overflow-hidden">
      {/* Sidebar */}
      <aside className={cn(
        "bg-white border-r border-gray-100 flex flex-col transition-all duration-300",
        isSidebarOpen ? "w-64" : "w-20"
      )}>
        <div className="p-6 flex items-center gap-3">
          <img src="/src/assets/images/regenerated_image_1778164173384.jpg" alt="SubSense Logo" className="w-8 h-8 object-contain" referrerPolicy="no-referrer" />
          {isSidebarOpen && (
            <div className="flex flex-col">
              <span className="font-extrabold text-lg leading-none">SubSense</span>
              <span className="text-[8px] text-gray-400 font-bold tracking-widest mt-1">SPEND INTELLIGENCE</span>
            </div>
          )}
        </div>

        <nav className="flex-1 px-4 py-4 space-y-8 overflow-y-auto">
          <div className="space-y-1">
            <p className="px-4 text-[10px] font-extrabold text-gray-400 tracking-widest mb-2">WORKSPACE</p>
            <SidebarItem icon={LayoutDashboard} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
            <SidebarItem icon={Package} label="Applications" active={activeTab === 'applications'} onClick={() => setActiveTab('applications')} />
          </div>

          <div className="space-y-1">
            <p className="px-4 text-[10px] font-extrabold text-gray-400 tracking-widest mb-2">INTELLIGENCE</p>
            <SidebarItem icon={Bot} label="AI Spend" active={activeTab === 'aiSpend'} onClick={() => setActiveTab('aiSpend')} />
            <SidebarItem icon={CreditCard} label="SaaS Spend" active={activeTab === 'saasSpend'} onClick={() => setActiveTab('saasSpend')} />
            <SidebarItem icon={Calendar} label="Renewals" active={activeTab === 'renewals'} onClick={() => setActiveTab('renewals')} />
            <SidebarItem icon={Lightbulb} label="Savings" active={activeTab === 'savings'} onClick={() => setActiveTab('savings')} />
          </div>

          <div className="space-y-1">
            <p className="px-4 text-[10px] font-extrabold text-gray-400 tracking-widest mb-2">OPERATE</p>
            <SidebarItem icon={BarChart3} label="Reports" active={activeTab === 'reports'} onClick={() => setActiveTab('reports')} />
            <SidebarItem icon={Settings} label="Settings" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
          </div>
        </nav>

        <div className="p-4">
          <div className="bg-light-purple rounded-2xl p-4 space-y-3">
            <p className="text-[10px] font-bold text-primary tracking-widest uppercase">THIS MONTH</p>
            <p className="text-2xl font-black text-primary leading-none">₹48,000</p>
            <p className="text-[10px] text-gray-500 font-medium">in actionable savings</p>
            <button className="w-full bg-cta text-black py-2 rounded-xl text-xs font-bold hover:opacity-90">Review savings</button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 z-10">
          <div className="flex-1 max-w-md relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search... ⌘K" 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-gray-200 focus:outline-none transition-all text-sm"
            />
          </div>
          
          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-gray-600"><Moon size={20} /></button>
            <button className="text-gray-400 hover:text-gray-600 relative">
               <Bell size={20} />
               <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3">
               <div className="text-right">
                  <p className="text-sm font-bold leading-none">Rahul Mehta</p>
                  <p className="text-[10px] text-gray-500 font-medium mt-1">Admin</p>
               </div>
               <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold">RM</div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-hidden p-6">
           {renderContent()}
        </main>
      </div>
    </div>
  );
}

// Pages Implementation (Stubbed for now, will fulfill in next parts)
function DashboardHome() {
  const lineData = [
    {month: 'Jan', spend: 320000}, {month: 'Feb', spend: 345000}, {month: 'Mar', spend: 370000},
    {month: 'Apr', spend: 395000}, {month: 'May', spend: 412000}, {month: 'Jun', spend: 430000},
    {month: 'Jul', spend: 448000}, {month: 'Aug', spend: 460000}, {month: 'Sep', spend: 475000},
    {month: 'Oct', spend: 482000}, {month: 'Nov', spend: 490000}, {month: 'Dec', spend: 488000}
  ];

  const sparklineData = [
    {v: 40}, {v: 45}, {v: 42}, {v: 48}, {v: 52}, {v: 58}, {v: 62}
  ];

  return (
    <div className="h-full flex flex-col gap-4 overflow-hidden">
      {/* Header Row */}
      <div className="flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
           <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-gray-100 shadow-sm overflow-hidden text-primary">
              <img src="/src/assets/images/regenerated_image_1778164173384.jpg" alt="Logo" className="w-7 h-7 object-contain" referrerPolicy="no-referrer" />
           </div>
           <div>
              <h1 className="text-xl font-black text-gray-900 leading-none">{COMPANY.name}</h1>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">
                {COMPANY.owner} · {COMPANY.location.split(',')[0]} · Team: {COMPANY.teamSize} · Est. {COMPANY.founded}
              </p>
           </div>
        </div>
        <div className="flex gap-2">
           <button className="bg-white border border-gray-200 px-3 py-1.5 rounded-xl text-xs font-semibold hover:bg-gray-50 transition-all flex items-center gap-2">Customize <Settings size={14} /></button>
           <button className="bg-primary text-white px-3 py-1.5 rounded-xl text-xs font-semibold hover:opacity-90 transition-all flex items-center gap-2">Add New <Plus size={14} /></button>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="flex-1 grid grid-cols-4 grid-rows-3 gap-4 min-h-0">
         {/* Top Row: Hero & Action Summary */}
         <div className="col-span-3 bg-white p-5 rounded-[32px] shadow-sm border border-gray-100 flex flex-col min-h-0">
            <div className="flex items-center justify-between mb-4 shrink-0">
               <div className="flex items-center gap-2">
                  <p className="text-[10px] font-extrabold text-primary tracking-widest uppercase">RECOMMENDED ACTIONS ⚡</p>
               </div>
               <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none">Monthly Spend Jan–Dec 2025</p>
            </div>
            <div className="flex-1 min-h-0">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={lineData}>
                     <defs>
                        <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#4C2D9C" stopOpacity={0.1}/>
                           <stop offset="95%" stopColor="#4C2D9C" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                     <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 9, fill: '#999'}} />
                     <YAxis hide domain={[300000, 500000]} />
                     <Tooltip content={<CustomTooltip />} />
                     <Area type="monotone" dataKey="spend" stroke="#4C2D9C" strokeWidth={2.5} fillOpacity={1} fill="url(#colorSpend)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
            <div className="flex gap-2 mt-4 shrink-0 overflow-x-auto no-scrollbar pb-1">
               <ActionChip label="Licenses" saving="₹8,100" />
               <ActionChip label="Runway ML" saving="₹5,250" />
               <ActionChip label="Figma" saving="₹2,400" />
            </div>
         </div>

         <div className="bg-light-purple rounded-[32px] p-6 flex flex-col justify-between items-start border border-primary/5">
            <div>
               <p className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1">THIS MONTH</p>
               <h3 className="text-3xl font-black text-primary leading-none">₹48,000</h3>
               <p className="text-[10px] text-gray-500 font-bold mt-2">actionable savings</p>
            </div>
            <button className="w-full bg-[#D4FF33] text-black py-4 rounded-2xl text-xs font-black hover:opacity-90 shadow-lg shadow-[#D4FF33]/20 transition-all uppercase tracking-tighter">Review savings</button>
         </div>

         {/* MiddleRow: KPI Grids */}
         <KPICard title="AI SPEND" value="₹37,600/mo" sub="+14% fast" trend="up" chart={<Sparkline data={sparklineData} color="#F97316" />} />
         <KPICard title="SAAS SPEND" value="₹19,000/mo" sub="+8% trend" trend="up" chart={<Sparkline data={sparklineData} color="#4C2D9C" />} />
         <KPICard title="CHURN RATE" value="4.8%" sub="2 inactive" trend="down" chart={<DonutChart percent={4.8} color="#4C2D9C" />} />

         {/* Optimization Recovery (Spans 2 rows) */}
         <div className="row-span-2 bg-white p-6 rounded-[32px] shadow-sm border border-gray-100 flex flex-col min-h-0">
            <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-4 shrink-0">RECOVERY DETAILS</p>
            <div className="flex-1 flex flex-col justify-around min-h-0">
               <div className="relative flex justify-center items-center h-40 shrink-0">
                  <ResponsiveContainer width="100%" height="100%">
                     <PieChart>
                        <Pie data={[{v:60},{v:40},{v:100}]} cx="50%" cy="50%" innerRadius={42} outerRadius={55} paddingAngle={5} dataKey="v">
                           <Cell fill="#4C2D9C" />
                           <Cell fill="#8A63F2" />
                           <Cell fill="#D6BCFA" />
                        </Pie>
                     </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                     <p className="text-lg font-black leading-none">₹20L</p>
                     <p className="text-[8px] text-gray-400 font-bold uppercase tracking-tighter">Investment</p>
                  </div>
               </div>
               <div className="space-y-1.5 px-2 shrink-0">
                  <LegendItem color="#4C2D9C" label="Savings" value="₹6L" />
                  <LegendItem color="#8A63F2" label="Friends" value="₹4L" />
                  <LegendItem color="#D6BCFA" label="Loan" value="₹10L" />
               </div>
               <div className="pt-3 space-y-1 border-t border-gray-50 mt-4 shrink-0">
                  <div className="flex justify-between items-end">
                     <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Progress</p>
                     <p className="text-[10px] font-black text-primary">65%</p>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                     <div className="h-full bg-primary rounded-full" style={{ width: '65%' }} />
                  </div>
               </div>
               <button className="w-full bg-[#D4FF33] text-black py-3 rounded-xl text-[10px] font-black mt-4 shadow-sm shrink-0 uppercase">Calculator</button>
            </div>
         </div>

         {/* Bottom Cards */}
         <div className="bg-white p-5 rounded-[32px] border border-gray-100 flex flex-col min-h-0 overflow-hidden">
            <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-4 shrink-0 text-center">RENEWALS DUE</p>
            <div className="flex-1 space-y-4 overflow-y-auto no-scrollbar">
               <RenewalItem name="Runway ML" date="Jun 2025" status="urgent" />
               <RenewalItem name="Adobe Firefly" date="Sep 2025" status="warning" />
               <RenewalItem name="Perplexity" date="Jan 2026" status="safe" />
            </div>
         </div>

         <div className="bg-white p-5 rounded-[32px] border border-gray-100 flex flex-col justify-between overflow-hidden">
            <div>
               <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-3 text-center">LEAST USED</p>
               <h4 className="font-extrabold text-sm mb-1 text-center">ElevenLabs</h4>
               <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-3">
                  <div className="h-full bg-red-500 w-[55%] rounded-full" />
               </div>
               <p className="text-[9px] font-black text-red-500 uppercase flex items-center justify-center gap-1">
                  <AlertTriangle size={10} /> RECOMMEND: DOWNGRADE
               </p>
            </div>
            <button className="w-full bg-light-purple text-primary py-2 rounded-xl text-[10px] font-black mt-2 uppercase">Analysis</button>
         </div>

         <div className="bg-primary text-white p-6 rounded-[32px] flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10 h-full flex flex-col justify-between">
               <div>
                  <p className="text-[10px] font-bold text-white/40 tracking-widest uppercase mb-3">TOOL BATTLE</p>
                  <h3 className="text-sm font-bold leading-tight uppercase">ChatGPT <span className="text-white/20 font-medium">vs</span><br/> Claude Pro</h3>
                  <div className="mt-4 flex items-center justify-between">
                     <span className="text-cta font-black text-xl leading-none">48.7%</span>
                     <span className="text-white/20 font-black text-base leading-none">35.0%</span>
                  </div>
               </div>
               <div className="pt-3 border-t border-white/10 flex justify-between items-end">
                  <div>
                    <p className="text-[8px] font-bold text-white/40 uppercase leading-none mb-1">WINNER</p>
                    <p className="text-xs font-black text-cta uppercase leading-none">CHATGPT PLUS</p>
                  </div>
                  <Bot size={16} className="text-cta" />
               </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -mr-16 -mt-16" />
         </div>

      </div>
    </div>
  );
}

function KPICard({title, value, sub, trend, chart}: {title: string, value: string, sub: string, trend: 'up' | 'down', chart?: ReactNode}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
      <div className="flex justify-between items-start">
         <div>
            <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">{title}</p>
            <h3 className="text-2xl font-black text-gray-900 leading-none">{value}</h3>
         </div>
         {chart && <div className="shrink-0">{chart}</div>}
      </div>
      <div className="mt-4 flex items-center gap-2">
         <div className={cn(
           "w-6 h-6 rounded-full flex items-center justify-center",
           trend === 'up' ? "bg-orange-50 text-orange-500" : "bg-green-50 text-green-500"
         )}>
           {trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
         </div>
         <span className={cn(
           "text-xs font-bold",
           trend === 'up' ? "text-orange-500" : "text-green-500"
         )}>{sub}</span>
      </div>
    </div>
  );
}

function Sparkline({data, color}: {data: any[], color: string}) {
  return (
    <div className="w-16 h-8">
       <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
             <Line type="monotone" dataKey="v" stroke={color} strokeWidth={2} dot={false} />
          </LineChart>
       </ResponsiveContainer>
    </div>
  );
}

function DonutChart({percent, color}: {percent: number, color: string}) {
  const data = [{value: percent}, {value: 100 - percent}];
  return (
    <div className="w-10 h-10">
       <ResponsiveContainer width="100%" height="100%">
          <PieChart>
             <Pie data={data} innerRadius={12} outerRadius={18} dataKey="value" startAngle={90} endAngle={-270}>
                <Cell fill={color} />
                <Cell fill="#F3F4F6" />
             </Pie>
          </PieChart>
       </ResponsiveContainer>
    </div>
  );
}

function ActionChip({label, saving}: {label: string, saving: string}) {
  return (
    <div className="bg-light-purple px-4 py-2 rounded-xl flex items-center gap-2 border border-primary/10">
      <span className="text-xs font-bold text-gray-700">{label}</span>
      <ChevronRight size={14} className="text-primary" />
      <span className="text-xs font-black text-primary">Save {saving}</span>
    </div>
  );
}

function RenewalItem({name, date, status}: {name: string, date: string, status: 'urgent' | 'warning' | 'safe'}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
         <div className={cn(
           "w-2 h-2 rounded-full",
           status === 'urgent' ? "bg-red-500" : status === 'warning' ? "bg-amber-500" : "bg-green-500"
         )} />
         <div>
            <p className="text-sm font-bold text-gray-900">{name}</p>
            <p className="text-[10px] font-medium text-gray-500">{date}</p>
         </div>
      </div>
      {status === 'urgent' && <span className="text-[10px] font-black text-red-500 italic">URGENT</span>}
    </div>
  );
}

function LegendItem({color, label, value}: {color: string, label: string, value: string}) {
  return (
    <div className="flex items-center justify-between text-[10px]">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: color}} />
        <span className="font-semibold text-gray-500 whitespace-nowrap">{label}</span>
      </div>
      <span className="font-black text-gray-900">{value}</span>
    </div>
  );
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 text-white p-3 rounded-lg shadow-xl border-none">
        <p className="text-[10px] font-bold text-gray-400 mb-1">{payload[0].payload.month}</p>
        <p className="text-sm font-black">{formatINR(payload[0].value)}</p>
      </div>
    );
  }
  return null;
};
