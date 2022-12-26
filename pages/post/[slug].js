import React  from 'react'
import Head from "next/head";
import BLayout from "../../bemit/08-blocks/b-layout/b-layout.js"
import CHeadBlog from "../../bemit/09-components/c-head-blog/c-head-blog.js"
import CContentBlog from "../../bemit/09-components/c-content-blog/c-content-blog.js"
import CPrevNext from "../../bemit/09-components/c-prev-next/c-prev-next.js"
import CContactForm from "../../bemit/09-components/c-contact-form/c-contact-form.js"
import OContainer from '../../bemit/07-objects/o-container/o-container.js';
import OCol from '../../bemit/07-objects/o-col/o-col.js';
import Link from 'next/link.js';
const Project = ({posts, rel}) => {
    const p = 'b-project';

    const datePost = posts.date;

    console.log(rel);
    return (
      <BLayout>
        <Head>
                <title>{posts.seo.title}</title>
                <meta property="og:title" content={posts.seo.title} key="title" />
                <meta name="description" content={posts.seo.opengraphDescription}/>
                <meta name="keywords" content={posts.seo.metaKeywords}/>
        </Head>
        <div className={`${p}`}>
          <div className={`${p}__block1`}>
            <CHeadBlog posts={posts}></CHeadBlog>
          </div>

          <div className={`${p}__block2`}>
            <CContentBlog posts={posts}></CContentBlog>
          </div>
          <div className={`${p}__block4`}>
          <OContainer p={p}>
              <OCol p={p} cols={{lgPush:2, lg:8}}><CContactForm></CContactForm></OCol>
            </OContainer>
          </div>
          <div className={`${p}__block3`}>
            <CPrevNext 
              prev={posts.previous}
              next={posts.next}
            ></CPrevNext>
          </div>
          <div className={`${p}__block5`}>
          <OContainer p={p} extraClasses={`o-container--no-padding`}>
          <OCol extraClasses={'o-col--no-padding'} cols={{sm: 4, md: 6, lg: 12}}>
            <div className={`${p}__wrapper`}>
              <h4 className={'o-font-title-home'}>Simpello Newsroom</h4>
                <p>Find out all the news and updates from Simpello.</p>
                  <button className={'button-black'}><Link href={`#`}>Read more</Link></button>
            </div>
            </OCol>
          </OContainer>
          </div>

        </div>

        </BLayout>
      );
  
  }

// This function gets called at build time
export async function getStaticProps(context) {

    const res = await fetch(`${process.env.REST_API}/graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                query SingleProject($id: ID!, $idType: PostIdType!) {
                  post(id: $id, idType: $idType) {
                          next {
                            slug
                            title
                            dateGmt
                            categories {
                              edges {
                                node {
                                  name
                                }
                              }
                            }
                            featuredImage {
                              node {
                                altText
                                link
                                mediaDetails {
                                  width
                                  height
                                }
                              }
                            }
                          }
                          previous {
                            slug
                            title
                            dateGmt
                            categories {
                              edges {
                                node {
                                  name
                                }
                              }
                            }
                            featuredImage {
                              node {
                                altText
                                link
                                mediaDetails {
                                  height
                                  width
                                }
                              }
                            }
                          }
                        categories {
                          edges {
                            node {
                              name
                              link
                            }
                          }
                        }
                        date
                        content
                        id
                        slug
                        title
                        excerpt
                        featuredImage {
                          node {
                            altText
                            link
                            mediaDetails {
                              height
                              width
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
            variables: {
                id: context.params.slug,
                idType: 'SLUG'
            }
        })
    })

    const json = await res.json()

    return {
        props: {
            posts: json.data.post
        },
    }

    

}

export async function getStaticPaths() {

    const res = await fetch(`${process.env.REST_API}/graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query proyectos {
                posts {
                  edges {
                    node {
                      slug
                      title(format: RENDERED)
                      content
                      excerpt
                      categories {
                        edges {
                          node {
                            name
                            slug
                          }
                        }
                      }
                      featuredImage {
                        node {
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
                }
              }
        `})
    })

    const json = await res.json()
    const rel = json.data.posts.edges;

    const paths = rel.map((post) => ({
        params: { slug: post.node.slug, 
        },
    }))

    return { paths, fallback: false }

}

export default Project