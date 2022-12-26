import React from "react"
import Head from "next/head";
import OCol from "../bemit/07-objects/o-col/o-col.js"
import OContainer from "../bemit/07-objects/o-container/o-container.js"
import BLayout from "../bemit/08-blocks/b-layout/b-layout.js"
import CContactForm from "../bemit/09-components/c-contact-form/c-contact-form.js"

const Contact = ({id, dataContact}) =>{

  const p = 'b-contact';
  const dat = dataContact.bContact.bContactContactInfo
  const cPhoneTitle = dat.bContactPhone.bContactTitle
  const cAddressTitle = dat.bContactAddress.bContactTitle
  const cEmailTitle = dat.bContactEmail.bContactTitle
  const cSocialTitle = dat.bContactSocial.bContactTitle
  
  const liPhone   =  [dat.bContactPhone.bContactItems.map( (re) => (
                        <li key={'g'} className={'o-font-text-slugs'} >{re.bContactIte}</li>))]

  const listAddress   =  [dat.bContactAddress.bContactItems.map( (yy) => (
                        <li key={yy.id} className={'o-font-text-slugs'}  dangerouslySetInnerHTML={{__html: yy.bContactItem}}></li>))]

  const listEmail   =  [dat.bContactEmail.bContactItems.map( (u) => (
                    <li key={u.id} className={'o-font-text-slugs'} >{u.bContactItem}</li>))]

  const listSocial   =  [dat.bContactSocial.bContactItems.map( (a) => (
                    <li key={a.id} className={'o-font-text-slugs'} >{a.bContactItem}</li>))]
                    
  return(
    <BLayout>
      <Head>
        <title>{dataContact.seo.title}</title>
        <meta property="og:title" content={dataContact.seo.title} key="title" />
        <meta name="description" content={dataContact.seo.opengraphDescription}/>
        <meta name="keywords" content={dataContact.seo.metaKeywords}/>
      </Head>
      <div className={`${p}`} >
        <OContainer p={p}>
            <OCol p={p} cols={{lg:10, lgPush:1}}>
                <div className={`${p}__wrapper-title`}>
                    <h2 className={'o-font-title-home'}>{dataContact.bContact.bContactTitle}</h2>
                </div>
            </OCol>
            <OCol p={p} cols={{lgPush:1, lg:4}}>
                <div className={`${p}__wrapper-text`}>
                    <p dangerouslySetInnerHTML={{__html: dataContact.bContact.bContactText}}></p>
                </div>
            </OCol>
        </OContainer>
        <OContainer p={p}>
            <OCol p={p} cols={{lgPush: 1, lg:3}}>
                <div className={`${p}__wrapper`}>
                    <div >{cPhoneTitle}</div>
                    <ul>{liPhone}</ul>
                </div>
                <div className={`${p}__wrapper`}>
                    <div >{cAddressTitle}</div>
                    <ul>{listAddress}</ul>
                </div>
                <div className={`${p}__wrapper`}>
                    <div >{cEmailTitle}</div>
                    <ul>{listEmail}</ul>
                </div>
                <div className={`${p}__wrapper`}>
                    <div >{cSocialTitle}</div>
                    <ul>{listSocial}</ul>
                </div>
            </OCol>
            <OCol p={p} cols={{lg:7}}>
                <CContactForm></CContactForm>
            </OCol>
        </OContainer>
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
            query contact {
                page(id: "25", idType: DATABASE_ID) {
                  bContact {
                    bContactTitle
                    bContactText
                    bContactSubtitle
                    bContactContactInfo {
                        bContactPhone {
                          bContactTitle
                          bContactItems {
                            bContactIte
                          }
                        }
                        bContactAddress {
                          bContactTitle
                          bContactItems {
                            bContactItem
                            id
                          }
                        }
                        bContactEmail {
                          bContactTitle
                          bContactItems {
                            bContactItem
                            id
                          }
                        }
                        bContactSocial {
                          bContactTitle
                          bContactItems {
                            bContactItem
                            bContactSlug
                            id
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
          dataContact: json.data.page
      },
    }
  
  }
  export default Contact