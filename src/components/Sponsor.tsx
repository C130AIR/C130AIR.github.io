import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, Coffee, Rocket, Trophy, MessageCircle } from 'lucide-react'
import { SectionTitle, Card } from './About'

const tiers = [
  { icon: Coffee, name: '一杯咖啡', desc: '续命专用，写代码 / 跑模拟器全靠它顶着' },
  { icon: Rocket, name: '一箱油', desc: '赛道日油钱，下一圈快不快就看各位老板了' },
  { icon: Trophy, name: '车队赞助', desc: '主页 / 车队涂装永久留名，金主爸爸请上车' },
]

export default function Sponsor() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="sponsor" ref={ref} style={{ marginBottom: '3rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Card>
          <SectionTitle ja="Sponsor" en="Fuel My Dream" />

          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.15 }}
            style={{
              color: 'var(--text-muted)',
              fontSize: 'clamp(0.82rem, 2.2vw, 0.92rem)',
              lineHeight: 1.85,
            }}
          >
            13 岁的 F4 车手 + 独立开发者，一边刷圈速一边写代码。每一份支持都会变成轮胎、机油和熬夜写的下一行代码，感谢每一个让我继续追梦的人。
            <span style={{ color: 'var(--purple-bright)', fontWeight: 600 }}>
              {' '}Every lap, every line — powered by you.
            </span>
          </motion.p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '0.7rem',
            marginTop: '1.1rem',
          }}>
            {tiers.map(({ icon: Icon, name, desc }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
                whileHover={{ y: -4, borderColor: 'var(--purple-border)' }}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: '0.85rem 0.9rem',
                  transition: 'border-color 0.2s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: -6 }}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 8,
                      background: 'var(--purple-dim)',
                      border: '1px solid var(--purple-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--purple)',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={14} />
                  </motion.div>
                  <div style={{ fontWeight: 700, fontSize: '0.84rem', color: 'var(--text)' }}>{name}</div>
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{desc}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              marginTop: '1.2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.85rem',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.03), transparent)',
              border: '1px dashed var(--border)',
              borderRadius: 14,
              padding: '1.2rem 1rem',
            }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'rgba(7,193,96,0.12)',
              border: '1px solid rgba(7,193,96,0.35)',
              color: '#2fd573',
              borderRadius: 999,
              padding: '0.28rem 0.85rem',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.03em',
            }}>
              <MessageCircle size={13} />
              微信支付 · WeChat Pay
            </div>

            <motion.div
              whileHover={{ scale: 1.04, rotate: -1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{
                width: 'min(230px, 68vw)',
                borderRadius: 16,
                overflow: 'hidden',
                border: '1px solid var(--purple-border)',
                boxShadow: '0 0 0 5px rgba(59,130,246,0.08), 0 12px 40px rgba(0,0,0,0.45)',
                background: '#fff',
                padding: '0.5rem',
              }}
            >
              <img
                src="/sponsor-wechat.jpg"
                alt="WeChat Pay QR Code"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 10 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.75 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--purple-bright)',
                fontSize: '0.78rem',
                fontWeight: 600,
              }}
            >
              <Heart size={14} fill="currentColor" />
              感谢你的支持 — 赛道上见！
            </motion.div>
          </motion.div>
        </Card>
      </motion.div>
    </section>
  )
}
