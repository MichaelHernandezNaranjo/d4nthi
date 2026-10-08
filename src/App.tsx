import type { Lang } from './i18n'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { Products } from './components/Products'
import { Process } from './components/Process'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App({ lang }: { lang: Lang }) {
  return (
    <>
      <Header lang={lang} />
      <main id="main">
        <Hero lang={lang} />
        <Stats lang={lang} />
        <Products lang={lang} />
        <Process lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  )
}
