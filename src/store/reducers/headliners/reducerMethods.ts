import { ENTRY_headlinersStore } from '../types'
import { ENTRY_headliners } from '../../actions/headliners/types'

export const appendHeadliners = (
  state: ENTRY_headlinersStore,
  payload: ENTRY_headliners
): ENTRY_headlinersStore => {
  return {
    totalResults: payload.totalResults,
    headliners: [...state.headliners, ...payload.headliners]
  }
}
