import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { AudioLines, Sparkles } from 'lucide-react'
import { Card, SectionTitle } from './About'

const QUOTES = [
  // —— 原 15 条，保留 ——
  '挖三填一!',
  '/gamemode 1',
  '雷石东直放站!',
  '衬衫的价格是九镑十五便士。',
  '唔咕，要饭大失败……（眼神死）',
  'Ba+2Na=Banana',
  'PCL 的开发者龙腾猫跃经常被简称为龙猫',
  'C130AIR 已就位，跑道清空。',
  'OCLP 在手，老 Mac 还能再战五年。',
  '黑苹果不死，只是慢慢变老。',
  'F4 弯心见，来晚了就只能看尾灯。',
  'Red Bull 给我翅膀，键盘我自己敲。',
  '13 岁，方向盘和键盘我都要。',
  'echo "solved by C130AIR" >> /dev/null',
  '真正的 Bug 修完之前，永远别点那个按钮。',

  // —— F1 经典车队无线电 TR 梗 ——
  'GP2 engine, GP2! ARGHHHHHH!',
  'Simply lovely, simply lovely.',
  'Get in there Lewis!',
  "Valtteri, it's James.",
  'He turned into me!',
  "I'm stupid, I'm stupid.",
  "Noooooooooo!!!",
  'All the time you have to leave a space.',
  "I'm going pee in your seat",
  'in in in in in in in!',
  'Kimi, you will not have the drink.',
  'Just leave me alone.',
  'Fernando is faster than you.',
  'Box, box, box!',
  'These guys are ridiculous!',
  "It's a disgrace!",
  'No Michael, no, no, no!',
  'Plan C, Plan C.',
  'What the hell is that?Is someone swimming?',
  "You got a problem,change your f**king car!",
  'We are cheaking',
  'Is there a leakage?',

  // —— MC / PCL 经典梗 ——
  '我有 20 个铁块，你怕不怕！',
  '再问基岩，剁手！',
  '这波不是 bug，是特性。',
  'Creeper? Aw man...',
  'TNT 一响，父母白养。',
  '日落西山你就睡，明天又是新的一天。',
  '别问，问就是边境之地。',
  '末影珍珠手滑，人已起飞。',
  '钻石！……是深层板岩，白高兴了。',
  '萌新保护期已过，僵尸已就位。',
  '作者万岁！——不，是玩家万岁。',
  'PCL2：轻量、免费、用爱发电。',
  '联机失败率 50%，龙猫连夜焊服务器。',
  '挖到史莱姆区块，今晚就住这了。',
  '前方高能：小村民正在被僵尸围观。',
  '红石电路又冒烟了？正常，它是玄学。',
  '末影龙：你终于来送头了。',
  '史蒂夫：空腹挖矿，快乐加倍。',

  // —— 2026 暑假热梗 ——
  '大绷住！（熊大憋笑脸）',
  '正式进入大智斗时代。',
  '皓宸来了都得塌个大房。',
  '来杯好茶摇一摇，万物皆可摇。',
  '人类畏惧时间，时间畏惧野生狗奶。',
  '比野生奶狗多一天。',
  '暑假作业进度宛如春秋肠，保质期都过了还没动笔。',
  '丑不垃圾的牛，低山臭水遇知音。',
  '吃瓜吃成自己人。',
  '我是爷们！',
  '胆子真是肥嘟嘟的。',
  '我们只是老了，不是死了。（迪迦 857 万票）',
  'MJ 弹幕正在刷屏。',
  '这个暑假，梗界神仙打架。',
  '2026 的夏天，堪比 2018 神夏天。',
  '梗王视频：15 秒塞下 9 个热梗。',

  // —— 编程 / 开发者梗 ——
  'Hello, World!',
  '能跑就行，别动。',
  '改完这个 bug 就下班。（立 flag）',
  '在我电脑上能跑。',
  '编译不过去，一定是编译器的问题。',
  '404 Not Found。',
  '程序员三大错觉：我能行、快好了、还能用。',
  '重构一时爽，重构火葬场。',
  'Ctrl+S 强迫症晚期患者。',
  'Stack Overflow 是我第二个老师。',
  '面向 Ctrl+C / Ctrl+V 编程。',
  'merge conflict，一生之敌。',
  'Git 提交信息：fix bugs。',
  '这报错我昨天刚修好，怎么又来了？',
  '需求又改了？先改需求文档。',
  '凌晨三点的 bug 最妖。',
  '打印大法好，printf 走天下。',
  '这行代码谁写的？我写的，但不像我写的。',
  '少一个缩进，多一个 bug。',
  '测试环境绿油油，生产环境红彤彤。',
  '一键三连：build、test、deploy。',
  '全栈，就是全站都出 bug 的人。',

  // —— 个人彩蛋 / 赛车 ——
  'F4 起步杆位，弯心超车全靠胆。',
  '键盘和方向盘，我全都要。',
  '深圳的夜，代码和轮胎印一起收工。',
  '红牛给了翅膀，我把尾翼装进梦想。',
  '少年车手：踩刹车和写注释一样稳。',
  '赛道尽头是方格旗，桌面尽头是满屏绿。',
  '领奖台上的香槟，先敬熬夜 debug 的自己。',
  '车队无线电传来一句：干得漂亮，C130AIR。',
  '我 13 岁，但我弯道比你大胆。',
  '追尾灯的人，永远追不上方格旗。',
  'We are checking.（红牛式回复）',
  'Blue flag, blue flag!',
  'Plan F, plan F.（红牛经典名场面）',
  '下界合金，从不让人失望。',
  '好耶，是末地船！鞘翅，我来了！',
  '删库跑路前，记得先 commit。',
  '光头强百万撤离，二创直接炸锅。',
  '写文档是不可能的，这辈子都不可能。',
]

