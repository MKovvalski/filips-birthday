import React from 'react'
import { loadingStateRange } from '../store/actions/ui/types'
import { useDispatch, useSelector } from 'react-redux'
import { SourcesParams } from '../utils/api/types'
import { RootStore } from '../store/types'
import { requestSources } from '../utils/api/api'
import { formatSourcesResponseData } from '../utils/api/apiMethods'
import { setSources } from '../store/actions/sources/actions'
import { setUIState } from '../store/actions/ui/actions'
import { LOADING_STATUSES } from '../store/actions/consts'

type TriggerRequest = () => void

interface SourcesHookInterface {
  status: loadingStateRange,
  triggerRequest: TriggerRequest
}

const useSourcesRequest = (): SourcesHookInterface => {
  const dispatch = useDispatch()

  const searchParams: SourcesParams = useSelector((state: RootStore) => state.searchParams)
  const loadingSources: loadingStateRange = useSelector(({ ui }: RootStore) => ui.loadingSources)

  const triggerRequest = async () => {
    dispatch(setUIState({ loadingSources: LOADING_STATUSES.loading }))

    try {
      const { data }: any = await requestSources(searchParams)
      const { sources } = formatSourcesResponseData(data)

      dispatch(setSources({ sources }))
      dispatch(setUIState({ loadingSources: LOADING_STATUSES.success }))

    } catch (e) {
      dispatch(setUIState({ loadingSources: LOADING_STATUSES.error }))
    }
  }

  return {
    status: loadingSources,
    triggerRequest
  }
}

export default useSourcesRequest
