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
      className="fixed right-6 top-24 z-50 flex flex-col gap-4"
    >
      {[
        { href: '/', label: 'Home', Icon: Home },
        { href: '/explore', label: 'Explore', Icon: Compass },
        { href: '/contact', label: 'Contact', Icon: Mail },
      ].map(({ href, label, Icon }) => (
        <Link
          key={label}
          href={href}
          className="flex items-center gap-2 px-5 py-2 text-white text-md font-medium rounded-xl
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
