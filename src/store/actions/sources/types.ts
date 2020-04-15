// entries
export interface ENTRY_Source {
  label: string,
  value: string
}

export interface ENTRY_Sources {
  sources: ENTRY_Source[]
}

export interface ENTRY_ChosenSources {
  chosenSources: ENTRY_Source[]
}

// outputs
export interface OUTPUT_DefaultAction {
  type: string
  payload: any
}

export interface OUTPUT_Sources extends OUTPUT_DefaultAction {
  payload: ENTRY_Sources
}

export interface OUTPUT_ChosenSources extends OUTPUT_DefaultAction {
  payload: ENTRY_ChosenSources
}
