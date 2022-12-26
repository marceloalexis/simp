import {gsap} from "gsap"

const parallaxNode = (e, target, movement) => {
	var nodeBounds = e.currentTarget.getBoundingClientRect();
	var relX = e.clientX - nodeBounds.left;
	var relY = e.clientY - nodeBounds.top;
	gsap.to(target,{
		duration: 1,
		x: (relX - nodeBounds.width / 2 ) / nodeBounds.width * movement,
		y: (relY - nodeBounds.height / 2 ) / nodeBounds.height * movement
	});
}

export default parallaxNode;