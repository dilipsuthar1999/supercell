import React from 'react'
import ImgLinks from './ImgLinks'

const AppBtn = ({apps}) => {
    return (
        <div className="app-btn">
            {
                apps.map((app, i) => {
                    return (
                        <ImgLinks key={i} link={app.src} img={app.icon} name={app.appName} />                    )
                })
            }
        </div>
    )
}

export default AppBtn
