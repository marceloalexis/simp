import React from "react"
import Head from "next/head";
import OCol from "../bemit/07-objects/o-col/o-col.js"
import OContainer from "../bemit/07-objects/o-container/o-container.js"
import BLayout from "../bemit/08-blocks/b-layout/b-layout.js"
import CBlocks from "../bemit/09-components/c-blocks/c-blocks.js"
import Link from "next/link.js";
import Image from "next/image.js";

const Story = ({dataStory}) => {

const p = 'b-story'

    return(
        <BLayout>
        <Head>
            <title>{dataStory.seo.title}</title>
            <meta property="og:title" content={dataStory.seo.title} key="title" />
            <meta name="description" content={dataStory.seo.opengraphDescription}/>
            <meta name="keywords" content={dataStory.seo.metaKeywords}/>
        </Head>
        <div className={`${p}`} >
          <div className={`${p}__block1`} data-scroll-section style={{background: `url(${dataStory.bStory.bStoryBlockOne.bStoryImage.link})`}}>
            <div className={`${p}__overlay`}>   
              <OContainer p={p}>
                  <OCol p={p} cols={{lg:8}}>
                    <div className={`${p}__wrapper`}>
                      <h2 className={'o-font-title-home'}>{dataStory.bStory.bStoryBlockOne.bStoryTitle}</h2>
                      <p className={'o-font-text white-text'} dangerouslySetInnerHTML={{__html:dataStory.bStory.bStoryBlockOne.bStorySubtitle}}></p>
                    </div>
                  </OCol>
                </OContainer>
            </div> 
          </div>

          <div className={`${p}__block2`} data-scroll-section>
            <OContainer p={p}>
              <OCol p={p} cols={{lg:8}}>
                <div className={`${p}__wrapper`}>
                  <h3 className={'o-font-title-home'}>{dataStory.bStory.bStoryBlockTwo.bStoryTitle}</h3>
                  <div className={'o-font-text white-text'} dangerouslySetInnerHTML={{__html:dataStory.bStory.bStoryBlockTwo.bStoryText}}></div>
                </div>
              </OCol>
            </OContainer>
          </div>
        </div>

        <div className={`${p}__block3`} data-scroll-section>
          <CBlocks
           dataBlocks={dataStory.bStory.bStoryBlockThree.bStoryItems}     
          >
          </CBlocks>
        </div>

        <div className={`${p}__block4`} data-scroll-section style={{background: `url(${dataStory.bStory.bStoryBlockFour.bStoryImage.link})`}}>
           <div className={`${p}__overlay`}>   
                <OContainer p={p}>
                  <OCol p={p} cols={{lg:8, lgPush:2}}>
                    <div className={`${p}__wrapper`}>
                      <h2 className={'o-font-title-home'}>{dataStory.bStory.bStoryBlockFour.bStoryTitle}</h2>
                      <div className={'o-font-text white-text'} dangerouslySetInnerHTML={{__html:dataStory.bStory.bStoryBlockFour.bStoryText}}></div>
                    </div>
                  </OCol>
                </OContainer>
            </div> 
        </div>

        <div className={`${p}__block5`} data-scroll-section>
          <OContainer p={p} extraClasses={`o-container--no-padding ${p}__image`}>
            <OCol p={p} extraClasses={'o-col--no-padding'} cols={{lg:9}}>
              <div className={`${p}__wrapper`}>
                <Image
                src={dataStory.bStory.bStoryBlockFive.bStoryImage.link}
                alt={dataStory.bStory.bStoryBlockFive.bStoryImage.altText}
                width={dataStory.bStory.bStoryBlockFive.bStoryImage.mediaDetails.width}
                height={dataStory.bStory.bStoryBlockFive.bStoryImage.mediaDetails.height}
                data-scroll data-scroll-speed={-4}/>
              </div>
            </OCol>
          </OContainer>
          <OContainer p={p} extraClasses={`${p}__content`} >
            <OCol p={p} cols={{lg:8, lgPush: 2}}>
            <div className={`${p}__wrapper`}>
              <h3 className={'o-font-title-home'}>{dataStory.bStory.bStoryBlockFive.bStoryTitle}</h3>
              <div className={'o-font-text white-text'} dangerouslySetInnerHTML={{__html:dataStory.bStory.bStoryBlockFive.bStoryText}}></div>
            </div>
            </OCol>
          </OContainer>
        </div>

        <div className={`${p}__block6`} data-scroll-section>
          <OContainer p={p} extraClasses={`o-container--no-padding ${p}__image`}>
            <OCol p={p} extraClasses={'o-col--no-padding'} cols={{lg:9, lgPush: 3}}>
              <div className={`${p}__wrapper`}>
              <Image
                src={dataStory.bStory.bStoryBlockSix.bStoryImage.link}
                alt={dataStory.bStory.bStoryBlockSix.bStoryImage.altText}
                width={dataStory.bStory.bStoryBlockSix.bStoryImage.mediaDetails.width}
                height={dataStory.bStory.bStoryBlockSix.bStoryImage.mediaDetails.height}
                data-scroll data-scroll-speed={-4}/>
              </div>
            </OCol>
          </OContainer>
          <OContainer p={p} extraClasses={`${p}__content`}>
            <OCol p={p} cols={{lg:8, lgPush: 2}}>
            <div className={`${p}__wrapper`}>
              <h3 className={'o-font-title-home'}>{dataStory.bStory.bStoryBlockSix.bStoryTitle}</h3>
              <div className={'o-font-text white-text'} dangerouslySetInnerHTML={{__html:dataStory.bStory.bStoryBlockSix.bStoryText}}></div>
            </div>
            </OCol>
          </OContainer>
        </div>


        </BLayout>
    )

}

export default Story

export async function getStaticProps(){

    const res = await fetch(`${process.env.REST_API}/graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query story {
                page(id: "19", idType: DATABASE_ID) {
                  bStory {
                    bStoryBlockOne {
                      bStoryTitle
                      bStorySubtitle
                      bStoryImage {
                        altText
                        link
                        mediaDetails {
                          height
                          width
                        }
                      }
                    }
                    bStoryBlockTwo {
                      bStoryTitle
                      bStoryText
                    }
                    bStoryBlockThree {
                      bStoryItems {
                        bStoryTitle
                        bStoryText
                        bStoryTag
                        bStoryImage {
                          altText
                          link
                          mediaDetails {
                            height
                            width
                          }
                        }
                        bStoryDatascroll
                      }
                    }
                    bStoryBlockFour {
                      bStoryTitle
                      bStoryText
                      bStoryImage {
                        altText
                        link
                        mediaDetails {
                          width
                          height
                        }
                      }
                    }
                    bStoryBlockFive {
                      bStoryTitle
                      bStoryText
                      bStoryImage {
                        altText
                        link
                        mediaDetails {
                          height
                          width
                        }
                      }
                    }
                    bStoryBlockSix {
                      bStoryTitle
                      bStoryText
                      bStoryImage {
                        altText
                        link
                        mediaDetails {
                          height
                          width
                        }
                      }
                    }
                  }
                  seo {
                    opengraphUrl
                    opengraphTitle
                    opengraphSiteName
                    opengraphType
                    title
                    metaKeywords
                    opengraphDescription
                    canonical
                    twitterDescription
                    twitterTitle
                    twitterImage {
                      altText
                      link
                      mediaDetails {
                        height
                        width
                      }
                    }
                    opengraphImage {
                      altText
                      link
                    }
                  }
                }

              }
            `,
        })
    })
  
    const json = await res.json()
  
    return {
      props: {
          dataStory: json.data.page
      },
    }
  
  }