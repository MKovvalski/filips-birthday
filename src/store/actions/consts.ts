import { ENTRY_headlinerStatus } from './headliners/types'
import { loadingStateObject } from './ui/types'

// headliners list action names
export const GET_HEADLINERS: string = 'GET_HEADLINERS'
export const APPEND_HEADLINERS: string = 'APPEND_HEADLINERS'
export const REFRESH_HEADLINERS: string = 'REFRESH_HEADLINERS'

// to-read action names
export const GET_TO_READ_LIST: string = 'GET_TO_READ_LIST'
export const ADD_HEADLINER_TO_LIST: string = 'ADD_HEADLINER_TO_LIST'
export const REMOVE_HEADLINER_FROM_LIST: string = 'REMOVE_HEADLINER_FROM_LIST'
export const CHANGE_HEADLINER_STATUS: string = 'CHANGE_HEADLINER_STATUS'

export const HEADLINER_STATUSES: ENTRY_headlinerStatus = {
  toRead: 0,
  beenRead: 1,
  toDelete: 2,
}

// sources action names
export const SET_SOURCES: string = 'SET_SOURCES'
export const SET_CHOSEN_SOURCES: string = 'SET_CHOSEN_SOURCES'

// searchParams action names
export const SET_PARAMETERS: string = 'SET_PARAMETERS'

// ui action names
export const SET_LOADING_STATE: string = 'SET_LOADING_STATE'

export const LOADING_STATUSES: loadingStateObject = {
  loading: 'loading',
  success: 'success',
  error: 'error',
  initial: null
}
