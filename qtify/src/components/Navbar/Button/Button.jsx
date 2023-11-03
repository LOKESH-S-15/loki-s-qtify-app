import React from 'react'
import style from "./Buttn.module.css"
const Button = (children) => {
   
  return (
    <button className={style.btn}>{children.children}
      
    </button>
  )
}

export default Button
