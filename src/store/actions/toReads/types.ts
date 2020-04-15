import { ENTRY_headliner, StatusRange } from '../headliners/types'

// entries
export interface ENTRY_toReads {
  totalResults: number
  beenReads: string,
  toDeletes: string,
  toReads: ENTRY_headliner[] | null
}

export interface ENTRY_modifyHeadliner {
  status: StatusRange,
  title: string
}

export interface ENTRY_removeHeadliner {
  title: string
}

// Action Outputs
export interface OUTPUT_DefaultAction {
  type: string
  payload: any
}

export interface OUTPUT_getToReads extends OUTPUT_DefaultAction {
  payload: ENTRY_toReads
}

export interface OUTPUT_addHeadliner extends OUTPUT_DefaultAction {
  payload: ENTRY_headliner
}

export interface OUTPUT_removeHeadliner extends OUTPUT_DefaultAction {
  payload: ENTRY_removeHeadliner
}

export interface OUTPUT_modifyHeadliner extends OUTPUT_DefaultAction {
  payload: ENTRY_modifyHeadliner
}
