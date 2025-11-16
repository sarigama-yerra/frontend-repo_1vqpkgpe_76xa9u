import { useState } from 'react'
import { Menu, X, Car, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-4 rounded-2xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-lg shadow-blue-500/5">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-sky-400 to-fuchsia-400 opacity-40 blur" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow">
                  <Car className="h-6 w-6 text-sky-500" />
                </div>
              </div>
              <div className="leading-tight">
                <p className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-fuchsia-500 text-lg">Cartoony Wash</p>
                <p className="text-xs text-slate-500 -mt-1 flex items-center gap-1"><Sparkles className="h-3 w-3 text-fuchsia-500"/> Shine Happy!</p>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-slate-700 hover:text-sky-600 transition">Services</a>
              <a href="#pricing" className="text-slate-700 hover:text-sky-600 transition">Pricing</a>
              <a href="#reviews" className="text-slate-700 hover:text-sky-600 transition">Reviews</a>
              <a href="#book" className="relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-fuchsia-500 px-4 py-2 text-white shadow hover:shadow-lg hover:shadow-fuchsia-500/20 transition-all">
                Book Now
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow border border-slate-200">
              {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-slate-200/60 px-4 py-3 grid gap-2">
              <a onClick={() => setOpen(false)} href="#services" className="rounded-lg px-3 py-2 hover:bg-slate-50">Services</a>
              <a onClick={() => setOpen(false)} href="#pricing" className="rounded-lg px-3 py-2 hover:bg-slate-50">Pricing</a>
              <a onClick={() => setOpen(false)} href="#reviews" className="rounded-lg px-3 py-2 hover:bg-slate-50">Reviews</a>
              <a onClick={() => setOpen(false)} href="#book" className="rounded-lg px-3 py-2 text-white bg-gradient-to-r from-sky-500 to-fuchsia-500">Book Now</a>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
