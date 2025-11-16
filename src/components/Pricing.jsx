import { motion } from 'framer-motion'

const tiers = [
  { name: 'Splash', price: 12, features: ['Exterior wash', 'Turbo dry', 'Bubble gloss'] },
  { name: 'Shimmer', price: 22, features: ['Everything in Splash', 'Underbody rinse', 'Wheel sparkle'] },
  { name: 'Super Shine', price: 35, features: ['Everything in Shimmer', 'Wax & seal', 'Interior quick clean'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">Simple, shiny pricing</h2>
          <p className="mt-3 text-slate-600">Pick the perfect package for your ride.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-tr from-sky-400/0 via-blue-400/0 to-fuchsia-400/0 hover:from-sky-400/10 hover:via-blue-400/5 hover:to-fuchsia-400/10"/>
              <h3 className="text-xl font-bold text-slate-800">{t.name}</h3>
              <p className="mt-2 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-fuchsia-500">
                ${t.price}
                <span className="text-base font-medium text-slate-500">/wash</span>
              </p>
              <ul className="mt-4 space-y-2 text-slate-600">
                {t.features.map(f => (
                  <li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-500"/> {f}</li>
                ))}
              </ul>
              <a href="#book" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-fuchsia-500 px-4 py-2 text-white shadow hover:opacity-95">Choose {t.name}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
