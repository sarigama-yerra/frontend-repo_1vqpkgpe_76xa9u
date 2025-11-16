import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <footer className="border-t border-slate-200/60 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Cartoony Wash. All rights reserved.</p>
          <p>Made with bubbly joy and lots of shine ✨</p>
        </div>
      </footer>
    </div>
  )
}

export default App
