import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import isTouchDevice from '../../../utils/isTouchDevice'


const BCursor = () => {

	const p = 'b-cursor';

	const [position, setPosition] = useState({x: -100, y: -100});
	const[clicked, setClicked] = useState(false);
	const [linkHovered, setLinkHovered] = useState(false);
	const [linkHoveredU, setLinkHoveredU] = useState(false);
	const[hidden, setHidden] = useState(false);
	const hasCustomCursorClass = 'has-custom-cursor';
	let nodes = [];
	let nodess = [];

	useEffect(() => {
		addDocumentEventListeners();
		setNodes();
		setNodesU();
		addHoverListenersU();
		addHoverListeners();
		customCursorMounted();
		return() => {
			removeDocumentEventListeners();
			setNodes();
			setNodesU();
			removeHoverListenersU();
			removeHoverListeners();
			customCursorUnmounted();
		}
	}, []);

	const setNodes = () => {

		nodes = document.querySelectorAll('a, button, .js-link, input[type="button"], input[type=submit]');
	}

	const setNodesU = () => {
		nodess = document.querySelectorAll('.cursor-hidden-imp');
	}

	const addDocumentEventListeners = () => {
		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseenter", onMouseEnter);
		document.addEventListener("mouseleave", onMouseLeave);
		document.addEventListener("mousedown", onMouseDown);
		document.addEventListener("mouseup", onMouseUp);
	};


	const removeDocumentEventListeners = () => {
		document.removeEventListener("mousemove", onMouseMove);
		document.removeEventListener("mouseenter", onMouseEnter);
		document.removeEventListener("mouseleave", onMouseLeave);
		document.removeEventListener("mousedown", onMouseDown);
		document.removeEventListener("mouseup", onMouseUp);
	};

	const onMouseMove = (e) =>{
		setPosition({ x: e.clientX, y: e.clientY });
	};

	const onMouseDown = () => {
		setClicked(true);
	};

	const onMouseUp = () => {
		setClicked(false);
	};

	const onMouseLeave = () => {
		setHidden(true);
	};

	const onMouseEnter = () => {
		setHidden(false);
	};

	const addHoverListeners = () => {
		nodes && nodes.forEach((el) => {
			el.addEventListener("mouseover", onMouseOver);
			el.addEventListener("mouseout", onMouseOut);
		});
	};

	const addHoverListenersU = () => {
		nodess && nodess.forEach((el) => {
			el.addEventListener("mouseover", onMouseOverU);
			el.addEventListener("mouseout", onMouseOutU);
		});
	};

	const removeHoverListeners = () => {
		nodes && nodes.forEach((el) => {
			el.removeEventListener("mouseover", onMouseOver);
			el.removeEventListener("mouseout", onMouseOut);
		});		
	};

	const removeHoverListenersU = () => {
		nodess && nodess.forEach((el) => {
			el.removeEventListener("mouseover", onMouseOverU);
			el.removeEventListener("mouseout", onMouseOutU);
		});		
	};

	const onMouseOver = () => {
		setLinkHovered(true)
	};
	const onMouseOverU = () => {
		setLinkHoveredU(true)
	};
	const onMouseOut = () => {
		setLinkHovered(false)
	};
	const onMouseOutU = () => {
		setLinkHoveredU(false)
	};

	const customCursorMounted = () => {
		document.body.classList.add(hasCustomCursorClass);
	}

	const customCursorUnmounted = () => {
		document.body.classList.remove(hasCustomCursorClass);
	}

	const arrayClasses = [
		{[`${p}`]			: p	},
		{[`is-clicked`]		: clicked },
		{[`is-hidden`]		: hidden },
		{[`is-link-hovered`]		: linkHovered },
		{[`is-link-hoveredU`]		: linkHoveredU },
	];

	let classes = classNames(arrayClasses);
	classes = classes.split(' ').join(' | ');


	return(
		<div
			className={classes}
			style={{
				"--cursor-x": `${position.x}px`,
				"--cursor-y": `${position.y}px`
			}}
		>
			<div className={`${p}__inner`}/>
		</div>
		);

};

const BCursorWrapper = () => {

	const isTouch = isTouchDevice();
	if(isTouch) return null;
	return <BCursor />
}

export default BCursorWrapper;