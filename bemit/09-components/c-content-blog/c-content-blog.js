import React from "react"
import OContainer from "../../07-objects/o-container/o-container.js"
import OCol from "../../07-objects/o-col/o-col.js"
import CShare from "../../09-components/c-share/c-share.js"
const CContentBlog = ({ posts }) => {

	const p = 'c-content-blog';
	return (
        <div className={`${p}`}>
            <OContainer p={p}>
                <OCol p={p} cols={{lgPush:2, lg:8}}>
                    <div dangerouslySetInnerHTML={{ __html: posts.content}} />
                </OCol>
                <OCol p={p} cols={{lgPush:2, lg:8}}>
                    <div className={`${p}__wrapper`}>
                        <h3 className={`o-font-text-quote`}>Share article</h3>
                        <CShare link={posts.slug}></CShare>
                    </div>
                </OCol>
            </OContainer>
        </div>
    )
}
export default CContentBlog