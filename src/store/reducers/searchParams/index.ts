import { SET_PARAMETERS } from '../../actions/consts'
import { CATEGORIES_ARRAY, COUNTRIES_ARRAY, LANGUAGES_ARRAY } from '../../../utils/api/consts'
import { OUTPUT_SearchParams } from '../../actions/searchParams/types'
import { ENTRY_searchParamsStore } from '../types'

export const INITIAL_STATE: ENTRY_searchParamsStore = {
  category: CATEGORIES_ARRAY[ 6 ].value,
  country: COUNTRIES_ARRAY[ 1 ].value,
  language: LANGUAGES_ARRAY[ 2 ].value
}

const searchParams = (
  state: ENTRY_searchParamsStore = INITIAL_STATE,
  { type, payload }: OUTPUT_SearchParams
): ENTRY_searchParamsStore => {
  switch (type) {
    case SET_PARAMETERS:
      return payload
  }

  return state
}

export default searchParams
