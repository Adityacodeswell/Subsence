import {formatINR, cn} from '../../lib/utils';
import {SAAS_TOOLS} from '../../constants';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell} from 'recharts';

export default function SaaSSpendPage() {
  const categoryData = [
    {category: 'Design', spend: 11400},
    {category: 'Productivity', spend: 3400},
    {category: 'Communication', spend: 3700},
    {category: 'CRM/PM', spend: 3100},
    {category: 'Storage', spend: 900},
  ];

  const totalSaaS = categoryData.reduce((acc, c) => acc + c.spend, 0);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
         <h1 className="text-2xl font-black text-gray-900">SaaS Spend Intelligence</h1>
         <div className="bg-white border px-4 py-2 rounded-xl text-sm font-bold text-gray-400">Standard Tools Portfolio</div>
      </div>

      <div className="grid grid-cols-4 gap-6">
         <div className="bg-white p-6 rounded-2xl border border-gray-100">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total SaaS Spend</p>
            <p className="text-2xl font-black text-gray-900 leading-none">{formatINR(totalSaaS)}</p>
         </div>
         <div className="bg-white p-6 rounded-2xl border border-gray-100">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">SaaS Tools</p>
            <p className="text-2xl font-black text-gray-900 leading-none">{SAAS_TOOLS.length}</p>
         </div>
         <div className="bg-white p-6 rounded-2xl border border-gray-100">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Avg Usage Score</p>
            <p className="text-2xl font-black text-gray-900 leading-none">7.7/10</p>
         </div>
         <div className="bg-white p-6 rounded-2xl border border-gray-100 italic">
            <p className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-1">Least Used</p>
            <p className="text-2xl font-black text-red-500 leading-none">Dropbox</p>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">SaaS Spend by Category</p>
            <div className="h-80">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={categoryData}>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                     <XAxis dataKey="category" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 600}} />
                     <YAxis hide />
                     <Tooltip />
                     <Bar dataKey="spend" fill="#6D4EFF" radius={[4, 4, 0, 0]} />
                  </BarChart>
               </ResponsiveContainer>
            </div>
         </div>

         <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Usage Optimization Flags</p>
            <div className="space-y-4">
               <OptimizationItem 
                 title="Dropbox" 
                 score="5.8" 
                 recommend="Consolidate to Google Drive" 
                 color="red"
               />
               <OptimizationItem 
                 title="Zoom" 
                 score="7.0" 
                 recommend="Potential overlap with Google Meet" 
                 color="orange"
               />
               <OptimizationItem 
                 title="HubSpot" 
                 score="6.8" 
                 recommend="Review seat utilization" 
                 color="orange"
               />
            </div>
         </div>
      </div>
    </div>
  );
}

function OptimizationItem({title, score, recommend, color}: any) {
  const textColor = color === 'red' ? 'text-red-500' : 'text-orange-500';
  const bgColor = color === 'red' ? 'bg-red-50' : 'bg-orange-50';

  return (
    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-between">
       <div>
          <div className="flex items-center gap-2">
             <span className="font-bold text-gray-900">{title}</span>
             <span className={cn("text-[10px] font-black italic", textColor)}>{score}/10 Score</span>
          </div>
          <p className="text-xs text-gray-400 font-medium mt-1">{recommend}</p>
       </div>
       <button className={cn("px-4 py-1.5 rounded-lg text-[10px] font-bold", bgColor, textColor)}>Action Required</button>
    </div>
  );
}
