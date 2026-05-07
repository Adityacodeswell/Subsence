import {formatINR, cn} from '../../lib/utils';
import {AI_TOOLS, SAAS_TOOLS} from '../../constants';
import {Calendar} from 'lucide-react';

export default function RenewalsPage() {
  const renewals = [...AI_TOOLS, ...SAAS_TOOLS].filter(t => t.contractEnd !== 'Ongoing' && t.contractEnd !== 'Monthly');
  
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
         <div>
            <h1 className="text-2xl font-black text-gray-900">Renewal Calendar</h1>
            <p className="text-gray-500 font-medium tracking-tight">Stay ahead of upcoming subscription expirations</p>
         </div>
         <div className="flex bg-white rounded-xl border p-1">
            <button className="px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-lg shadow-sm">List View</button>
            <button className="px-4 py-1.5 text-gray-400 text-xs font-bold rounded-lg">Calendar</button>
         </div>
      </div>

      <div className="space-y-6">
         <RenewalSection 
            title="Urgent (≤30 days)" 
            color="red" 
            items={[
               {name: 'Runway ML', date: 'Jun 2025', price: '₹10,500/mo'}
            ]} 
         />
         
         <RenewalSection 
            title="Upcoming (31–90 days)" 
            color="orange" 
            items={[
               {name: 'Adobe Firefly', date: 'Sep 2025', price: '₹6,600/mo'},
               {name: 'Adobe Creative Cloud', date: 'Sep 2025', price: '₹5,200/mo'}
            ]} 
         />

         <div className="bg-white p-8 rounded-3xl border border-gray-100">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Later this year</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {renewals.map(r => (
                  <div key={r.name} className="p-4 bg-gray-50 rounded-2xl border border-transparent hover:border-primary/20 transition-all">
                     <p className="font-bold text-sm text-gray-900">{r.name}</p>
                     <p className="text-[10px] font-bold text-gray-400 mt-1">{r.contractEnd}</p>
                     <p className="text-xs font-black text-primary mt-3">{formatINR(r.monthly)}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}

function RenewalSection({title, color, items}: any) {
  const borderColor = color === 'red' ? 'border-red-500' : 'border-orange-500';
  const textColor = color === 'red' ? 'text-red-600' : 'text-orange-600';
  const bgColor = color === 'red' ? 'bg-red-50' : 'bg-orange-50';

  return (
    <div className={cn("bg-white p-8 rounded-3xl border-l-8 shadow-sm", borderColor)}>
       <p className={cn("text-[10px] font-black uppercase tracking-widest mb-4", textColor)}>{title}</p>
       <div className="space-y-4">
          {items.map((item: any) => (
             <div key={item.name} className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-4">
                   <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", bgColor, textColor)}>
                      <Calendar size={20} />
                   </div>
                   <div>
                      <p className="font-bold text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-400 font-medium">Expires {item.date}</p>
                   </div>
                </div>
                <div className="text-right">
                   <p className="font-black text-gray-900">{item.price}</p>
                   <div className="flex gap-2 mt-2">
                      <button className="px-3 py-1 rounded-lg bg-white border text-[10px] font-bold">Cancel</button>
                      <button className="px-3 py-1 rounded-lg bg-primary text-white text-[10px] font-bold">Renew</button>
                   </div>
                </div>
             </div>
          ))}
       </div>
    </div>
  );
}
