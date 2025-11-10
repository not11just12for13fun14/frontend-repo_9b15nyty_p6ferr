import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Анна',
    role: 'Предпринимательница',
    quote:
      'За 8 недель я перестроила рабочие процессы и, наконец, вышла на стабильный график без ночных авралов. Чувствую контроль и спокойствие.',
  },
  {
    name: 'Илья',
    role: 'PM в IT',
    quote:
      'Коуч мягко направляет вопросами и помогает самому увидеть решения. Моя команда это уже заметила по результатам спринтов.',
  },
  {
    name: 'Мария',
    role: 'Дизайнер',
    quote:
      'Самое ценное — поддержка между сессиями и структурные инструменты. Цели перестали быть общими мечтами и стали системой.',
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Отзывы клиентов</h2>
          <p className="mt-4 text-slate-600">Реальные истории перемен и устойчивых результатов.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-600">
                <span className="font-semibold text-slate-900">{t.name}</span> · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
