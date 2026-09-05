import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Mail, BookOpen, Home, FolderGit2, User, Wrench, MessageCircle, Menu, X, Car, Heart, Globe, AudioLines } from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: User, label: 'About', href: '#about' },
  { icon: Wrench, label: 'Skills', href: '#skills' },
  { icon: FolderGit2, label: 'Projects', href: '#projects' },
  { icon: Heart, label: 'Sponsor', href: '#sponsor' },
  { icon: AudioLines, label: 'Echo', href: '#echo' },
  { icon: MessageCircle, label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/C130AIR', label: 'GitHub' },
  { icon: Car, href: 'https://www.redbull.com/cn-zh/', label: 'Red Bull' },
  { icon: X, href: 'https://x.com/ImJustC130AIR', label: 'X' },
  { icon: Mail, href: 'mailto:kjinlin0917@iCloud.com', label: 'Email' },
  { icon: BookOpen, href: 'https://c130air.github.io/C130AIR-Blog/', label: 'Blog' },
  { icon: Globe, href: 'https://c130air.github.io/C130AIR-Blog-EN/', label: 'EN Blog' },
]

function useIsMobile() {
  const [mobile, setMobile] = useState(() => window.innerWidth <= 768)
  useEffect(() => {
    const handler = () => setMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return mobile
}

function SidebarContent({ onNav }: { onNav?: () => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <motion.div
          whileHover={{ scale: 1.07, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          style={{
            width: 76,
            height: 76,
            borderRadius: 22,
            overflow: 'hidden',
            border: '1.5px solid var(--purple-border)',
            margin: '0 auto 0.85rem',
            boxShadow: '0 0 0 4px rgba(167,139,250,0.08)',
          }}
        >
          <img
            src="/172959283.jpg"
            alt="avatar"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>
        <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)', letterSpacing: '-0.01em' }}>柯梓轩</div>
        <div style={{
          fontSize: '0.75rem',
          color: 'var(--purple)',
          marginTop: '0.2rem',
          fontWeight: 500,
          opacity: 0.85,
          letterSpacing: '0.04em',
        }}>F4 Champion · Red Bull Junior</div>
      </div>

      <nav style={{ flex: 1 }}>
        <div style={{
          fontSize: '0.6rem',
          letterSpacing: '0.18em',
          color: 'var(--text-muted)',
          marginBottom: '0.6rem',
          textTransform: 'uppercase',
          paddingLeft: '0.5rem',
        }}>Navigation</div>
        {navItems.map(({ icon: Icon, label, href }, i) => (
          <motion.a
            key={href}
            href={href}
            onClick={onNav}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 * i, duration: 0.4 }}
            whileHover={{ x: 4 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: '0.55rem 0.75rem',
              borderRadius: 10,
              fontSize: '0.86rem',
              fontWeight: 500,
              color: 'var(--text-muted)',
              marginBottom: '0.1rem',
              transition: 'color 0.18s, background 0.18s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'var(--purple-dim)'
              el.style.color = 'var(--purple-bright)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'transparent'
              el.style.color = 'var(--text-muted)'
            }}
          >
            <Icon size={15} />
            {label}
          </motion.a>
        ))}
      </nav>

      <div>
        <div style={{
          fontSize: '0.6rem',
          letterSpacing: '0.18em',
          color: 'var(--text-muted)',
          marginBottom: '0.7rem',
          textTransform: 'uppercase',
          paddingLeft: '0.5rem',
        }}>Links</div>
        <div style={{ display: 'flex', gap: '0.55rem', paddingLeft: '0.5rem' }}>
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={href}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              style={{
                width: 34,
                height: 34,
                borderRadius: 9,
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                transition: 'color 0.18s, border-color 0.18s, background 0.18s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'var(--purple-dim)'
                el.style.color = 'var(--purple-bright)'
                el.style.borderColor = 'var(--purple-border)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'var(--surface)'
                el.style.color = 'var(--text-muted)'
                el.style.borderColor = 'var(--border)'
              }}
            >
              <Icon size={14} />
            </motion.a>
          ))}
        </div>
        <p style={{
          fontSize: '0.65rem',
          color: 'var(--text-muted)',
          marginTop: '1.5rem',
          paddingLeft: '0.5rem',
          opacity: 0.45,
        }}>
          © 2026 KaziXuan
        </p>
      </div>
    </div>
  )
}

const sidebarStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: 'var(--sidebar-width)',
  height: '100vh',
  background: '#0f0d17',
  borderRight: '1px solid var(--border)',
  padding: '2rem 1.25rem',
  zIndex: 200,
  overflowY: 'auto',
}

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (!isMobile) setOpen(false)
  }, [isMobile])

  if (isMobile) {
    return (
      <>
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => setOpen(o => !o)}
          style={{
            position: 'fixed',
            top: '1rem',
            left: '1rem',
            zIndex: 300,
            background: 'rgba(15,13,23,0.9)',
            backdropFilter: 'blur(12px)',
            border: '1px solid var(--border)',
            borderRadius: 10,
            padding: '0.5rem',
            cursor: 'pointer',
            color: 'var(--purple)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </motion.button>

        <AnimatePresence>
          {open && (
            <>
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                style={{
                  position: 'fixed',
                  inset: 0,
                  background: 'rgba(0,0,0,0.5)',
                  zIndex: 150,
                  backdropFilter: 'blur(2px)',
                }}
              />
              <motion.aside
                key="sidebar"
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                exit={{ x: -280 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                style={sidebarStyle}
              >
                <SidebarContent onNav={() => setOpen(false)} />
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </>
    )
  }

  return (
    <motion.aside
      initial={{ x: -24, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={sidebarStyle}
    >
      <SidebarContent />
    </motion.aside>
  )
}
