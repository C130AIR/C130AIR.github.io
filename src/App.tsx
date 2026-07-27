import { useState } from 'react'
import Intro from './components/Intro'
import Sidebar from './components/Sidebar'
import Banner from './components/Banner'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

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
