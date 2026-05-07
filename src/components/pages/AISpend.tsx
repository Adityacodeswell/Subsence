import {formatINR} from '../../lib/utils';
import {AI_TOOLS} from '../../constants';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell} from 'recharts';

const COLORS = ['#4C2D9C', '#6D4EFF', '#9E8AFF', '#EDE8FF', '#F3EFFF', '#B2AAFF'];

export default function AISpendPage() {
  const chartData = AI_TOOLS.map(t => ({name: t.name, spend: t.monthly}));
  const totalSpend = AI_TOOLS.reduce((acc, t) => acc + t.monthly, 0);

  const categoryData = [
    {name: 'Copywriting', value: 10200},
    {name: 'Design', value: 9300},
    {name: 'Video', value: 10500},
    {name: 'Productivity', value: 4100},
    {name: 'Research', value: 3200},
    {name: 'Voice', value: 1700}
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
         <h1 className="text-2xl font-black text-gray-900">AI Spend Intelligence</h1>
         <div className="flex gap-2">
            <button className="bg-white border px-4 py-2 rounded-xl text-sm font-bold">This Month</button>
            <button className="bg-white border px-4 py-2 rounded-xl text-sm font-bold opacity-40">Quarter</button>
         </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
         <StatCard label="Total AI Spend" value={formatINR(totalSpend)} sub={formatINR(totalSpend * 12) + "/yr"} />
         <StatCard label="AI Tools" value={AI_TOOLS.length.toString()} sub="active licenses" />
         <StatCard label="Total Usage" value="720 hrs" sub="monthly avg" />
         <StatCard label="Avg Cost/Hr" value={formatINR(52)} sub="efficiency index" />
      </div>

      <div className="grid grid-cols-2 gap-6">
         <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">AI Spend by Tool</p>
            <div className="h-80">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} layout="vertical" margin={{left: 40}}>
                     <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
                     <XAxis type="number" hide />
                     <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#666', fontWeight: 600}} width={80} />
                     <Tooltip />
                     <Bar dataKey="spend" fill="#4C2D9C" radius={[0, 4, 4, 0]} />
                  </BarChart>
               </ResponsiveContainer>
            </div>
         </div>

         <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Spend by Category</p>
            <div className="h-80 flex items-center">
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                     <Pie data={categoryData} innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
                        {categoryData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                     </Pie>
                     <Tooltip />
                  </PieChart>
               </ResponsiveContainer>
               <div className="space-y-2">
                  {categoryData.map((c, i) => (
                     <div key={c.name} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: COLORS[i % COLORS.length]}} />
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{c.name}</span>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}

function StatCard({label, value, sub}: any) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100">
       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
       <p className="text-2xl font-black text-gray-900 leading-none">{value}</p>
       <p className="text-[10px] font-bold text-gray-400 mt-2">{sub}</p>
    </div>
  );
}
