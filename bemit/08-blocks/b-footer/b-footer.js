import React, { useContext } from "react"
import OContainer from "../../07-objects/o-container/o-container.js"
import OCol from "../../07-objects/o-col/o-col.js"
import Link from "next/link"
import { MainContext } from "../../../contexts/Main.context.js"

const BFooter = () => {

	const p = 'b-footer';
	const {globalData} = useContext(MainContext);
	const logoImgLink = globalData.logo_footer.url
	const creditsTitle = globalData.credits.line1
	const creditsPartners = globalData.credits.line2
	const copy = globalData.copyright
	const availableTitle = globalData.available_footer.title

	const availableList = [globalData.available_footer.icons.map((a) => (
		<li key={a.icon.id} className={`o-font-text-slugs`}>
			<div className={`${p}__wrapper-menu-item`}>
				<div className={`${p}__item-menu`}><img src={a.icon.url}/></div>
			</div>
		</li>
	))]

	const block1List = [globalData.block_1.map( (a) => (
		<li key={a.slug} className={`o-font-text-detail-footer`}>
				<div className={`${p}__item-menu`}>
					<Link href={`${a.slug}`}>{a.title}</Link>
				</div>
		</li>
	))]

	const block2List = [globalData.block_2.map( (r) => (
		<li key={r.slug} className={`o-font-text-detail-footer`}>
				<div className={`${p}__item-menu`}>
					<Link href={`${r.slug}`}>{r.title}</Link>
				</div>
		</li>
	))]

	const block3List = [globalData.block_3.map( (e) => (
		<li key={e.slug} className={`o-font-text-detail-footer`}>
				<div className={`${p}__item-menu`}>
					<Link href={`${e.slug}`}>{e.title}</Link>
				</div>
		</li>
	))]

	return(
		<div className={`${p}`} data-scroll-section>
			<OContainer p={p}>
				<OCol p={p} cols={{sm: 4, lg: 2}}>
					<div className={`${p}__wrapper`}>
						<div className={`${p}__wrapper_logo`}>
						<Link href="/">
								<img src={`${logoImgLink}`} />
							</Link>
						</div>
						<div className={`${p}__wrapper_tagline`}>
						</div>
					</div>
				</OCol>
				<OCol p={p} cols={{sm: 2, xxl: 2, lgPush: 2, lgPush: 4}}>
					<div className={`${p}__wrapper_details`}>
						<div className={`${p}__wrapper_detail_content`}>
								<ul>
								{block1List}
								</ul>
						</div>
					</div>
				</OCol>
				<OCol p={p} cols={{sm: 2, lg: 2}}>
					<div className={`${p}__wrapper_details`}>
						<div className={`${p}__wrapper_detail_content`}>
								<ul>
									{block2List}
								</ul>
						</div>
					</div>
				</OCol>
				<OCol p={p} cols={{sm: 4, lg: 2}}>
					<div className={`${p}__wrapper_details`}>
						<div className={`${p}__wrapper_detail_content`}>
								<ul>
									{block3List}
								</ul>
						</div>
					</div>
				</OCol>
			</OContainer>
			<OContainer p={p} extraClasses={`${p}__legales`}>
				<OCol p={p} cols={{lg: 3}}>
					<div className={`${p}__wrapper_credits`}>
						<ul>
							<li>{creditsTitle}</li>
							<li>{creditsPartners}</li>
						</ul>
					</div>
				</OCol>
				<OCol p={p} cols={{lg: 3}}>
				<div className={`${p}__wrapper_available`}>
						<p>{availableTitle}</p>
						<ul>
							{availableList}
						</ul>
					</div>
				</OCol>
				<OCol p={p} cols={{lg: 6}}>
					<div className={`${p}__wrapper_legal`}>
						<div className={`${p}__wrapper_legal_content`}>
							<span>{copy}</span>
						</div>
					</div>
				</OCol>					
			</OContainer>
		</div>
		);

}
export default BFooter