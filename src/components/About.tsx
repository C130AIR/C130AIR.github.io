import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const aboutText = [
  "A 13-year-old developer and F4 race car driver. Red Bull Junior Team's youngest signed talent — I build software that pushes boundaries, from UEFI bootloaders to real-time telemetry systems.",
  "Core contributor to OpenCore Legacy Patcher (OCLP), the de facto standard for running modern macOS on unsupported hardware. I live and breathe low-level systems: Swift, Objective-C, C++, Rust — whatever gets the job done.",
  "When I'm not on the track or deep in a kernel panic, I maintain open-source projects that bridge macOS internals with the Hackintosh community.",
]

const stack = [
  'Swift', 'Objective-C', 'C++', 'Rust', 'Python', 'Shell', 'UEFI', 'OpenCore', 'ACPI', 'Metal', 'CUDA', 'FFmpeg'
]

export function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <motion.div
      whileHover={{
        borderColor: 'rgba(167,139,250,0.35)',
        boxShadow: '0 0 0 1px rgba(167,139,250,0.15), 0 8px 32px rgba(0,0,0,0.3)',
      }}
      transition={{ duration: 0.25 }}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: 'clamp(1rem, 3vw, 1.6rem)',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {children}
    </motion.div>
  )
}

export function SectionTitle({ ja, en }: { ja: string; en: string }) {
  return (
    <div style={{ marginBottom: '1.1rem' }}>
      <p style={{
        fontSize: '0.62rem',
        letterSpacing: '0.22em',
        color: 'var(--purple)',
        textTransform: 'uppercase',
        fontFamily: "'Noto Sans JP', sans-serif",
        fontWeight: 600,
        marginBottom: '0.25rem',
        opacity: 0.8,
      }}>{ja}</p>
      <h2 style={{
        fontSize: 'clamp(1.05rem, 3vw, 1.35rem)',
        fontWeight: 700,
        color: 'var(--text)',
        letterSpacing: '-0.01em',
      }}>{en}</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          width: 28,
          height: 2,
          background: 'linear-gradient(to right, var(--purple), transparent)',
          borderRadius: 2,
          marginTop: '0.45rem',
          transformOrigin: 'left',
        }}
      />
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" ref={ref} style={{ marginBottom: '1.25rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
      >
        <Card>
          <SectionTitle ja="アバウト" en="About Me" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {aboutText.map((t, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
                style={{
                  color: 'var(--text-muted)',
                  fontSize: 'clamp(0.82rem, 2.2vw, 0.92rem)',
                  lineHeight: 1.85,
                }}
              >{t}</motion.p>
            ))}
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.12 }}
        style={{ marginTop: '1.1rem' }}
      >
        <Card>
          <SectionTitle ja="スキル" en="Technical Stack" />
          <div id="skills" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
            {stack.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.04 }}
                whileHover={{ scale: 1.1, y: -2 }}
                style={{
                  background: 'var(--purple-dim)',
                  border: '1px solid var(--purple-border)',
                  color: 'var(--purple-bright)',
                  borderRadius: 7,
                  padding: '0.22rem 0.75rem',
                  fontSize: 'clamp(0.72rem, 2vw, 0.82rem)',
                  fontWeight: 600,
                  cursor: 'default',
                }}
              >
                {name}
              </motion.span>
            ))}
          </div>
        </Card>
      </motion.div>
    </section>
  )
}
