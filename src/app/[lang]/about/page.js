import { notFound } from 'next/navigation'
import { getDictionary } from '@/lib/dictionary'
import Link from 'next/link'
import LanguageSwitcher from '@/components/LanguageSwitcher'

const languages = ['pt', 'en-us']

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}

export default async function About({ params: { lang } }) {
  if (!languages.includes(lang)) {
    notFound()
  }

  const dict = await getDictionary(lang)

  return (
    <main className="min-h-screen p-8">
      <nav className="flex justify-between items-center mb-12">
        <div className="space-x-4">
          <Link 
            href={`/${lang}`} 
            className="text-blue-500 hover:underline"
          >
            {dict.nav.home}
          </Link>
          <Link 
            href={`/${lang}/about`} 
            className="text-blue-500 hover:underline font-bold"
          >
            {dict.nav.about}
          </Link>
        </div>
        <LanguageSwitcher currentLang={lang} path="/about" />
      </nav>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          {dict.about.title}
        </h1>
        <div className="prose lg:prose-xl">
          <p className="text-xl mb-6">
            {dict.about.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">
                {dict.about.teamTitle}
              </h2>
              <p>{dict.about.teamDescription}</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">
                {dict.about.missionTitle}
              </h2>
              <p>{dict.about.missionDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}