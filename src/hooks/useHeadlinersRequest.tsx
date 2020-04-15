import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../store/types'
import { setUIState} from '../store/actions/ui/actions'
import { LOADING_STATUSES } from '../store/actions/consts'
import { ENTRY_Source } from '../store/actions/sources/types'
import { requestHeadlines } from '../utils/api/api'
import { formatHeadersResponseData } from '../utils/api/apiMethods'
import { getHeadliners, appendHeadliners, overrideHeadliners } from '../store/actions/headliners/actions'
import { loadingStateRange } from '../store/actions/ui/types'

type OperationTypeRange = 'add' | 'append'

interface OperationTypeObjectInterface {
  add: 'add',
  append: 'append'
}

export const OperationType: OperationTypeObjectInterface = {
  add: 'add',
  append: 'append'
}

type TriggerRequest = (operationType: OperationTypeRange) => void

interface HeadlinersHookInterface {
  status: loadingStateRange,
  triggerRequest: TriggerRequest
}

const formatDataForRequest = (sources: ENTRY_Source[]): string => {
  return sources.map(({ value }) => value).join(',')
}

const useHeadlinersRequest = (): HeadlinersHookInterface => {
  const pageCount: number = useSelector(({ ui }: RootStore) => ui.pageCount)
  const loadingHeadliners: loadingStateRange = useSelector(({ ui }: RootStore) => ui.loadingHeadliners)
  const sources: ENTRY_Source[] = useSelector(({ sources }: RootStore) => sources.sources)
  const chosenSources: ENTRY_Source[] = useSelector(({ sources }: RootStore) => sources.chosenSources)
  const dispatch = useDispatch()

  const triggerRequest = async (operationType: OperationTypeRange) => {
    dispatch(setUIState({ loadingHeadliners: LOADING_STATUSES.loading }))

    try {
      const sourcesToFormat = !!chosenSources.length ? chosenSources : sources
      const formattedSources = formatDataForRequest(sourcesToFormat)
      let newPageCount: number = pageCount
      let requestData: any = null
      let action: (data: object) => void | null = null

      switch (operationType) {
        case OperationType.add:
          dispatch(overrideHeadliners())

          const addResponseData = await requestHeadlines({ sources: formattedSources })
          newPageCount = 1
          requestData = addResponseData.data
          action = getHeadliners
          break

        case OperationType.append:

          newPageCount++
          const appendResponseData = await requestHeadlines({ sources: formattedSources, page: newPageCount })
          requestData = appendResponseData.data
          action = appendHeadliners
          break
      }

      const formattedData = formatHeadersResponseData(requestData)
      dispatch(action(formattedData))
      dispatch(setUIState({ loadingHeadliners: LOADING_STATUSES.success, pageCount: newPageCount }))

    } catch (e) {
      dispatch(setUIState({ loadingHeadliners: LOADING_STATUSES.error, pageCount: 0 }))
    }
  }

  return {
    status: loadingHeadliners,
    triggerRequest
  }
}

export default useHeadlinersRequest
