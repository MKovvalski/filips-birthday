import {
  GET_HEADLINERS,
  APPEND_HEADLINERS,
  REFRESH_HEADLINERS
} from '../../actions/consts'
import { OUTPUT_headliners } from '../../actions/headliners/types'
import { ENTRY_headlinersStore } from '../types'
import { appendHeadliners } from './reducerMethods'

const INITIAL_STATE: ENTRY_headlinersStore = {
  totalResults: 0,
  headliners: []
}

const headliners = (
  state: ENTRY_headlinersStore = INITIAL_STATE,
  { type, payload}: OUTPUT_headliners
): ENTRY_headlinersStore => {
  switch (type) {
    case GET_HEADLINERS:
      return payload

    case APPEND_HEADLINERS:
      return appendHeadliners(state, payload)

    case REFRESH_HEADLINERS:
      return INITIAL_STATE
  }

  return state
}

export default headliners
