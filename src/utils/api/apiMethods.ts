import axios from 'axios'
import { ENTRY_HeadlinesResponseSuccess, ENTRY_SourcesResponseSuccess, RequestBuilder } from './types'
import { ENTRY_headliners } from '../../store/actions/headliners/types'

import { HEADLINER_STATUSES } from '../../store/actions/consts'
import { API_URL } from './consts'
import { API_KEY } from '../../../config'
import { ENTRY_Sources } from '../../store/actions/sources/types'

export const buildRequest = ({
  url,
  params,
  method = 'GET'
}: RequestBuilder): any => {
  return axios({
    baseURL: API_URL,
    headers: { 'X-Api-Key': API_KEY },
    method,
    url,
    params
  })
}

export const formatHeadersResponseData = (responsePayload: ENTRY_HeadlinesResponseSuccess): ENTRY_headliners => {
  const { totalResults, articles } = responsePayload

  const headliners = articles.map(({
    source,
    content,
    ...rest
  }) => {
    return {
      status: HEADLINER_STATUSES.toRead,
      source: source.name,
      ...rest
    }
  })

  return {
    totalResults,
    headliners
  }
}

export const formatSourcesResponseData = (responsePayload: ENTRY_SourcesResponseSuccess): ENTRY_Sources => {
  const { sources }= responsePayload
  return {
    sources: sources.map(({ id, name }) => ({ value: id, label: name }))
  }
}
