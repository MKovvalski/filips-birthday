import { ENTRY_sourcesStore } from '../types'
import { OUTPUT_DefaultAction } from '../../actions/sources/types'
import { SET_CHOSEN_SOURCES, SET_SOURCES } from '../../actions/consts'

const INITIAL_STATE: ENTRY_sourcesStore = {
  sources: [],
  chosenSources: []
}

const sources = (
  state: ENTRY_sourcesStore = INITIAL_STATE,
  { type, payload }: OUTPUT_DefaultAction
): ENTRY_sourcesStore => {
  switch (type) {
    case SET_SOURCES:
      const { sources, ...rest } = state
      return {
        sources: payload.sources,
        ...rest
      }

    case SET_CHOSEN_SOURCES:
      const { chosenSources, ...other } = state
      return {
        chosenSources: payload.chosenSources,
        ...other
      }
  }
  return state

}

export default sources
