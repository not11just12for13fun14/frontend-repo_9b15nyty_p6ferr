import { ArrowRight, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-violet-200 blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-sky-200 blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-3 py-1 text-xs text-violet-700 shadow-sm backdrop-blur">
              <Star className="h-3.5 w-3.5 fill-violet-500/20 text-violet-600" />
              Достигайте большего с поддержкой лайфкоуча
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Ясность. Фокус. Результат.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Персональные сессии лайфкоучинга помогут вам определить цели, настроить систему действий и уверенно двигаться вперёд. Без выгорания — с удовольствием и устойчивой энергией.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-700">
                Записаться на бесплатную консультацию
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-violet-700 ring-1 ring-inset ring-violet-200 transition hover:bg-violet-50">
                Узнать о программах
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>100+ довольных клиентов</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>ICF-подход и этика</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto aspect-square max-w-md rounded-3xl bg-gradient-to-br from-violet-100 via-white to-sky-100 p-2 shadow-xl">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white">
                <div className="p-8 text-center">
                  <div className="mx-auto mb-6 h-20 w-20 rounded-full bg-gradient-to-br from-violet-500 to-sky-500 p-[2px]">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-violet-600 text-3xl font-bold">LC</div>
                  </div>
                  <p className="text-xl font-semibold text-slate-900">Лайфкоуч рядом</p>
                  <p className="mt-2 text-slate-600">Поддержка, которая помогает услышать себя и действовать уверенно.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
