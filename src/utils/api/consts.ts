import {
  CategoriesInterface,
  LanguagesInterface,
  CountriesInterface
} from './types'

export const API_URL: string = 'https://newsapi.org/v2/'
export const HEADLINES_URL: string = '/top-headlines'
export const SOURCES_URL: string = '/sources'

export const CATEGORIES_ARRAY: CategoriesInterface[] = [
  { label: 'Business', value: 'business' },
  { label: 'Entertainment', value: 'entertainment' },
  { label: 'General', value: 'general' },
  { label: 'Health', value: 'health' },
  { label: 'Science', value: 'science' },
  { label: 'Sports', value: 'sports' },
  { label: 'Technology', value: 'technology' }
]

export const COUNTRIES_ARRAY: CountriesInterface[] = [
  { label: 'Poland', value: 'pl' },
  { label: 'United States', value: 'us' },
  { label: 'Russia', value: 'ru' },
  { label: 'Belgium', value: 'be' },
  { label: 'Canada', value: 'ca' },
  { label: 'China', value: 'cn' },
  { label: 'France', value: 'fr' },
  { label: 'Germany', value: 'de' },
  { label: 'United Kingdom', value: 'gb' }
]

export const LANGUAGES_ARRAY: LanguagesInterface[] = [
  { label: 'German', value: 'de' },
  { label: 'Polish', value: 'pl' },
  { label: 'English', value: 'en' },
  { label: 'Russian', value: 'ru' },
  { label: 'French', value: 'fr' },
  { label: 'Chinese', value: 'zh' }
]
