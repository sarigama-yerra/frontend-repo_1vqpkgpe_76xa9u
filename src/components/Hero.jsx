import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8fw9Z-c-rqW3nWBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/90 pointer-events-none"/>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 w-full">
        <div className="py-24 lg:py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
              Cartoon Shine • Wave Animation
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-fuchsia-500">
                Caroony Car Wash
              </span>
              <br/>
              <span className="text-slate-800">Where cars get happy</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              A playful, modern car wash experience with interactive racing vibes. Book a wash, choose add-ons, and watch your ride sparkle.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#book" className="relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-fuchsia-500 px-6 py-3 text-white shadow-lg shadow-fuchsia-500/20 transition hover:scale-[1.02]">
                Book a Wash
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-slate-700 hover:border-sky-300 hover:text-sky-700 transition">
                View Services
              </a>
            </div>
          </motion.div>
        </div>

        <div className="relative hidden lg:block">
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative h-[520px]">
            <Waves/>
            <div className="absolute inset-0 rounded-3xl border border-white/30 bg-white/20 backdrop-blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Waves() {
  return (
    <div className="absolute -bottom-10 left-0 right-0 h-64">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#38bdf8" fillOpacity="0.25" d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,117.3C672,96,768,96,864,106.7C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
        <path fill="#0ea5e9" fillOpacity="0.35" d="M0,192L60,208C120,224,240,256,360,234.7C480,213,600,139,720,122.7C840,107,960,149,1080,165.3C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"/>
        <path fill="#3b82f6" fillOpacity="0.45" d="M0,224L80,229.3C160,235,320,245,480,229.3C640,213,800,171,960,176C1120,181,1280,235,1360,261.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"/>
      </svg>
    </div>
  )
}
