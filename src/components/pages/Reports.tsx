import {formatINR} from '../../lib/utils';
import {MONTHLY_PNL} from '../../constants';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar} from 'recharts';

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
         <h1 className="text-2xl font-black text-gray-900">Reports & Analytics</h1>
         <button className="bg-white border px-4 py-2 rounded-xl text-sm font-bold">Export PDF</button>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-gray-100 overflow-hidden">
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead className="border-b border-gray-100">
                  <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                     <th className="px-6 py-4">Month</th>
                     <th className="px-6 py-4">Revenue</th>
                     <th className="px-6 py-4">Expenses</th>
                     <th className="px-6 py-4">Profit</th>
                     <th className="px-6 py-4">Margin</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-50 text-sm font-bold">
                  {MONTHLY_PNL.map(item => (
                     <tr key={item.month}>
                        <td className="px-6 py-4 text-gray-900">{item.month}</td>
                        <td className="px-6 py-4 text-gray-900">{formatINR(item.revenue)}</td>
                        <td className="px-6 py-4 text-red-500">{formatINR(item.expenses)}</td>
                        <td className="px-6 py-4 text-green-500">{formatINR(item.profit)}</td>
                        <td className="px-6 py-4 font-black">{(item.margin * 100).toFixed(1)}%</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

      <div className="h-80 bg-white p-8 rounded-3xl border border-gray-100">
         <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Financial Growth Trend</p>
         <ResponsiveContainer width="100%" height="100%">
            <LineChart data={MONTHLY_PNL}>
               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
               <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#999'}} />
               <YAxis hide />
               <Tooltip />
               <Line type="monotone" dataKey="revenue" stroke="#4C2D9C" strokeWidth={3} dot={false} />
               <Line type="monotone" dataKey="profit" stroke="#BEFF3F" strokeWidth={3} dot={false} />
            </LineChart>
         </ResponsiveContainer>
      </div>
    </div>
  );
}
