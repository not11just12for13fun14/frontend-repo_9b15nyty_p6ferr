import { CheckCircle2, Compass, Target, Heart } from 'lucide-react'

const services = [
  {
    icon: Compass,
    title: 'Старт с ясности',
    desc: 'Определим направления, ценности и стратегию. Выстроим ориентиры без лишнего шума.',
  },
  {
    icon: Target,
    title: 'Фокус и дисциплина',
    desc: 'Настроим систему целей, трекеры и ритуалы. Регулярные мини-итерации вместо рывков.',
  },
  {
    icon: Heart,
    title: 'Энергия и баланс',
    desc: 'Работа с границами, ресурсностью и восстановлением. Результат без выгорания.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Программы и форматы</h2>
          <p className="mt-4 text-slate-600">Выберите формат, который подходит именно вам. Все сессии проходят онлайн.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> 60-минутные сессии</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> Домашние задания и майнд-трекеры</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> Поддержка в чате между сессиями</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
