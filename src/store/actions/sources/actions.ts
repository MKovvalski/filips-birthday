import { ENTRY_ChosenSources, ENTRY_Sources,OUTPUT_Sources, OUTPUT_ChosenSources } from './types'
import { SET_SOURCES, SET_CHOSEN_SOURCES } from '../consts'

export const setSources = (payload: ENTRY_Sources): OUTPUT_Sources => ({
  type: SET_SOURCES,
  payload
})

export const setChosenSources = (payload: ENTRY_ChosenSources): OUTPUT_ChosenSources => ({
  type: SET_CHOSEN_SOURCES,
  payload
})
