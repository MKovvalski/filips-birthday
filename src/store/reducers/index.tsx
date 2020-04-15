import { combineReducers } from 'redux'
import headliners from './headliners'
import toReads from './toReads'
import sources from './sources'
import searchParams from './searchParams'
import ui from './ui'
import { RootStore } from '../types'

export default combineReducers<RootStore>({
  headliners,
  toReads,
  sources,
  searchParams,
  ui
})
