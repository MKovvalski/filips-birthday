export interface SelectOption {
  value: string,
  label: string
}

export interface DropdownSelectProps {
  options: SelectOption[],
  defaultValue?: SelectOption,
  onChange?: any,
  value?: SelectOption | SelectOption[],
  isMulti?: boolean,
  isClearable?: boolean,
  isDisabled?: boolean,
  placeholder?: string,
  menuIsOpen?: boolean
}
