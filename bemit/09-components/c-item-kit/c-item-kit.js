import React from "react"
import OCol from "../../07-objects/o-col/o-col.js"
import OContainer from "../..//07-objects/o-container/o-container.js"

const CItemKit = ({dataItemKit}) => {
const p = 'c-item-kit'



    return(
        <div className={`${p}`}>
        {
            dataItemKit.map( e => {
                return(
                    <div>
                            <OContainer key={e.bSolutionSlug} p={p}>
                                <OCol p={p} cols={{sm:4, lg:1}}>
                                    <div className={`${p}__wrapper-slug`}>
                                        <span>{e.bSolutionSlug}</span>
                                    </div>
                                </OCol>         
                                <OCol cols={{sm:4, lg:3}}>
                                    <div className={`${p}__wrapper-image`}>
                                        <img src={e.bSolutionImage.link}/>
                                    </div>
                                </OCol>
                                <OCol cols={{sm:4, lg:3}}>
                                    <div className={`${p}__wrapper-title`}>
                                        <h3 className={'o-font-title-kit'}>{e.bSolutionTitle}</h3>
                                    </div>
                                </OCol>
                                <OCol cols={{sm:4, lg:5}}>
                                    <div className={`${p}__wrapper-text`}>
                                        <p >{e.bSolutionText}</p>
                                    </div>
                                </OCol>
                            </OContainer>
                            <hr></hr>
                    </div>
                    )
            })
        }  
        </div>
    )

}

export default CItemKit