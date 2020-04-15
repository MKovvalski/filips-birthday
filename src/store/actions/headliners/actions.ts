import {
  ENTRY_headliners,
  OUTPUT_headliners,
} from './types'
import {
  GET_HEADLINERS,
  APPEND_HEADLINERS,
  REFRESH_HEADLINERS
} from '../consts'

export const getHeadliners = (payload: ENTRY_headliners): OUTPUT_headliners => ({
  type: GET_HEADLINERS,
  payload
})

export const appendHeadliners = (payload: ENTRY_headliners): OUTPUT_headliners => ({
  type: APPEND_HEADLINERS,
  payload
})

export const overrideHeadliners = (): { type: string } => ({
  type: REFRESH_HEADLINERS
})
