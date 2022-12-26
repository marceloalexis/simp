import React from "react"
import Head from "next/head";
import CPosts from "../bemit/09-components/c-posts/c-posts.js"
import CPostsFeatured from "../bemit/09-components/c-posts-featured/c-posts-featured.js"
import BLayout from "../bemit/08-blocks/b-layout/b-layout.js"
import CBundle from '../bemit/08-blocks/b-bundle/b-bundle.js'

const Blog = ({posts, blog}) =>{

  const p = 'b-blog';
  
  return(
    <BLayout>
      <Head>
              <title>{blog.seo.title}</title>
              <meta property="og:title" content={blog.seo.title} key="title" />
              <meta name="description" content={blog.seo.opengraphDescription}/>
              <meta name="keywords" content={blog.seo.metaKeywords}/>
      </Head>
      <div className={`${p}`} >
      <CBundle></CBundle>
      <CPostsFeatured data={posts}></CPostsFeatured>
      <CPosts posts={posts}></CPosts>


        </div>

    </BLayout>
  );

}

export async function getStaticProps(){

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
                  title
                  content
                  excerpt
                  date
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
            page(id: "22", idType: DATABASE_ID) {
              slug
              title
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
        posts: json.data.posts,
        blog: json.data.page
    },
  }

}
export default Blog