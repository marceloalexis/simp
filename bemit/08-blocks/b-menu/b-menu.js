import React, { useContext } from "react"
import OContainer from "../../07-objects/o-container/o-container.js"
import OCol from "../../07-objects/o-col/o-col.js"
import Link from "next/link"
import { useRouter } from 'next/router';
import { MainContext } from "../../../contexts/Main.context.js"

const BMenu = () => {
	const p = 'b-menu';
	const router = useRouter();
	const {globalData} = useContext(MainContext);
	const {menuOpen, setMenuOpen } = useContext(MainContext);
	const closeMenu = () => {
		setMenuOpen(!menuOpen)
	}

	const addressList1 = globalData.address.line_one
	const addressList2 = globalData.address.line_two
	const titleSocial = globalData.social_media.title_sm
	const titleContact = globalData.contact_menu.title_contact
	const titleAvailable = globalData.available.title_contact

	const menuList = [globalData.menu_list.map( (a) => (
		<li key={a.item_menu.slug_item} className={`o-font-list-menu`}>
			<div className={`${p}__wrapper-menu-item`}>
				<div className={`${p}__item-menu`}>
					<Link className={router.pathname == `${a.item_menu.slug_item}` ? "menu-active" : ""} href={`${a.item_menu.slug_item}`} onClick={closeMenu}>{a.item_menu.text_item}</Link>
				</div>
			</div>
		</li>
	))]
	
	const menuList2 = [globalData.menu_list2.map( (a) => (
		<li key={a.item_menu.slug_item} className={`o-font-list-menu`}>
			<div className={`${p}__wrapper-menu-item`}>
				<div className={`${p}__item-menu`}>
					<Link className={router.pathname == `${a.item_menu.slug_item}` ? "menu-active" : ""} href={`${a.item_menu.slug_item}`} onClick={closeMenu}>{a.item_menu.text_item}</Link>
				</div>
			</div>
		</li>
	))]

	const socialList = [globalData.social_media.items_sm.map((e) => (
		<li key={e.title_sm} className={`o-font-text-slugs`}>
			<div className={`${p}__wrapper-menu-item`}>
				<div className={`${p}__item-menu`}>
					<Link href={`${e.url_sm}`}>{e.title_sm}</Link>
				</div>
			</div>
		</li>
	))]

	const contactList = [globalData.contact_menu.items_contact.map((y) => (
		<li key={y.title_con} className={`o-font-text-slugs`}>
			<div className={`${p}__wrapper-menu-item`}>
				<div className={`${p}__item-menu`}>
					<Link href={`${y.url_con}`}>{y.title_con}</Link>
				</div>
			</div>
		</li>
	))]

	const availableList = [globalData.available.items_available.map((r) => (
		<li key={r.icon_av.id} className={`o-font-text-slugs`}>
			<div className={`${p}__wrapper-menu-item`}>
				<div className={`${p}__item-menu`}><img src={r.icon_av.url}/></div>
			</div>
		</li>
	))]

	return(

		<div className={`${p}`}>
			<OContainer p={p} extraClasses={`${p}__block1`}>
				<OCol p={p} cols={{sm:4, lg: 4}}>
					<div className={`${p}__wrapper-list-menu`}>
						<ul>
							{menuList}
						</ul>
					</div>
				</OCol>
				<OCol p={p} cols={{sm:4, lg: 8}} extraClasses={`${p}__menulist2`}>
					<div className={`${p}__wrapper-list-menu`}>
						<ul>
							{menuList2}
						</ul>
					</div>
				</OCol>
			</OContainer>
		    <OContainer p={p} extraClasses={`${p}__block2`} >
				<OCol p={p} cols={{sm: 4, lg: 2}} extraClasses={`${p}__address`}>
					<div className={`${p}__wrapper-list-address`}>
						<ul>
							<li className={`o-font-text-slugs`}><div className={`${p}__wrapper-menu-item`}><div className={`${p}__item-menu`}>{addressList1}</div></div></li>
							<li className={`o-font-text-slugs`}><div className={`${p}__wrapper-menu-item`}><div className={`${p}__item-menu`}>{addressList2}</div></div></li>
						</ul>
					</div>
				</OCol>
				<OCol p={p} cols={{sm: 4, lg: 2}} extraClasses={`${p}__available`}>
					<div className={`${p}__wrapper-list-available`}>
					<div className={`${p}__wrapper-menu-item`}><div className={`${p}__item-menu`}><div className={`${p}__title-available`}>{titleAvailable}</div></div></div>
						<ul>
						{availableList}
						</ul>
					</div>
				</OCol>
				<OCol p={p} cols={{sm: 4, lg: 3}} extraClasses={`${p}__social`}>
					<div className={`${p}__wrapper-list-social`}>
					<div className={`${p}__wrapper-menu-item`}><div className={`${p}__item-menu`}><div className={`${p}__title-social`}>{titleSocial}</div></div></div>
						<ul>
							{socialList}
						</ul>
					</div>
				</OCol>
				<OCol p={p} cols={{sm: 4, lg: 5}} extraClasses={`${p}__contact`}>
					<div className={`${p}__wrapper-list-contact`}>
					<div className={`${p}__wrapper-menu-item`}><div className={`${p}__item-menu`}><div className={`${p}__title-contact`}>{titleContact}</div></div></div>
						<ul>
							{contactList}
						</ul>
					</div>
				</OCol>
			</OContainer>
		</div>

		);

};

export default BMenu