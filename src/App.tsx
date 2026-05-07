import {useState} from 'react';
import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  if (showOnboarding) {
    return <Onboarding onComplete={() => setShowOnboarding(false)} />;
  }

  return <Dashboard />;
}
