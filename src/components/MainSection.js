import React from 'react'
import CardContainer from './CardContainer'

const MainSection = ({ data }) => {
    const Troops = data.Troops
    const Heros = data.Heros

    return (
        <section className="container pb-5">
            <h3 className="text-center">Explore Clash of Clan</h3>

            <ul className="nav mt-4 justify-content-center mainconatiner" id="pills-tab">
                <li className="nav-item" role="troops">
                    <button className="nav-link border-0 rounded-pill active" id="troops-tab" data-toggle="pill" data-target="#troops-tab-container" type="button" role="tab" aria-controls="troops-tab-container" aria-selected="true">
                        Troops
                    </button>
                </li>
                <li className="nav-item" role="heros">
                    <button className="nav-link border-0 rounded-pill" id="heros-tab" data-toggle="pill" data-target="#heros-tab-container" type="button" role="tab" aria-controls="heros-tab-container" aria-selected="false">
                        Heros
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="troops-tab-container" role="tabpanel" aria-labelledby="troops-tab">
                    <CardContainer data={Troops} />
                </div>
                <div className="tab-pane fade" id="heros-tab-container" role="tabpanel" aria-labelledby="heros-tab">
                    <CardContainer data={Heros} />
                </div>
            </div>
        </section>
    )
}

export default MainSection
