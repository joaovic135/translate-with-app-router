export default function LanguageSwitcher({ currentLang, path }) {
  return (
    <div className="flex gap-4">
      <a
        href={`/pt${path}`}
        className={`px-4 py-2 rounded ${
          currentLang === 'pt' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        Português
      </a>
      <a
        href={`/en-us${path}`}
        className={`px-4 py-2 rounded ${
          currentLang === 'en-us' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        English
      </a>
    </div>
  )
}