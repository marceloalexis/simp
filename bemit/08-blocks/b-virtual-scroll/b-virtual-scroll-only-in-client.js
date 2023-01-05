import React, {useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from '../../../node_modules/gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import { useMainContext } from '../../../contexts/Main.context.js';

const addVirtualScrollOnWebsite= () => {

	const locoScroll = new LocomotiveScroll({
		el: document.querySelector("[data-scroll-container]"),
		smooth: true,
		multiplier: 1,
		lerp: 0.09,
		class: 'is-reveal',
		scrollFromAnywhere: true,
		tablet: {
			smooth: false,
		},
		smartphone: {
			smooth: false,
		}
	});

	setTimeout(() => {
		locoScroll.update();
	  }, 500);

	locoScroll.on("scroll", ScrollTrigger.update);




	return locoScroll;


}

const BVirtualScrollOnlyInClient = () => {

	const { setScrollInstance } = useMainContext();

	useEffect(() => {
		const locoScroll = addVirtualScrollOnWebsite();

		const syncLocoWithGSAP = () => {
			locoScroll && locoScroll.update()
		}

		ScrollTrigger.defaults({ scroller: locoScroll.el });

		ScrollTrigger.addEventListener("refresh", syncLocoWithGSAP);

		ScrollTrigger.update();

		setScrollInstance(locoScroll);

		return () => {
			ScrollTrigger.removeEventListener("refresh", syncLocoWithGSAP);
			locoScroll.destroy();
			setScrollInstance(null);
		}

	}, [])

	return null;

}

export default BVirtualScrollOnlyInClient;