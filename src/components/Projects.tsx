import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github } from 'lucide-react'
import { SectionTitle, Card } from './About'

const projects = [
  {
    name: 'F1-DRS',
    desc: 'Drag Reduction System simulation & analysis tool for Formula 1 strategy optimization. Lap-time delta prediction with DRS-train modeling and overtake probability heatmaps.',
    tags: ['Python', 'FastF1', 'NumPy'],
    github: 'https://github.com/grid-position-one/F1-DRS',
  },
  {
    name: 'paddock-club',
    desc: 'F1 paddock insider platform — live timing data aggregation, driver radio transcripts, and race weekend dashboard for the ultimate trackside experience.',
    tags: ['TypeScript', 'React', 'Node.js'],
    github: 'https://github.com/C130AIR/paddock-club',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" ref={ref} style={{ marginBottom: '1.25rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Card>
          <SectionTitle ja="Projets" en="Projects" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {projects.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.github}
                target={p.github.startsWith('#') ? undefined : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{ x: 4, backgroundColor: 'var(--surface-hover)' }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  padding: '0.85rem 0.9rem',
                  borderRadius: 11,
                  background: 'transparent',
                  border: '1px solid var(--border)',
                  transition: 'border-color 0.2s',
                  cursor: p.github.startsWith('#') ? 'default' : 'pointer',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--purple-border)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 700, fontSize: 'clamp(0.82rem, 2.2vw, 0.92rem)', color: 'var(--text)' }}>{p.name}</span>
                    {p.tags.map(t => (
                      <span key={t} style={{
                        background: 'var(--purple-dim)',
                        border: '1px solid var(--purple-border)',
                        color: 'var(--purple-bright)',
                        borderRadius: 5,
                        padding: '0.08rem 0.5rem',
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                      }}>{t}</span>
                    ))}
                  </div>
                  <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.82rem)', color: 'var(--text-muted)', lineHeight: 1.65 }}>{p.desc}</p>
                </div>
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.15 }}
                  style={{ flexShrink: 0, marginTop: 2, color: 'var(--purple)' }}
                >
                  <Github size={14} />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </Card>
      </motion.div>
    </section>
  )
}
