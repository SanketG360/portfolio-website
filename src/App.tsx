import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { ParticlesBackground } from './components/ParticlesBackground';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen gradient-bg">
        {/* Background Effects */}
        <ParticlesBackground />
        
        {/* Scroll Progress Bar */}
        <ScrollProgress />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main className="relative z-10">
          <Home />
        </main>
      </div>
    </Router>
  );
}

export default App;
