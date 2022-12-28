import React, { createContext, useState, useEffect, useContext } from 'react'
import debounce from '../utils/debounce';
export const MainContext = createContext()

export const MainProvider = ({ globalData, children }) => {

	const [menuOpen, setMenuOpen ] = useState(false);
	const [allFontsLoaded, setAllFontsLoaded] = useState(false);
	const isMenuOpenClass = 'is-menu-open';
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined
	});


	const [scrollInstance, setScrollInstance] = useState(null);

	useEffect(() => {

		document.fonts.ready.then(function(){
			setAllFontsLoaded(true);
		});
	}, []);

	useEffect(() => {
		const handleResize = () => {

			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);

			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		}

		handleResize();

		const debouncedHandleResize = debounce(handleResize, 200);

		window.addEventListener("resize", debouncedHandleResize);

		return () => window.removeEventListener("resize", debouncedHandleResize);


	}, []);


	useEffect(() => {

		if(menuOpen){
			document.body.classList.add(isMenuOpenClass);
		}else{
			document.body.classList.remove(isMenuOpenClass);
		}

	}, [menuOpen])

	return (
		<MainContext.Provider
			value={{
				menuOpen,
				setMenuOpen,
				allFontsLoaded,
				windowSize,
				scrollInstance,
				setScrollInstance,
				globalData
			}}
		>{children}</MainContext.Provider>
	)

}


export async function getStaticProps(){

	const res = await fetch(`${process.env.REST_API}/graphql`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: `
			query options {
			  acfOptionsGeneral {
				menu {
				  logo {
					altText
					link
					mediaDetails {
					  height
					  width
					}
				  }
				  address {
					lineOne
					lineTwo
				  }
				  available {
					titleContact
					itemsAvailable {
					  iconAv {
						altText
						id
						link
						mediaDetails {
						  height
						  width
						}
					  }
					}
				  }
				  buttonsHead {
					itemButton {
					  slugButton
					  titleButton
					}
				  }
				  contactMenu {
					titleContact
					itemsContact {
					  titleCon
					  urlCon
					}
				  }
				  menuList {
					itemMenu {
					  slugItem
					  textItem
					}
				  }
				  menuList2 {
					itemMenu {
					  slugItem
					  textItem
					}
				  }
				  socialMedia {
					titleSm
					itemsSm {
					  titleSm
					  urlSm
					}
				  }
				}
				footer {
					availableFooter {
					  title
					  icons {
						icon {
						  altText
						  link
						  mediaDetails {
							height
							width
						  }
						}
					  }
					}
					block1 {
					  title
					  slug
					}
					block2 {
					  slug
					  title
					}
					block3 {
					  title
					  slug
					}
					buttonFooter {
					  titleBtn
					  slugBtn
					}
					copyright
					credits {
					  line2
					  line1
					}
					logoFooter {
					  altText
					  link
					  mediaDetails {
						width
						height
					  }
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
		  globalMenu: json.data.acfOptionsGeneral
	  },
	}
  
  }



MainContext.displayName = 'MainContext'

export const useMainContext = () => {
	return useContext(MainContext);
}

