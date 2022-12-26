import React from 'react'
import OContainer from '../../07-objects/o-container/o-container.js'
import OCol from '../../07-objects/o-col/o-col.js'
import Image from 'next/image.js'

const CBlocks = ({dataBlocks}) => {

    const p = 'c-block'
    return(
        <div className={`${p}`}>
            <OContainer p={p}>
                {
                    dataBlocks.map ((e) => {
                        return(
                        <OCol key={e.bStoryTitle} p={p} cols={{lg:6}}>
                            <div className={`${p}__wrapper_block`} data-scroll data-scroll-speed={e.bStoryDatascroll}>
                                <div className={`${p}__wrapper_image`} >
                                    <Image alt={e.bStoryImage.altText} width={e.bStoryImage.mediaDetails.width} height={e.bStoryImage.mediaDetails.height} data-scroll data-scroll-speed={-4} src={e.bStoryImage.link}/>
                                </div>
                                <span>{e.bStoryTag}</span>
                                <h4 dangerouslySetInnerHTML={{__html: e.bStoryTitle}} className={'o-font-title-kit'}></h4>
                                <p className={'o-font-text'}>{e.bStoryText}</p>
                            </div>
                        </OCol>
                        )
                    })

                }
            </OContainer>
        </div>
    )
}
export default CBlocks