import React from "react"
import {FacebookShareButton, TwitterShareButton,LinkedinShareButton, WhatsappShareButton, } from "react-share";
import {FacebookIcon, TwitterIcon, LinkedinIcon, WhatsappIcon} from 'react-share'

const CShare = ({ link }) => {

	const p = 'c-share-social';

	return (
        <div className={`${p}`}>
                    <div className={`${p}__wrapper-social`}>
                        <FacebookShareButton url={`https://localhost:3000/post/${link}`}>
                            <FacebookIcon size={35} bgStyle={{'fill': '#ffffff'}} iconFillColor="black" round={false}></FacebookIcon>
                        </FacebookShareButton>
                        <TwitterShareButton url={`https://localhost:3000/post/${link}`}>
                            <TwitterIcon size={35} bgStyle={{'fill': '#ffffff'}} iconFillColor="black" round={false}></TwitterIcon>
                        </TwitterShareButton>
                        <LinkedinShareButton url={`https://localhost:3000/post/${link}`}>
                            <LinkedinIcon size={35} bgStyle={{'fill': '#ffffff'}} iconFillColor="black" round={false}></LinkedinIcon>
                        </LinkedinShareButton>
                        <WhatsappShareButton url={`https://localhost:3000/post/${link}`}>
                            <WhatsappIcon size={29} bgStyle={{'fill': '#ffffff'}} iconFillColor="black" round={false}></WhatsappIcon>
                        </WhatsappShareButton>
                    </div>
        </div>
    )
}

export default CShare