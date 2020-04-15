import { ENTRY_UIState, OUTPUT_UIState } from './types'
import { SET_LOADING_STATE } from '../consts'

export const setUIState = (payload: ENTRY_UIState): OUTPUT_UIState => ({
  type: SET_LOADING_STATE,
  payload
})
