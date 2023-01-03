import React from "react"
import Head from "next/head";
import Image from "next/image.js";
import OCol from "../bemit/07-objects/o-col/o-col.js"
import OContainer from "../bemit/07-objects/o-container/o-container.js"
import BLayout from "../bemit/08-blocks/b-layout/b-layout.js"
import CVideoLayout from "../bemit/09-components/c-video-layout/c-video.js"
import CTitleText from "../bemit/09-components/c-title-text/c-title-text.js"
import CInfoText from "../bemit/09-components/c-info-text/c-info-text.js"
import CSlider from "../bemit/09-components/c-slider/c-slider.js"
import Link from "next/link.js";
import CBundle from '../bemit/08-blocks/b-bundle/b-bundle.js'

const Home = ({dataHome}) =>{

  const p = 'b-home';

  const availableList = dataHome.bHome.bHomeBlockTwo.bHomeAvailable.bHomeItems.map((e) => (
		<li key={e.bHomeItem.id} className={`o-font-text-slugs`}>
			<div className={`${p}__wrapper-menu-item`}>
				<div className={`${p}__item-menu`}>
          <Image
            src={e.bHomeItem.link}
            alt={e.bHomeItem.altText}
            width={e.bHomeItem.mediaDetails.width}
            height={e.bHomeItem.mediaDetails.height}
            />
        </div>
			</div>
		</li>
	))
  return(

    <BLayout>
      <Head>
        <title>{dataHome.seo.title}</title>
        <meta property="og:title" content={dataHome.seo.title} key="title" />
        <meta name="description" content={dataHome.seo.opengraphDescription}/>
        <meta name="keywords" content={dataHome.seo.metaKeywords}/>
      </Head>
      <div className={`${p}`}>
       <CBundle/>
        <div className={`${p}__block1`}>
        <CVideoLayout 
        dataTitleVideo={dataHome.bHome.bHomeBlockOne.bHomeTitle}
        dataSrcVideo={"/simpello-video.mp4"}
        posterVideo={dataHome.bHome.bHomeBlockOne.poster.link}
        />
        </div>

        <div className={`${p}__block2 cursor-about`}>
          <div className={`${p}__wrapper`}>
          
            <OContainer p={p}>
              <OCol p={p} cols={{sm:4, md:6, lg:12}}>
                <h3 className={`o-font-title-home`} dangerouslySetInnerHTML={{__html: dataHome.bHome.bHomeBlockTwo.bHomeTitle}}></h3>
              </OCol>
              <OCol p={p} cols={{sm:4, md:6, lg:12}}>
              <div className={`${p}__wrapper-list-available`}>
              <div className={`${p}__wrapper-menu-item`}><div className={`${p}__item-menu`}><div className={`${p}__title-available`}>{dataHome.bHome.bHomeBlockTwo.bHomeAvailable.bHomeTitle}</div></div></div>
                <ul>
                {availableList}
                </ul>
              </div>
              </OCol>
            </OContainer>
            <CTitleText
            dataItem={dataHome.bHome.bHomeBlockTwo.bHomeListItems}>
            </CTitleText>
  
          </div>
          
        </div>

        <div className={`${p}__block3`}>
          <OContainer P={p}>
            <OCol p={p} cols={{ sm: 4, md: 6, lg:12}}>
                <div className={`${p}__wrapper`}>
                  <h3 className={`o-font-title-home`} dangerouslySetInnerHTML={{__html: dataHome.bHome.bHomeBlockThree.bHomeTitle}}></h3>
                  <button className={'button-black'} type="text"><Link href={dataHome.bHome.bHomeBlockThree.bHomeButtonSlug}>{dataHome.bHome.bHomeBlockThree.bHomeButtonText}</Link></button>
                </div>
            </OCol>
          </OContainer>
        </div>
      <div className={`${p}__block4 cursor-drag`}>
        <CSlider dataSlide={dataHome.bHome.bHomeBlockFour.bHomeSlider}></CSlider>
      </div>

      <div className={`${p}__block5`}>
        <CInfoText
                dTitle={dataHome.bHome.bHomeBlockFive.bHomeTitle}
                dContent={dataHome.bHome.bHomeBlockFive.bHomeText}
                dTextButton={dataHome.bHome.bHomeBlockFive.bHomeButtonText}
                dSlugButton={dataHome.bHome.bHomeBlockFive.bHomeButtonSlug}
        >
        </CInfoText>
        </div>
        <div className={`${p}__block6`} style={{background: `url(${dataHome.bHome.bHomeBlockSix.bHomeBackgroundImage.link})`}}>
          <OContainer p={p} >
            <OCol p={p} cols={{sm: 4, md: 6, lg: 10}}>
              <h3 className={'o-font-title-home'}>{dataHome.bHome.bHomeBlockSix.bHomeText}</h3>
                <div className={'button-simple black'}>
                            <div className={`wrapper-btn-proyectos`}>
                              <span><Link href={dataHome.bHome.bHomeBlockSix.bHomeButtonSlug}>{dataHome.bHome.bHomeBlockSix.bHomeButtonText}</Link></span>
                            </div>
                            <span className={`btn-circle`}>
                              <span className={`arrow`}></span>
                            </span>
                </div>
              <div className={`${p}__wrapper-img-float`}>
                <span>
                  <Image
                    src={dataHome.bHome.bHomeBlockSix.bHomeFloatImage.link}
                    alt={dataHome.bHome.bHomeBlockSix.bHomeFloatImage.altText}
                    height={dataHome.bHome.bHomeBlockSix.bHomeFloatImage.mediaDetails.height}
                    width={dataHome.bHome.bHomeBlockSix.bHomeFloatImage.mediaDetails.width}
                  />
                </span>
              </div>
            </OCol>
          </OContainer>
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
                  query home {
                    page(id: "13", idType: DATABASE_ID) {
                      bHome {
                        bHomeBlockOne {
                          bHomeVideo {
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
                          bHomeTitle
                        }
                        bHomeBlockTwo {
                          bHomeTitle
                          bHomeListItems {
                            bHomeTitle
                            bHomeText
                            bHomeSettings {
                              bHomeSm
                              bHomeMd
                              bHomeLg
                            }
                          }
                          bHomeAvailable {
                            bHomeTitle
                            bHomeItems {
                              bHomeItem {
                                id
                                altText
                                link
                                mediaDetails {
                                  height
                                  width
                                }
                              }
                            }
                          }
                        }
                        bHomeBlockThree {
                          bHomeTitle
                          bHomeButtonText
                          bHomeButtonSlug
                        }
                        bHomeBlockFour {
                          bHomeSlider {
                            bHomeTitle
                            bHomeText
                            bHomeTag
                            bHomeButtonText
                            bHomeButtonSlug
                            bHomeImage {
                              altText
                              link
                              mediaDetails {
                                width
                                height
                              }
                            }
                          }
                        }
                        bHomeBlockFive {
                          bHomeText
                          bHomeTitle
                          bHomeButtonText
                          bHomeButtonSlug
                        }
                        bHomeBlockSix {
                          bHomeText
                          bHomeButtonText
                          bHomeButtonSlug
                          bHomeBackgroundImage {
                            altText
                            link
                            mediaDetails {
                              height
                              width
                            }
                          }
                          bHomeFloatImage {
                            altText
                            link
                            mediaDetails {
                              width
                              height
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
        dataHome: json.data.page
    },
  }

}
export default Home