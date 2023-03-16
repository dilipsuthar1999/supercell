import React from 'react'
import ImgLinks from './ImgLinks'

const SocialLinks = ({ title, sociallinks }) => {
    return (
        <div className="social-app mt-4">
            <p>{title}</p>
            <div className="social-links">
                {
                    sociallinks.map((social, i) => {
                        return (
                            <ImgLinks key={i} link={social.src} img={social.icon} name={social.socialName} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SocialLinks
