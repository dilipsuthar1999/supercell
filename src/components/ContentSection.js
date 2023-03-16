import React from 'react'
import AppBtn from './AppBtn'
import SocialLinks from './SocialLinks'

const ContentSection = ({ section, data, url }) => {
    return (
        <section className={section === "update" ? "bg-color overflow-hidden" : null}>
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className={`col-md-6 text-center my-3 ${section === "update" && "order-2"}`}>
                        <img src={data.img} className={section === "update" ? "update-img pl-4" : "w-75"} />
                    </div>
                    <div className={`col-md-6 my-3 ${section === "update" && "order-1"}`}>
                        <h3>{data.title}</h3>
                        <p className={section==="update" ? null : "text-gray"}>{data.paragraph}</p>
                        {
                            section === "update" ? <SocialLinks title="FOLLOW CLASH OF CLANS ON" sociallinks={url} /> : <AppBtn apps={url} />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentSection
