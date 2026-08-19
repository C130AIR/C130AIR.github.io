import { useState } from 'react'
import Intro from './components/Intro'
import Sidebar from './components/Sidebar'
import Banner from './components/Banner'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Sponsor from './components/Sponsor'

export default function App() {
  const [ready, setReady] = useState(false)

  return (
    <>
      <Intro onDone={() => setReady(true)} />

      <div style={{
        position: 'fixed',
        top: '20%',
        left: '50%',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
        transform: 'translateX(-50%)',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'pulse-glow 6s ease-in-out infinite',
      }} />
      <div style={{
        position: 'fixed',
        bottom: '10%',
        right: '5%',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'pulse-glow 8s ease-in-out infinite reverse',
      }} />

      <div style={{
        display: 'flex',
        minHeight: '100vh',
        position: 'relative',
        zIndex: 1,
      }}>
        {ready && (
          <>
            <Sidebar />
            <main style={{
              marginLeft: 'var(--sidebar-width)',
              flex: 1,
              minWidth: 0,
              padding: '0 0 2rem',
            }}>
              <Banner />
              <div style={{ padding: '0 1.25rem', maxWidth: 780 }}>
                <About />
                <Projects />
                <Contact />
                <Sponsor />

                <div style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '2rem' }}>
                  <button
                    onClick={() => {
                      if (window.confirm('你真的要点吗？')) {
                        if (window.confirm('你确定吗？')) {
                          window.location.href = 'https://www.bilibili.com/video/BV1GJ411x7h7/?spm_id_from=333.337.search-card.all.click&vd_source=7848c36e6fb7cb3d14567e5169eea3cb';
                        }
                      }
                    }}
                    style={{
                      background: '#e53935',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 8,
                      padding: '0.7rem 2rem',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      letterSpacing: '0.05em',
                      boxShadow: '0 4px 16px rgba(229,57,53,0.35)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLButtonElement).style.background = '#c62828';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLButtonElement).style.background = '#e53935';
                    }}
                  >
                    千万别点
                  </button>
                </div>
              </div>
            </main>
          </>
        )}

        <style>{`
          @media (max-width: 768px) {
            main { margin-left: 0 !important; }
            main > div { padding: 0 0.9rem !important; }
          }
        `}</style>
      </div>
    </>
  )
}
