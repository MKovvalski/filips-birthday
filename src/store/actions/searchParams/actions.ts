import { SourcesParams } from '../../../utils/api/types'
import { OUTPUT_SearchParams } from './types'
import { SET_PARAMETERS } from '../consts'

export const setSearchParams = (payload: SourcesParams): OUTPUT_SearchParams => ({
  type: SET_PARAMETERS,
  payload
})
