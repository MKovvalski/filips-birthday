import { StatusRange } from '../../store/actions/headliners/types'

export type RequestStatusRange = 'loading' | 'success' | 'error' | null

export type CategoriesLabelRange =
  'Business' |
  'Entertainment' |
  'General' |
  'Health' |
  'Science' |
  'Sports' |
  'Technology'

export type CategoriesValueRange =
  'business' |
  'entertainment' |
  'general' |
  'health' |
  'science' |
  'sports' |
  'technology'

export interface CategoriesInterface {
  label: CategoriesLabelRange,
  value: CategoriesValueRange
}

export type CountriesLabelRange =
  'Poland' |
  'United States' |
  'Russia' |
  'Belgium' |
  'Canada' |
  'China' |
  'France' |
  'Germany' |
  'United Kingdom'

export type CountriesValueRange =
  'pl' |
  'gb' |
  'ru' |
  'be' |
  'ca' |
  'cn' |
  'fr' |
  'de' |
  'us'

export interface CountriesInterface {
  label: CountriesLabelRange,
  value: CountriesValueRange
}

export type LanguagesLabelRange =
  'German' |
  'Polish' |
  'English' |
  'Russian' |
  'French' |
  'Chinese'

export type LanguagesValuesRange =
  'de' |
  'pl' |
  'en' |
  'ru' |
  'fr' |
  'zh'

export interface LanguagesInterface {
  label: LanguagesLabelRange,
  value: LanguagesValuesRange
}

export type ResponseStatusRange = 'ok' | 'error'

export interface SourcesParams {
  category: CategoriesValueRange,
  country: CountriesValueRange,
  language: LanguagesValuesRange
}

export interface HeadlinersParams {
  sources: string,
  page?: number
}

export interface RequestBuilder {
  method?: any,
  url: string,
  params: SourcesParams | HeadlinersParams
}

export interface ENTRY_UnprocessedHeadliner {
  title: string,
  status: StatusRange,
  source: {
    id: string | null,
    name: string
  },
  author: string | null,
  description: string,
  url: string,
  urlToImage?: string,
  publishedAt: string,
  content?: string
}

export interface ENTRY_UnprocessedSource {
  id: string,
  name: string
}

export interface ENTRY_RawResponse {
  status: ResponseStatusRange,
}

export interface ENTRY_HeadlinesResponseSuccess extends ENTRY_RawResponse {
  totalResults: number,
  articles: ENTRY_UnprocessedHeadliner[]
}

export interface ENTRY_SourcesResponseSuccess extends ENTRY_RawResponse {
  sources: ENTRY_UnprocessedSource[]
}
