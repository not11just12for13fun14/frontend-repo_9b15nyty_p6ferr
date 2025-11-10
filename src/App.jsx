import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#hero" className="text-lg font-bold tracking-tight text-violet-700">LifeCoach</a>
          <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
            <a href="#services" className="hover:text-violet-700">Программы</a>
            <a href="#reviews" className="hover:text-violet-700">Отзывы</a>
            <a href="#contact" className="hover:text-violet-700">Контакты</a>
          </nav>
          <a href="#contact" className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-violet-700">Записаться</a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} LifeCoach. Все права защищены.</p>
          <div className="flex gap-4">
            <a href="#hero" className="hover:text-violet-700">Наверх</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
