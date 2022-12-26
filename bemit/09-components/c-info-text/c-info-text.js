import React from 'react'
import OContainer from '../../07-objects/o-container/o-container.js'
import OCol from '../../07-objects/o-col/o-col.js'
import Link from 'next/link.js'

const CInfoText = ({dTitle, dContent, dTextButton, dSlugButton}) => {
    const p ='c-info-text'

        return(
            <div className={`${p}`}>
            <OContainer p={p} extraClasses={`o-container--no-padding`}>

                            <OCol extraClasses={'o-col--no-padding'} cols={{sm: 4, md: 6, lg: 12}}>
                                <div className={`${p}__wrapper`}>
                                    <h4 className={'o-font-title-home'}>{dTitle}</h4>
                                    <p dangerouslySetInnerHTML={{__html: dContent}}></p>
                                        <button className={'button-blue'}><Link href={`/${dSlugButton}`}>{dTextButton}</Link></button>
    
                                </div>
                            </OCol>
    
            </OContainer>
            </div>
        )
    
    }
    
    export default CInfoText