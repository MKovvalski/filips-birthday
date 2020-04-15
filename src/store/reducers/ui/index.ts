import { ENTRY_UIStore } from '../types'
import { OUTPUT_UIState } from '../../actions/ui/types'
import { LOADING_STATUSES, SET_LOADING_STATE } from '../../actions/consts'

const INITIAL_STATE: ENTRY_UIStore = {
  loadingHeadliners: LOADING_STATUSES.initial,
  loadingSources: LOADING_STATUSES.initial,
  pageCount: 1,
}

const ui = (
  state: ENTRY_UIStore = INITIAL_STATE,
  { type, payload }: OUTPUT_UIState
): ENTRY_UIStore => {
  switch (type) {
    case SET_LOADING_STATE:
      return Object.assign(state, payload)
  }

  return state
}

export default ui
