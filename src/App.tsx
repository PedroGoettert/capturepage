import { Content } from './components/Content'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

import style from './App.module.css'

export function App() {
  return (
    <main>
      <section className={style.divBackground}>
        <div className={style.background}></div>
        <div className={style.backgroundImage}></div>
      </section>

      <section className={style.content}>
        <Header />
        <Content />
        <Footer />
      </section>
    </main>
  )
}
