
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer copyright */}
      <footer className="py-6 border-t border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Full Stack Developer Portfolio. All rights reserved.</p>
        </div>
      </footer>

      {/* Interactive Elements */}
      <Chatbot />
    </div>
  );
}

export default App;