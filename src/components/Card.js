import React from 'react'

const Card = ({name, img}) => {
  return (
    <div className="position-relative w-100 mb-4 coc-box">
        <div className="position-absolute coc-item-box"></div>
        <img src={img} className="d-block mx-auto w-100 px-2" alt={name} />
        <p className="text-center coc-item-name">{name}</p>
    </div>
  )
}

export default Card
