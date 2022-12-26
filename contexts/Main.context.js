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

MainContext.displayName = 'MainContext'

export const useMainContext = () => {
	return useContext(MainContext);
}