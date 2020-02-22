import React from 'react'

function Squares(props) {
    return (
        <button className="btnsqare btn-lg btn-dark border-light m-1 rounded-0" onClick={props.onClick}>
            <h3 className="text-light h1 text-shadow">{props.value}</h3>
        </button>
    )
}

export default Squares
