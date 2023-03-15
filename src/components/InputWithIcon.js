import React from 'react'

const InputWithIcon = ({icon,placeholder,onChangeInput,className}) => {
  return (
    <div className={className}>
      <img src={icon}/>
      <input placeholder={placeholder}  onChange={onChangeInput}/>
    </div>
  )
}

export default InputWithIcon
