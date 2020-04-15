import { buildRequest } from './apiMethods'
import { HeadlinersParams, SourcesParams } from './types'
import { HEADLINES_URL, SOURCES_URL } from './consts'

export const requestSources = (params: SourcesParams): any => buildRequest({ url: SOURCES_URL, params })

export const requestHeadlines = (params: HeadlinersParams): any => buildRequest({ url: HEADLINES_URL, params })
