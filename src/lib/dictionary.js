const dictionaries = {
  'en-us': () => import('./dictionaries/en-us.json').then((module) => module.default),
  'pt': () => import('./dictionaries/pt.json').then((module) => module.default),
}

export async function getDictionary(locale) {
  if (!dictionaries[locale]) {
    throw new Error(`Dictionary for locale '${locale}' not found`)
  }
  return dictionaries[locale]()
}