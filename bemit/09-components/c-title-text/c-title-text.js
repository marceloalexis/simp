import React from 'react'
import OContainer from '../../07-objects/o-container/o-container.js'
import OCol from '../../07-objects/o-col/o-col.js'

const CTitleText = ({dataItem}) => {
const p ='c-title-text'

    return(
        <div className={`${p}`}>
        <OContainer p={p}>
            {
                dataItem.map( e => {
                        const title = e.bHomeTitle
                        const content = e.bHomeText
                        const settingsSM = e.bHomeSettings.bHomeSm
                        const settingsMd = e.bHomeSettings.bHomeMd
                        const settingsLg = e.bHomeSettings.bHomeLg
                    return(
                        <OCol key={title} cols={{sm: settingsSM, md: settingsMd, lg: settingsLg}}>
                            <div className={`${p}`}>
                                <h4>{title}</h4>
                                <div className={`${p}__wrapper-text`} dangerouslySetInnerHTML={{__html: content}}></div>

                            </div>
                        </OCol>
                    )

                })
            }
        </OContainer>
        </div>
    )

}

export default CTitleText