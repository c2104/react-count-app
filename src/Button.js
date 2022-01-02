import React from 'react'

const Button = (props) => {
    return (
        <button onClick={props.btn_click}>
            {props.btn_txt}
        </button>
    )
}

export default Button
