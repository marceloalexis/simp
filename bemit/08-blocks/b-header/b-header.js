import React, { useContext } from "react"
import OContainer from "../../07-objects/o-container/o-container.js"
import OCol from "../../07-objects/o-col/o-col.js"
import Link from "next/link"
import { MainContext } from "../../../contexts/Main.context.js"
const Bheader = () => {
		const p = 'b-header';
		const {globalData} = useContext(MainContext);
		const {menuOpen, setMenuOpen } = useContext(MainContext);
		const closeMenu = () => {
			setMenuOpen(!menuOpen)
		}
		const closeLogo = () => {
			setMenuOpen(menuOpen)
		}

		const buttons = [globalData.buttons_head.map((e) => (
			<span className={'o-font-text-button'} key={e.item_button.slug_button}><Link href=''>{e.item_button.title_button}</Link></span>
			))]
		const logoImgLink = globalData.logo.url

	return(

		<div className={`${p}`}>
			<OContainer p={p}>
				<OCol p={p} cols={{sm:1, lg: 2}} extraClasses={`${p}__col-logo`}>
					<div className={`${p}__wrapper`}>
						<div className={`${p}__wrapper_logo`}>
							<Link onClick={closeLogo} href="/">
								<img src={`${logoImgLink}`} />
							</Link>
						</div>
					</div>
				</OCol>
				<OCol p={p} cols={{sm:3, lg: 5, lgPush: 4}} extraClasses={`${p}__col-bar`}>
					<div className={`${p}__wrapper`}>
						<div className={`${p}__wrapper_button`}>
							<div className={`${p}__button`}>
								{buttons}
							</div>
						</div>
					</div>
					<button name="Menu botón" onClick={closeMenu} className={`${p}__wrapper-icon`}>
						<div className={`${p}__wrapper_menu`}>
							<span></span>
							<span></span>
						</div>
					</button>
				</OCol>				
			</OContainer>
		</div>

		);

};

export default Bheader