import { Mail, MessageCircle, Phone } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Спасибо! Я свяжусь с вами в течение дня.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Свяжитесь со мной</h2>
            <p className="mt-4 text-slate-600">Оставьте заявку на бесплатную 20-минутную консультацию. Вы получите план действий и почувствуете формат работы.</p>

            <div className="mt-8 space-y-4 text-slate-700">
              <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-violet-600" /> +7 (900) 000-00-00</p>
              <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-violet-600" /> hello@lifecoach.example</p>
              <p className="flex items-center gap-3"><MessageCircle className="h-5 w-5 text-violet-600" /> Telegram: @yourcoach</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-slate-700">Ваше имя</label>
                <input required type="text" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none ring-violet-400 focus:ring" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none ring-violet-400 focus:ring" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Ваш запрос</label>
                <textarea required rows={4} className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none ring-violet-400 focus:ring" />
              </div>
            </div>
            <button type="submit" className="mt-6 w-full rounded-lg bg-violet-600 px-5 py-3 font-medium text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-700">Отправить заявку</button>
            {status && <p className="mt-3 text-sm text-green-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
