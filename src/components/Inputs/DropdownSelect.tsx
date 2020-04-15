import React from 'react'
import Select from 'react-select'
import { DropdownSelectProps } from './types'

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  options,
  defaultValue,
  onChange,
  isMulti,
  isClearable,
  isDisabled = false,
  placeholder,
  value,
  menuIsOpen
}) => {
  return (
    <div className='select-wrapper'>
      <Select
        value={value}
        options={options}
        defaultValue={defaultValue}
        onChange={onChange}
        isMulti={isMulti}
        isClearable={isClearable}
        isDisabled={isDisabled}
        placeholder={placeholder}
        className='default-select'
        classNamePrefix='default-select'
        menuIsOpen={menuIsOpen}
      />
    </div>
  )
}

export default DropdownSelect
