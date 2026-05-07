import {formatINR, cn} from '../../lib/utils';
import {COMPANY} from '../../constants';
import {User, Mail, Phone, MapPin, Bell, Globe, CreditCard} from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div className="flex items-center justify-between">
         <h1 className="text-2xl font-black text-gray-900">Settings</h1>
         <button className="bg-primary text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg shadow-primary/20">Save Changes</button>
      </div>

      <div className="space-y-6">
         <SettingsSection title="Company Profile">
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Company Name</label>
                  <input defaultValue={COMPANY.name} className="w-full p-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-primary outline-none transition-all font-semibold" />
               </div>
               <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Founder / Owner</label>
                  <input defaultValue={COMPANY.owner} className="w-full p-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-primary outline-none transition-all font-semibold" />
               </div>
               <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email</label>
                  <input defaultValue={COMPANY.email} className="w-full p-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-primary outline-none transition-all font-semibold" />
               </div>
               <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Team Size</label>
                  <input defaultValue={COMPANY.teamSize} className="w-full p-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-primary outline-none transition-all font-semibold" />
               </div>
            </div>
         </SettingsSection>

         <SettingsSection title="Notification Preferences">
            <div className="space-y-3">
               <ToggleItem label="Renewal reminders (7 days before)" active />
               <ToggleItem label="Budget threshold alerts (>90% of budget)" active />
               <ToggleItem label="Unused tool alerts (score <6 for 30 days)" active />
               <ToggleItem label="Weekly spend digest email" active />
            </div>
         </SettingsSection>

         <SettingsSection title="Plan & Billing">
            <div className="flex items-center justify-between p-4 bg-light-purple rounded-2xl border border-primary/10">
               <div>
                  <p className="font-bold text-primary">Free Plan (Trial)</p>
                  <p className="text-xs text-gray-500 font-medium">Trial ends Jun 30, 2025</p>
               </div>
               <button className="bg-cta text-black px-4 py-2 rounded-xl text-xs font-black">Upgrade to Quarterly</button>
            </div>
         </SettingsSection>
      </div>
    </div>
  );
}

function SettingsSection({title, children}: any) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 space-y-6 shadow-sm">
       <p className="text-xs font-black text-gray-900 border-b border-gray-50 pb-4">{title}</p>
       {children}
    </div>
  );
}

function ToggleItem({label, active}: any) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
       <span className="text-sm font-semibold text-gray-700">{label}</span>
       <div className={cn("w-10 h-5 rounded-full relative transition-all", active ? "bg-primary" : "bg-gray-200")}>
          <div className={cn("w-3 h-3 bg-white rounded-full absolute top-1 transition-all", active ? "right-1" : "left-1")} />
       </div>
    </div>
  );
}
