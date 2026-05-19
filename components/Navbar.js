'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Compass, Mail } from 'lucide-react' // You can use Heroicons or Lucide

export default function NavbarButton() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 70, delay: 1 }}
      className="fixed bottom-6 right-4 z-50 flex flex-col gap-2 md:top-24 md:right-6 md:bottom-auto md:gap-4"
    >
      {[
        { href: '/', label: 'Home', Icon: Home },
        { href: '/explore', label: 'Explore', Icon: Compass },
        { href: '/contact', label: 'Contact', Icon: Mail },
      ].map(({ href, label, Icon }) => (
        <Link
          key={label}
          href={href}
          className="flex items-center gap-1 px-3 py-2 text-white text-sm md:text-md md:gap-2 md:px-5 font-medium rounded-xl
                     bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20
                     hover:scale-105 transition-all shadow-lg"
        >
          <Icon size={18} />
          {label}
        </Link>
      ))}
    </motion.div>
  )
}