function randomQuote() {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)]
}

export default function EchoCave() {
  const [text, setText] = useState('')
  const [typing, setTyping] = useState(false)
  const [spark, setSpark] = useState(0)
  const timers = useRef<number[]>([])

  const clearTimers = () => {
    timers.current.forEach(t => window.clearTimeout(t))
    timers.current = []
  }

  const fire = () => {
    clearTimers()
    const quote = randomQuote()
    setText('')
    setTyping(true)
    setSpark(s => s + 1)
    let i = 0
    const step = () => {
      if (i <= quote.length) {
        setText(quote.slice(0, i))
        i++
        timers.current.push(window.setTimeout(step, 55 + Math.random() * 45))
      } else {
        setTyping(false)
      }
    }
    step()
  }

  useEffect(() => () => clearTimers(), [])

  const idle = !typing && text === ''

  return (
    <section id="echo" style={{ marginBottom: '1.25rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <SectionTitle ja="こだま" en="Echo Cave" />
        <motion.div whileTap={{ scale: 0.985 }}>
          <Card style={{ cursor: 'pointer', userSelect: 'none' }}>
            <div onClick={fire} aria-label="回声洞：点我生成一句话">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.9rem' }}>
                <AudioLines size={17} style={{ color: 'var(--purple-bright)' }} />
                <span style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                }}>
                  Click to echo
                </span>
              </div>

              <div style={{
                minHeight: 84,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 12,
                background: 'var(--purple-dim)',
                border: '1px dashed var(--purple-border)',
                padding: '1rem 1.2rem',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {idle ? (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 8, -8, 0] }}
                      transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                      style={{ fontSize: '1.9rem', color: 'var(--purple-bright)', lineHeight: 1 }}
                    >
                      +
                    </motion.span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      点我，听一句回声
                    </span>
                  </motion.div>
                ) : (
                  <motion.p
                    key={spark}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.18 }}
                    style={{
                      fontSize: 'clamp(1rem, 3vw, 1.18rem)',
                      fontWeight: 600,
                      color: 'var(--text)',
                      textAlign: 'center',
                      lineHeight: 1.7,
                      minHeight: '1.7em',
                      wordBreak: 'break-word',
                    }}
                  >
                    {text}
                    <span
                      style={{
                        display: 'inline-block',
                        width: 2,
                        height: '1em',
                        marginLeft: 3,
                        verticalAlign: '-0.12em',
                        background: 'var(--purple-bright)',
                        animation: 'blink 0.9s steps(2, start) infinite',
                      }}
                    />
                  </motion.p>
                )}

                {spark > 0 && idle === false && typing === false && (
                  <motion.span
                    key={`glow-${spark}`}
                    initial={{ opacity: 0.35, scale: 0.6 }}
                    animate={{ opacity: 0, scale: 1.9 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'radial-gradient(circle, var(--purple-glow) 0%, transparent 70%)',
                      pointerEvents: 'none',
                      borderRadius: 12,
                    }}
                  />
                )}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginTop: '0.9rem' }}>
                <Sparkles size={13} style={{ color: 'var(--purple-bright)' }} />
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', opacity: 0.7 }}>
                  {typing ? '正在回荡……' : idle ? '来自地下的神秘声音' : '再点一次，换一句'}
                </span>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
