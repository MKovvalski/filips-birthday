export type loadingStateRange = 'loading' | 'success' | 'error' | null

export interface loadingStateObject {
  loading: 'loading',
  success: 'success',
  error: 'error',
  initial: null
}

// entries
export interface ENTRY_UIState {
  loadingHeadliners?: loadingStateRange,
  pageCount?: number,
  loadingSources?: loadingStateRange
}

export interface OUTPUT_UIState {
  type: string,
  payload: ENTRY_UIState
}
