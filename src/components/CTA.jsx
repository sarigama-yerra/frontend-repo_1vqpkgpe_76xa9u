import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="book" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-500 via-blue-600 to-fuchsia-500 p-1">
          <div className="relative rounded-[1.35rem] bg-white px-8 py-12 sm:px-12">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-extrabold text-slate-900">Ready for a toon-tastic shine?</h3>
                <p className="mt-3 text-slate-600 max-w-lg">Book your wash in seconds. Pick a time, choose add-ons, and swoosh—see you at the finish line!</p>
              </div>
              <form className="grid sm:grid-cols-3 gap-3">
                <input type="text" placeholder="Car model" className="rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-sky-300"/>
                <select className="rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-sky-300">
                  <option>Splash</option>
                  <option>Shimmer</option>
                  <option>Super Shine</option>
                </select>
                <button type="button" className="rounded-xl bg-gradient-to-r from-sky-500 to-fuchsia-500 px-6 py-2.5 text-white shadow">Book now</button>
              </form>
            </motion.div>
          </div>
          <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-500/30 via-blue-600/30 to-fuchsia-500/30 blur-2xl" />
        </div>
      </div>
    </section>
  )
}
