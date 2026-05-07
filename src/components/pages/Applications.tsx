import {formatINR} from '../../lib/utils';
import {AI_TOOLS, SAAS_TOOLS} from '../../constants';
import {Check} from 'lucide-react';

export default function ApplicationsPage() {
  const allTools = [...AI_TOOLS, ...SAAS_TOOLS];
  
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-2xl font-black text-gray-900">Applications</h1>
           <p className="text-gray-500 font-medium">Manage and track all your active subscriptions</p>
        </div>
        <div className="flex gap-4">
           {[
             {label: 'Total Tools', value: allTools.length},
             {label: 'Monthly Spend', value: formatINR(56600)},
             {label: 'Avg Usage', value: '7.6/10'}
           ].map(stat => (
             <div key={stat.label} className="bg-white px-6 py-3 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                <p className="text-lg font-black text-gray-900">{stat.value}</p>
             </div>
           ))}
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
             <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                   <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tool</th>
                   <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Category</th>
                   <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Plan</th>
                   <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Users</th>
                   <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Monthly</th>
                   <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Usage Score</th>
                   <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Contract End</th>
                   <th className="px-6 py-4"></th>
                </tr>
             </thead>
             <tbody className="divide-y divide-gray-100">
                {allTools.map(tool => (
                   <tr key={tool.name} className="hover:bg-gray-50 transition-all">
                      <td className="px-6 py-4">
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-100 rounded-lg" />
                            <span className="font-bold text-sm text-gray-900">{tool.name}</span>
                         </div>
                      </td>
                      <td className="px-6 py-4 text-xs font-semibold text-gray-500">{tool.category}</td>
                      <td className="px-6 py-4 text-xs font-bold text-gray-700">{tool.plan}</td>
                      <td className="px-6 py-4 text-xs font-bold text-gray-700">{tool.users}</td>
                      <td className="px-6 py-4 text-xs font-black text-gray-900">{formatINR(tool.monthly)}</td>
                      <td className="px-6 py-4">
                         <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-gray-100 rounded-full">
                               <div 
                                 className={`h-full rounded-full ${tool.score >= 8 ? 'bg-green-500' : tool.score >= 6 ? 'bg-orange-500' : 'bg-red-500'}`} 
                                 style={{width: `${tool.score * 10}%`}} 
                               />
                            </div>
                            <span className="text-[10px] font-bold text-gray-400">{tool.score}/10</span>
                         </div>
                      </td>
                      <td className="px-6 py-4 text-[10px] font-bold text-gray-500">{tool.contractEnd}</td>
                      <td className="px-6 py-4 text-right">
                         <button className="text-xs font-black text-primary hover:underline">Manage</button>
                      </td>
                   </tr>
                ))}
             </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
