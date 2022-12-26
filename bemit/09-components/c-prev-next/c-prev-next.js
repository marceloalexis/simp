import React from "react"
import Link from 'next/link'
import Image from "next/image.js"
import OContainer from "../../07-objects/o-container/o-container.js"
import OCol from "../../07-objects/o-col/o-col.js"
import Date from "../c-date/c-date.js"

const CPrevNext = ({ next, prev }) => {

	const p = 'c-prev-next';
    

	return ( 
        <div className={`${p}`}>
            <OContainer p={p} extraClasses={`${p}__head-last`}>
                <OCol p={p} cols={{lgPush:2, lg:10}}>
                    <hr/>
                    <h4 className={'o-font-title'}>Last news</h4>
                </OCol>
            </OContainer>
            { prev &&
            <OContainer p={p}>
                    
                        <OCol p={p} cols={{sm:2, md: 3, lgPush: 2, lg: 4}}>
                        <Link href={`/post/${prev.slug}`}>
                            <div className={`${p}__wrapper-image`}>
                                <Image 
                                    src={prev.featuredImage.node.link}
                                    alt={prev.featuredImage.node.altText}
                                    width={prev.featuredImage.node.mediaDetails.width}
                                    height={prev.featuredImage.node.mediaDetails.height}
                                ></Image>
                            </div>
                        </Link>
                        </OCol>
                        <OCol p={p} cols={{sm:2, md: 3, lg: 6}}>
                        <Link href={`/post/${prev.slug}`}>
                            <div className={`${p}__post`}>
                                <div className={`${p}__wrapper-categories`}>
                                    <ul>
                                        {prev.categories.edges.map( e => {
                                            return(
                                                <li key={e.node.name}>{e.node.name}</li>
                                                    )  
                                                })}
                                    </ul>
                                </div>
                                <h2>{prev.title}</h2>
                                <div className={`${p}__wrapper-date`}>
                                    <Date dateString={prev.dateGmt}></Date>
                                </div>
                            </div>
                        </Link>
                        </OCol>
                    
                </OContainer>
            }
            { next &&
            <OContainer p={p}>
                    
            <OCol p={p} cols={{sm:2, md: 3, lgPush: 2, lg: 4}}>
            <Link href={`/post/${next.slug}`}>
                <div className={`${p}__wrapper-image`}>
                    <Image 
                        src={next.featuredImage.node.link}
                        alt={next.featuredImage.node.altText}
                        width={next.featuredImage.node.mediaDetails.width}
                        height={next.featuredImage.node.mediaDetails.height}
                    ></Image>
                </div>
            </Link>
            </OCol>
            <OCol p={p} cols={{sm:2, md: 3, lg: 6}}>
            <Link href={`/post/${next.slug}`}>
                <div className={`${p}__post`}>
                    <div className={`${p}__wrapper-categories`}>
                        <ul>
                            {next.categories.edges.map( r => {
                                return(
                                    <li key={r.node.name}>{r.node.name}</li>
                                        )  
                                    })}
                        </ul>
                    </div>
                    <h2>{next.title}</h2>
                    <div className={`${p}__wrapper-date`}>
                        <Date dateString={next.dateGmt}></Date>
                    </div>
                </div>
            </Link>
            </OCol>
        
    </OContainer>
            }
        </div>
    )

}
export default CPrevNext

