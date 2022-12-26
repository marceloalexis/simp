import React from "react"
import Image from 'next/image'
import Link from 'next/link'
import OContainer from "../../07-objects/o-container/o-container.js"
import OCol from "../../07-objects/o-col/o-col.js"
import Date from '../c-date/c-date.js'
import CShare from '../../09-components/c-share/c-share.js'

const CHeadBlog = ({ posts }) => {

	const p = 'c-head-blog';

	return (
    <div className={`${p}`}>
        <OContainer p={p}>
            <OCol p={p} cols={{sm:4, md:6, lgPush: 2, lg:8}}>
            <div className={`${p}__wrapper`}>
                <div className={`${p}__categories`}>
                    <ul>
                        {posts.categories.edges.map( (e) => (<li className={'o-font-text-slugs'} key={e.node.name}>{e.node.name}</li>))}
                    </ul>
                    </div>
                    <Date dateString={posts.date} />
                    <div className={`${p}__wrapper-title`}><h1 className={'o-font-title-post'}>{posts.title}</h1></div>
                    <div className={`${p}__wrapper-excerpt o-font-text-post`}><div dangerouslySetInnerHTML={{__html: posts.excerpt}}></div></div>
                    <div className={`${p}__wrapper-social-share`}>
                      <CShare link={posts.slug}></CShare>
                    </div>
                </div>                
            </OCol>
        </OContainer>
        <OContainer p={p} extraClasses={'o-container--no-padding'}>
              <OCol p={p} cols={{sm:4, md:6, lg:12}} extraClasses={'o-col--no-padding'}>
                <div className={`${p}__wrapper-image`}>
                  <Image priority
                  data-scroll data-scroll-speed={-4}
                    src={posts.featuredImage.node.link}
                    alt={posts.featuredImage.node.altText}
                    width={posts.featuredImage.node.mediaDetails.width}
                    height={0}
                  ></Image>
                </div>
              </OCol>
            </OContainer>
    </div>

    ) 

}

export default CHeadBlog