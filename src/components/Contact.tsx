import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, Mail, X } from 'lucide-react'
import { SectionTitle, Card } from './About'

const links = [
  { icon: Github, label: 'GitHub', sub: 'C130AIR', href: 'https://github.com/C130AIR' },
  { icon: Mail, label: 'Email', sub: 'kjinlin0917@icloud.com', href: 'mailto:kjinlin0917@icloud.com' },
  { icon: X, label: 'X', sub: '@ImJustC130AIR', href: 'https://x.com/ImJustC130AIR' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" ref={ref} style={{ marginBottom: '3rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Card>
          <SectionTitle ja="Contact" en="Get In Touch" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {links.map(({ icon: Icon, label, sub, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') || href.startsWith('#') ? undefined : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{ x: 4, backgroundColor: 'var(--surface-hover)' }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 0.9rem',
                  borderRadius: 11,
                  background: 'transparent',
                  border: '1px solid var(--border)',
                  transition: 'border-color 0.2s',
                  cursor: href.startsWith('#') ? 'default' : 'pointer',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--purple-border)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: -6 }}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 9,
                    background: 'var(--purple-dim)',
                    border: '1px solid var(--purple-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--purple)',
                  }}
                >
                  <Icon size={15} />
                </motion.div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 'clamp(0.82rem, 2.2vw, 0.88rem)', color: 'var(--text)' }}>{label}</div>
                  <div style={{ fontSize: 'clamp(0.7rem, 1.8vw, 0.75rem)', color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{sub}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </Card>
      </motion.div>
    </section>
  )
}
