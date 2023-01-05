import React from "react"
import Head from "next/head";
import OCol from "../bemit/07-objects/o-col/o-col.js"
import OContainer from "../bemit/07-objects/o-container/o-container.js"
import BLayout from "../bemit/08-blocks/b-layout/b-layout.js"
import CVideoLayout from "../bemit/09-components/c-video-layout/c-video.js"
import CItemKit from "../bemit/09-components/c-item-kit/c-item-kit.js"
import CInfoText from "../bemit/09-components/c-info-text/c-info-text.js"
import Link from "next/link.js";
import Image from "next/image.js";

const Solution = ({dataSolution}) => {

const p = 'b-solution'

    return(
        <BLayout>
            <Head>
                <title>{dataSolution.seo.title}</title>
                <meta property="og:title" content={dataSolution.seo.title} key="title" />
                <meta name="description" content={dataSolution.seo.opengraphDescription}/>
                <meta name="keywords" content={dataSolution.seo.metaKeywords}/>
            </Head>
            <div className={`${p}`} >
                <div className={`${p}_bloc`} data-scroll-section>
                <CVideoLayout
                    dataTitleVideo={dataSolution.bSolution.bSolutionBlockOne.bSolutionTitle}
                    dataSrcVideo={"/solution-video.mp4"}
                    posterVideo={dataSolution.bSolution.bSolutionBlockOne.poster.link}>
                </CVideoLayout>
                </div>
                <div className={`${p}__block1`} data-scroll-section>
                  <OContainer p={p}>
                    <OCol p={p} cols={{lg:12}}>
                      <div className={`${p}__wrapper`}>
                        <div className={'o-font-text'} dangerouslySetInnerHTML={{__html: dataSolution.bSolution.bSolutionBlockOne.bSolutionText}}>
                        </div>
                      </div>
                    </OCol>
                  </OContainer>
                </div>
                <div className={`${p}__block2`} data-scroll-section>
                  <OContainer p={p} extraClasses={`o-container--no-padding`}>
                    <OCol p={p} extraClasses={`o-col--no-padding`} cols={{lg: 4}}>
                      <div className={`${p}__wrapper image-wr`}>
                          <Image data-scroll data-scroll-speed={'-4'}
                            src={dataSolution.bSolution.bSolutionBlockTwo.bSolutionImage.link}
                            alt={dataSolution.bSolution.bSolutionBlockTwo.bSolutionImage.altText}
                            width={dataSolution.bSolution.bSolutionBlockTwo.bSolutionImage.mediaDetails.width}
                            height={dataSolution.bSolution.bSolutionBlockTwo.bSolutionImage.mediaDetails.height}
                            >
                          </Image>
                      </div>    
                    </OCol>
                    <OCol p={p} extraClasses={`o-col--no-padding item2`} cols={{lg: 8}}>
                      <div className={`${p}__wrapper`}>
                        <h3 className={'o-font-title-home'} dangerouslySetInnerHTML={{__html: dataSolution.bSolution.bSolutionBlockTwo.bSolutionTitle}}></h3>
                        <div className={'o-font-text'} dangerouslySetInnerHTML={{__html: dataSolution.bSolution.bSolutionBlockTwo.bSolutionText}}></div>
                        
                        
                        <div className={'button-simple black'}>
                            <div className={`wrapper-btn-proyectos`}>
                              <div><Link href={dataSolution.bSolution.bSolutionBlockTwo.bSolutionButtonSlug}>
                                {dataSolution.bSolution.bSolutionBlockTwo.bSolutionButtonText}</Link></div>
                            </div>
                            <span className={`btn-circle`}>
                              <span className={`arrow`}></span>
                            </span>
                        </div>
                        
                      </div>
                    </OCol>
                  </OContainer>
                </div>
                <div className={`${p}__block3`} data-scroll-section>
                  <OContainer p={p}>
                    <OCol p={p} cols={{lg:6}}>
                      <div className={`${p}__wrapper`}>
                        <h3 className={'o-font-title-home'}>{dataSolution.bSolution.bSolutionBlockThree.bSolutionTitle}</h3>
                        <p className={`${p}__title `}>{dataSolution.bSolution.bSolutionBlockThree.bSolutionText}</p>
                      </div>
                    </OCol>
                  </OContainer>
                  <OContainer>
                    <OCol cols={{lgPush: 1, lg: 10 }}>
                      <CItemKit dataItemKit={dataSolution.bSolution.bSolutionBlockThree.bSolutionItems}/>
                    </OCol>
                  </OContainer>
                </div>

                <div data-scroll-section>
                <CInfoText
                  dTitle={dataSolution.bSolution.bSolutionBlockFour.bSolutionTitle}
                  dContent={dataSolution.bSolution.bSolutionBlockFour.bSolutionText}
                  dTextButton={dataSolution.bSolution.bSolutionBlockFour.bSolutionButtonText}
                  dSlugButton={dataSolution.bSolution.bSolutionBlockFour.bSolutionButtonSlug}
                >
                </CInfoText>
                </div>
            </div>
        </BLayout>
    )
}

export async function getStaticProps(){

    const res = await fetch(`${process.env.REST_API}/graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query solution {
                page(id: "16", idType: DATABASE_ID) {
                  bSolution {
                    bSolutionBlockOne {
                      bSolutionTitle
                      bSolutionText
                      bSolutionVideo {
                        altText
                        link
                      }
                      poster {
                        altText
                        link
                        mediaDetails {
                          width
                          height
                        }
                      }
                    }
                    bSolutionBlockTwo {
                      bSolutionTitle
                      bSolutionText
                      bSolutionButtonText
                      bSolutionButtonSlug
                      bSolutionImage {
                        altText
                        link
                        mediaDetails {
                          height
                          width
                        }
                      }
                    }
                    bSolutionBlockThree {
                      bSolutionTitle
                      bSolutionText
                      bSolutionTitleKits
                      bSolutionItems {
                        bSolutionTitle
                        bSolutionText
                        bSolutionSlug
                        bSolutionImage {
                          altText
                          link
                          mediaDetails {
                            height
                            width
                          }
                        }
                      }
                    }
                    bSolutionBlockFour {
                      bSolutionTitle
                      bSolutionText
                      bSolutionButtonText
                      bSolutionButtonSlug
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
          dataSolution: json.data.page
      },
    }
  
  }

export default Solution

