import React from "react"
import Head from "next/head";
import OCol from "../bemit/07-objects/o-col/o-col.js"
import OContainer from "../bemit/07-objects/o-container/o-container.js"
import BLayout from "../bemit/08-blocks/b-layout/b-layout.js"

const Inquiries = ({dataInquiries}) => {
    const p = 'b-inquiries'
        return(
            <BLayout>
                <Head>
                    <title>{dataInquiries.seo.title}</title>
                    <meta property="og:title" content={dataInquiries.seo.title} key="title" />
                    <meta name="description" content={dataInquiries.seo.opengraphDescription}/>
                    <meta name="keywords" content={dataInquiries.seo.metaKeywords}/>
                </Head>
                <div className={`${p}`} data-scroll-section style={{background: `url(${dataInquiries.bSupport.bSupportBackground.link})`}}>
                    <OContainer p={p} extraClasses={`${p}__content`}>
                        <OCol p={p} cols={{lg:7}}>
                            <div className={`${p}__wrapper`}>
                                <h2 className={'o-font-title-home'}>{dataInquiries.bSupport.bSupportTitle}</h2>
                                <p dangerouslySetInnerHTML={{__html: dataInquiries.bSupport.bSupportText}}></p>
                            </div>
                        </OCol>
                    </OContainer>
                    <OContainer p={p} extraClasses={`${p}__contact`}>
                        {
                            dataInquiries.bSupport.bSupportBlock.bSupportCols.map((e) =>{
                                const cTitle = e.bSupportTitle
                                const cText = e.bSupportText
                                const cSM = e.bSupportSettings.bSupportSm
                                const cMD = e.bSupportSettings.bSupportMd
                                const cLG = e.bSupportSettings.bSupportLg
                                return(
                                    <OCol key={cTitle} p={p} cols={{sm: cSM, md: cMD, lg: cLG}}>
                                        <div className={`${p}__wrapper`}>
                                            <h5 className={'o-font-text-services'}>{cTitle}</h5>
                                            <ul>
                                                <li dangerouslySetInnerHTML={{__html: cText}}></li>
                                            </ul>
                                        </div>
                                    </OCol>
                                )
                            })
                        }

                    </OContainer>
                </div>
            </BLayout>
        )

}
export default Inquiries

export async function getStaticProps(){

    const res = await fetch(`${process.env.REST_API}/graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query Inquiries {
                page(id: "28", idType: DATABASE_ID) {
                  bSupport {
                    bSupportTitle
                    bSupportText
                    bSupportBackground {
                      altText
                      link
                      mediaDetails {
                        height
                        width
                      }
                    }
                    bSupportImage {
                      altText
                      link
                      mediaDetails {
                        width
                        height
                      }
                    }
                    bSupportBlock {
                      bSupportCols {
                        bSupportTitle
                        bSupportText
                        bSupportSettings {
                          bSupportSm
                          bSupportMd
                          bSupportLg
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
          dataInquiries: json.data.page
      },
    }
  
  }