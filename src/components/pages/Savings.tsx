import {formatINR} from '../../lib/utils';
import {AI_TOOLS, SAAS_TOOLS} from '../../constants';
import {AlertCircle, ArrowDown, ChevronRight} from 'lucide-react';

export default function SavingsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
         <h1 className="text-2xl font-black text-gray-900">Savings Opportunities</h1>
         <div className="bg-cta px-6 py-2 rounded-xl text-sm font-black italic">Total Identified: ₹21,350/mo</div>
      </div>

      <div className="grid grid-cols-2 gap-6">
         <OpportunityCard 
           priority="HIGH"
           title="Downgrade Runway ML"
           desc="Currently: Pro (₹10,500/mo) | Avg usage 60 hrs/mo. Usage score 7.0/10."
           saving="₹5,250/mo"
           color="red"
         />
         <OpportunityCard 
           priority="HIGH"
           title="Remove ElevenLabs"
           desc="Usage score 5.5/10. Only 1 user. Recommend: Cancel or switch to free tier."
           saving="₹1,700/mo"
           color="red"
         />
         <OpportunityCard 
           priority="MEDIUM"
           title="Consolidate Adobe Firefly + Adobe CC"
           desc="Overlapping features across multiple Adobe licenses."
           saving="₹3,300/mo"
           color="orange"
         />
         <OpportunityCard 
           priority="MEDIUM"
           title="Reduce Figma Seats"
           desc="2 users on Professional plan. Check if both seats are currently active."
           saving="₹2,400/mo"
           color="orange"
         />
      </div>

      <div className="bg-[#1A1A2E] text-white p-12 rounded-[40px] relative overflow-hidden text-center">
         <div className="relative z-10 space-y-6">
            <p className="text-xs font-bold text-gray-400 tracking-widest uppercase">Savings Progress</p>
            <div className="text-6xl font-black">₹21,350<span className="text-2xl text-gray-500 font-medium"> / ₹48,000</span></div>
            <div className="max-w-md mx-auto w-full h-3 bg-white/10 rounded-full overflow-hidden">
               <div className="h-full bg-cta rounded-full" style={{width: '45%'}} />
            </div>
            <p className="text-sm font-medium text-gray-400">You're on track to recover 45% of potential software waste this quarter.</p>
         </div>
      </div>
    </div>
  );
}

function OpportunityCard({priority, title, desc, saving, color}: any) {
  const baseColor = color === 'red' ? 'text-red-500' : 'text-orange-500';
  const bgColor = color === 'red' ? 'bg-red-50' : 'bg-orange-50';

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
           <div className={baseColor}><AlertCircle size={16} /></div>
           <span className={`text-[10px] font-black tracking-widest ${baseColor}`}>{priority} PRIORITY</span>
        </div>
        <h3 className="text-xl font-black text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 font-medium">{desc}</p>
      </div>
      <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
         <div className="flex flex-col">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Est. Saving</span>
            <span className="text-xl font-black text-primary">{saving}</span>
         </div>
         <button className="bg-light-purple px-4 py-2 rounded-xl text-primary font-bold text-xs flex items-center gap-2">
            View Details <ChevronRight size={14} />
         </button>
      </div>
    </div>
  );
}
