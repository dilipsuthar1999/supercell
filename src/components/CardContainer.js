import React from 'react'
import Card from './Card'

const CardContainer = ({data}) => {
    return (
        <div className="row align-items-end justify-content-center mt-3">
            {
                data.map((data, i) => {
                    return (
                        <div className="col-lg-3 col-md-4 col-6" key={i}>
                            <Card name={data.name} img={data.img} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CardContainer
