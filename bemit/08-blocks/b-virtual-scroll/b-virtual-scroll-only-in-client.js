import React,{useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from '../../../node_modules/gsap/dist/ScrollTrigger.js';
import LocomotiveScroll from 'locomotive-scroll';

const BVirtualScrollC= () => {
	useEffect(() =>{
		gsap.registerPlugin(ScrollTrigger);
		const locoScroll = new LocomotiveScroll({
			el: document.querySelector(".smooth-scroll"),
			lerp: 0.08,
			smooth: true,
			scrollFromAnywhere: true,
			tablet: {
				smooth: true,
			},
			smartphone: {
				smooth: true,
			}
		});
	
		locoScroll.on("scroll", ScrollTrigger.update);
		
		ScrollTrigger.scrollerProxy(".smooth-scroll", {
			scrollTop(value) {
				return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
			},
			getBoundingClientRect(){
				return {top:0, left: 0, width: window.innerWidth, height: innerHeight};
			},
			pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
		});
	
		// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
		ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
		ScrollTrigger.defaults({ scroller: ".smooth-scroll" });
		// --- SETUP END ---
	}, [start]);

}
export default BVirtualScrollC(start);