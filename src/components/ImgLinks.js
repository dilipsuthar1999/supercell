import React from 'react'

const ImgLinks = ({ link, img, name }) => {
    return (
        <a href={link}>
            <img src={img} alt={name} />
        </a>
    )
}

export default ImgLinks
