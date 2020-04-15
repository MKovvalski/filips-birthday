// entries
export type StatusRange = 0 | 1 | 2

export interface ENTRY_headliner {
  title: string,
  status: StatusRange,
  source: string,
  author: string | null,
  description: string,
  url: string,
  urlToImage?: string,
  publishedAt: string
}

export interface ENTRY_headlinerStatus {
  toRead: number,
  beenRead: number,
  toDelete: number
}

export interface ENTRY_headliners {
  totalResults: number
  headliners: ENTRY_headliner[]
}

// outputs
export interface OUTPUT_headliners {
  type: string,
  payload: ENTRY_headliners
}
