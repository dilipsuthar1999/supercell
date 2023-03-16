import React from 'react'

const HeroSection = ({ data, apps }) => {
  return (
    <section className="bg-img position-relative">
      <div className="container text-center">
        <h1>{data.title01} <br/> {data.title02}</h1>
        <p>{data.paragraph}</p>
        <div className="app-btn">
          {
            apps.map((app, i) => {
              return (
                <a href={app.src} key={i}>
                  <img src={app.icon} alt={app.appName} />
                </a>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default HeroSection
