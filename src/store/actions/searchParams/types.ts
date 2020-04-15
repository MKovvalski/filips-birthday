import { SourcesParams } from '../../../utils/api/types'

// outputs
export interface OUTPUT_DefaultAction {
  type: string
  payload: any
}

export interface OUTPUT_SearchParams extends OUTPUT_DefaultAction {
  payload: SourcesParams
}
