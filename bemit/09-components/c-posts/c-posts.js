import React from "react"
import Image from 'next/image'
import Link from 'next/link'
import OContainer from "../../07-objects/o-container/o-container.js"
import OCol from "../../07-objects/o-col/o-col.js"
import Date from '../c-date/c-date.js'
import CBundle from '../../08-blocks/b-bundle/b-bundle.js'
const Cposts = ({ posts }) => {

	const p = 'c-post';

    const postsArray = Object.values(posts.edges);
    const featuredPosts = postsArray.filter(post => post.node.categories.edges[0].node.name != 'Featured');

	return (

		<OContainer p={p} extraClasses={`${p}__loop-posts`}>
            <CBundle></CBundle>
                {
                featuredPosts.map( post => {
                  
                  const src = post.node.featuredImage.node.link;
                  const width = post.node.featuredImage.node.mediaDetails.width;
                  const height = post.node.featuredImage.node.mediaDetails.height;
                  const alt =  post.node.featuredImage.node.altText;
                  const excerpt = post.node.excerpt
                  const datePost = post.node.date;
                  return(
                              <OCol p={p} cols={{sm:4,lg:6}} key={post.node.slug}>
                                <div className={`${p}__wrapper-post`}>
                                            <div >

                                          <div
                                            className={`${p}__slide`}
                                            >

                                            <div className={`${p}__slide-content cursor-go-d`}>
                                              <Link href={`/post/${post.node.slug}`}>
                                              <div className={`${p}__slide-box-image `}>
                                                    <div className={`${p}__slide-wrapper-image | js-${p}__slide-wrapper-image`}>
                                                      <Image className={`${p}__slide-image`} src={src} height={height} width={width} alt={alt}/>
                                                    </div>
                                              </div>
                                              <div className={`${p}__wrapper-date`}>
                                                  <span className={`${p}__date`}>
                                                  <Date dateString={datePost} />
                                                  </span>
                                              </div>
                                              <div className={`${p}__slide-wrapper-title`}>
                                                <h3 className={`${p}__slide-title | o-font-title-post | js-${p}__slide-title`}>{post.node.title}</h3>
                                              </div>

                                              <div className={`${p}__wrapper-excerpt`}>
                                                <div dangerouslySetInnerHTML={{__html: excerpt}}></div>
                                              </div>

                                                <button className={'button-simple'}>
                                                  <div className={`wrapper-btn-proyectos`}><span>Read more</span></div>
                                                  <span className={`btn-circle`}>
                                                    <span className={`arrow`}></span>
                                                  </span>
                                                </button>
                                              </Link>
                                            </div>
                                            
                                          </div>
                                  </div>
                                </div>
                              </OCol>
                            )
                })
        }
      </OContainer>


		)


}

export default Cposts