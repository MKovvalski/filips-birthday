import produce from 'immer'

import { ENTRY_toReadsStore } from '../types'
import {
  ENTRY_headliner
} from '../../actions/headliners/types'
import {
  ENTRY_modifyHeadliner,
  ENTRY_removeHeadliner
} from '../../actions/toReads/types'
import { HEADLINER_STATUSES } from '../../actions/consts'

export const addHeadliner = (
  state: ENTRY_toReadsStore,
  payload: ENTRY_headliner
): ENTRY_toReadsStore => {
  return produce(state, ({ toReads, totalResults, ...rest }) => {
    const newResultsLength = toReads.unshift(payload)
    return {
      toReads: toReads,
      totalResults: newResultsLength,
      ...rest
    }
  })
}

export const modifyHeadlinerStatus = (
  state: ENTRY_toReadsStore,
  payload: ENTRY_modifyHeadliner
): ENTRY_toReadsStore => {
  return produce(state, ({ toReads, beenReads, toDeletes, ...rest }) => {
      toReads.forEach((headliner) => {
        if (headliner.title == payload.title) {

          headliner.status = payload.status

          switch (payload.status) {
            case HEADLINER_STATUSES.beenRead:
              beenReads = beenReads + 1
              break;
            case HEADLINER_STATUSES.toDelete:
              toDeletes = toDeletes + 1
              break;
          }
        }
      })

      return {
        toReads,
        beenReads,
        toDeletes,
        ...rest
      }
    })
}

export const removeHeadlinerFromList = (
  state: ENTRY_toReadsStore,
  payload: ENTRY_removeHeadliner
): ENTRY_toReadsStore => {
  return produce(state, ({ toReads, totalResults, toDeletes, beenReads, ...rest }) => {
    const index = toReads.findIndex(({ title }) => title === payload.title )
    const headliner = toReads[index]

    switch (headliner.status) {
      case HEADLINER_STATUSES.toRead:
        totalResults = totalResults - 1
        break;
      case HEADLINER_STATUSES.beenRead:
        beenReads = beenReads - 1
        break;
      case HEADLINER_STATUSES.toDelete:
        toDeletes = toDeletes - 1
        break;

    }

    if (index !== -1) {
      toReads.splice(index, 1);
    }

    return {
      totalResults,
      toReads,
      beenReads,
      toDeletes,
      ...rest
    }
  })
}
