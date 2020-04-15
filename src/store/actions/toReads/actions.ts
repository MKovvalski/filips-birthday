import { ENTRY_headliner } from '../headliners/types'
import {
  ENTRY_toReads,
  ENTRY_modifyHeadliner,
  ENTRY_removeHeadliner,
  OUTPUT_getToReads,
  OUTPUT_addHeadliner,
  OUTPUT_removeHeadliner,
  OUTPUT_modifyHeadliner,
} from './types'

import {
  GET_TO_READ_LIST,
  ADD_HEADLINER_TO_LIST,
  REMOVE_HEADLINER_FROM_LIST,
  CHANGE_HEADLINER_STATUS
} from '../consts'

export const getToReads = (payload: ENTRY_toReads): OUTPUT_getToReads => ({
  type: GET_TO_READ_LIST,
  payload
})

export const addHeadlinerToList = (payload: ENTRY_headliner): OUTPUT_addHeadliner => ({
  type: ADD_HEADLINER_TO_LIST,
  payload
})

export const changeHeadlinerStatus = (payload: ENTRY_modifyHeadliner): OUTPUT_modifyHeadliner => ({
  type: CHANGE_HEADLINER_STATUS,
  payload
})

export const removeHeadlinerToList = (payload: ENTRY_removeHeadliner): OUTPUT_removeHeadliner => ({
  type: REMOVE_HEADLINER_FROM_LIST,
  payload
})
