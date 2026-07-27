import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Banner() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '38%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  return (
    <section
      id="home"
      ref={ref}
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        marginBottom: '1.5rem',
        height: 'clamp(260px, 42vw, 460px)',
      }}
    >
      <motion.img
        src="/Bannner.jpg"
        alt="banner"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
        style={{
          width: '100%',
          height: '125%',
          objectFit: 'cover',
          objectPosition: 'center 20%',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          y: imgY,
        }}
      />

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(15,13,23,0.1) 0%, rgba(15,13,23,0.0) 30%, rgba(15,13,23,0.55) 65%, rgba(15,13,23,1) 100%)',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(105deg, rgba(15,13,23,0.75) 0%, rgba(15,13,23,0.3) 40%, transparent 65%)',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 20% 80%, rgba(139,92,246,0.12) 0%, transparent 60%)',
      }} />

      <motion.div
        style={{
          position: 'absolute',
          bottom: 'clamp(1rem, 3vw, 2rem)',
          left: 'clamp(1rem, 3vw, 1.75rem)',
          y: textY,
          opacity: textOpacity,
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 36 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          style={{
            height: 2,
            background: 'var(--purple)',
            borderRadius: 2,
            marginBottom: '0.55rem',
          }}
        />
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.25em',
            color: 'var(--purple-bright)',
            textTransform: 'uppercase',
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 600,
            marginBottom: '0.35rem',
          }}
        >
          ポートフォリオ
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25 }}
          style={{
            fontSize: 'clamp(1.7rem, 6vw, 3.2rem)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.025em',
            lineHeight: 1.08,
            textShadow: '0 4px 24px rgba(0,0,0,0.55)',
          }}
        >
          柯梓轩
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.38 }}
          style={{
            fontSize: 'clamp(0.75rem, 2vw, 0.88rem)',
            color: 'rgba(196,181,253,0.8)',
            marginTop: '0.3rem',
            fontWeight: 500,
            letterSpacing: '0.08em',
          }}
        >
          F4 Champion · Red Bull Junior · OCLP Core Dev
        </motion.p>
      </motion.div>

      <FloatingDots />
    </section>
  )
}

function FloatingDots() {
  const dots = [
    { x: '12%', size: 2.5, delay: 0,   dur: 3.8 },
    { x: '28%', size: 2,   delay: 0.6, dur: 4.5 },
    { x: '52%', size: 3.5, delay: 1.1, dur: 3.2 },
    { x: '68%', size: 2,   delay: 0.3, dur: 5.0 },
    { x: '82%', size: 3,   delay: 0.9, dur: 4.0 },
    { x: '42%', size: 2,   delay: 1.5, dur: 4.2 },
  ]
  return (
    <>
      {dots.map((d, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.7, 0], y: [-8, -50, -90] }}
          transition={{
            delay: d.delay,
            duration: d.dur,
            repeat: Infinity,
            repeatDelay: 0.8,
            ease: 'easeOut',
          }}
          style={{
            position: 'absolute',
            bottom: '0.5rem',
            left: d.x,
            width: d.size,
            height: d.size,
            borderRadius: '50%',
            background: 'var(--purple-bright)',
            pointerEvents: 'none',
            boxShadow: `0 0 ${d.size * 3}px var(--purple)`,
          }}
        />
      ))}
    </>
  )
}
