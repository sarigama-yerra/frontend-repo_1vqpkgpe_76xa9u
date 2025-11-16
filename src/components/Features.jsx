import { motion } from 'framer-motion'
import { Sparkles, Droplets, Wand2, Timer, ShieldCheck, Gauge } from 'lucide-react'

const items = [
  { icon: Droplets, title: 'Bubble Bliss', desc: 'Rich, foamy suds for a gentle, cartoon-safe clean.' },
  { icon: Wand2, title: 'Toon Touch', desc: 'Soft-touch microfiber that treats paint like a masterpiece.' },
  { icon: Timer, title: 'Quick Zip', desc: 'In & out in under 10 minutes—vroom vroom!' },
  { icon: ShieldCheck, title: 'Paint Guard', desc: 'Sealants that shine bright and protect longer.' },
  { icon: Gauge, title: 'Turbo Dry', desc: 'Air blades that whisk water away in a flash.' },
  { icon: Sparkles, title: 'Glitter Finish', desc: 'A dazzling finish that looks straight out of a cartoon.' }
]

export default function Features() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">What makes us pop?</h2>
          <p className="mt-3 text-slate-600">A playful mix of tech and toony charm.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group relative rounded-2xl border border-sky-100 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-tr from-sky-400/0 via-fuchsia-400/0 to-fuchsia-400/0 group-hover:from-sky-400/10 group-hover:via-blue-400/5 group-hover:to-fuchsia-400/10"/>
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-slate-800">{it.title}</h3>
              </div>
              <p className="mt-3 text-slate-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
