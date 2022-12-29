import React from "react"
import Head from "next/head";
import OCol from "../bemit/07-objects/o-col/o-col.js"
import OContainer from "../bemit/07-objects/o-container/o-container.js"
import BLayout from "../bemit/08-blocks/b-layout/b-layout.js"
import CContactForm from "../bemit/09-components/c-contact-form/c-contact-form.js"

const Request = ({ dataRequest }) =>{

    const p = 'b-request';

    return(
      <BLayout>
        <Head>
          <title>{dataRequest.seo.title}</title>
          <meta property="og:title" content={dataRequest.seo.title} key="title" />
          <meta name="description" content={dataRequest.seo.opengraphDescription}/>
          <meta name="keywords" content={dataRequest.seo.metaKeywords}/>
        </Head>
        <div className={`${p}`} >
          <OContainer p={p}>
              <OCol p={p} cols={{lg:10, lgPush:1}}>
                  <div className={`${p}__wrapper-title`}>
                      <h2 className={'o-font-title-home'}>{dataRequest.bRequest.bRequestTitle}</h2>
                  </div>
              </OCol>
          </OContainer>
          <OContainer p={p}>
              <OCol p={p} cols={{lgPush: 1, lg:3}}>
                  <div className={`${p}__wrapper`}>
                    { dataRequest.bRequest.bRequestContactInfo.map( (e) => {
                        return(
                          <div key={e.id} className={`${p}__content`}>
                            <span>{e.id}</span>
                            <h3 className={'o-font-text-slugs'}>{e.title}</h3>
                            <p>{e.text}</p>
                          </div>
                        )
                        })}
                  </div>
              </OCol>
              <OCol p={p} cols={{lg:7}}>
                  <CContactForm 
                    portalId={'23649077'}
                    formId={'77b85bf1-9476-4cac-9f25-dcf8430d25b1'}
                  />
              </OCol>
          </OContainer>
        </div>
      </BLayout>
  
    )
  
  }
export default Request

export async function getStaticProps(){

    const res = await fetch(`${process.env.REST_API}/graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query request {
                page(id: "342", idType: DATABASE_ID) {
                  bRequest {
                    bRequestTitle
                    bRequestContactInfo {
                      id
                      text
                      title
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
          dataRequest: json.data.page
      },
    }
  
  }