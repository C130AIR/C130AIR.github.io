import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Intro({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true)
  const [textIn, setTextIn] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setTextIn(true), 400)
    const t2 = setTimeout(() => setVisible(false), 1800)
    const t3 = setTimeout(() => onDone(), 2300)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--bg)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.9rem',
          }}
        >
          <motion.div
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              overflow: 'hidden',
              border: '1.5px solid var(--purple-border)',
              boxShadow: '0 0 0 10px rgba(167,139,250,0.07)',
            }}
          >
            <img
              src="/172959283.jpg"
              alt="avatar"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={textIn ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              color: 'var(--text)',
              letterSpacing: '-0.02em',
            }}
          >
            柯梓轩
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={textIn ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.08 }}
            style={{
              fontSize: '0.75rem',
              color: 'var(--purple)',
              letterSpacing: '0.22em',
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 600,
              opacity: 0.85,
            }}
          >
            ようこそ
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={textIn ? { scaleX: 1 } : {}}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            style={{
              width: 100,
              height: 1.5,
              background: 'linear-gradient(to right, transparent, var(--purple), transparent)',
              borderRadius: 2,
              transformOrigin: 'center',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
