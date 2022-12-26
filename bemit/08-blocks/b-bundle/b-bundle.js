import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import isTouchDevice from '../../../utils/isTouchDevice'

const CBundle = () => {
    const p = 'c-bundle'

	const [position, setPosition] = useState({x: -100, y: -100});
	const [linkHovered, setLinkHovered] = useState(false);
	const [linkHoveredU, setLinkHoveredU] = useState(false);
    const [linkHoveredG, setLinkHoveredG ] = useState(false);
    const [linkHoveredH, setLinkHoveredH] = useState(false);
	const[hidden, setHidden] = useState(false);
	const hasCustomCursorClass = 'has-custom-cursor';
	let nodes = [];
    let nodess = [];
    let nodesss = [];
    let nodessss = [];

	useEffect(() => {
		addDocumentEventListeners();
		setNodes();
		setNodesU();
        setNodesG();
        setNodesH();
		addHoverListenersU();
        addHoverListenersG();
        addHoverListenersH();
		addHoverListeners();
		customCursorMounted();
		return() => {
			removeDocumentEventListeners();
			setNodes();
			setNodesU();
            setNodesG();
            setNodesH();
			removeHoverListenersU();
            removeHoverListenersG();
            removeHoverListenersH();
			removeHoverListeners();
			customCursorUnmounted();
		}
	}, []);



	const setNodes = () => {
		nodes = document.querySelectorAll('.cursor-drag');
	}

    const setNodesU = () => {
		nodess = document.querySelectorAll('.cursor-about');
	}
    const setNodesG = () => {
		nodesss = document.querySelectorAll('.cursor-go');
	}
    const setNodesH = () => {
		nodessss = document.querySelectorAll('.cursor-go-d');
	}

	const addDocumentEventListeners = () => {
		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseenter", onMouseEnter);
		document.addEventListener("mouseleave", onMouseLeave);
	};


	const removeDocumentEventListeners = () => {
		document.removeEventListener("mousemove", onMouseMove);
		document.removeEventListener("mouseenter", onMouseEnter);
		document.removeEventListener("mouseleave", onMouseLeave);
	};

	const onMouseMove = (e) =>{
		setPosition({ x: e.clientX, y: e.clientY });
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
	const addHoverListenersG = () => {
		nodesss && nodesss.forEach((el) => {
			el.addEventListener("mouseover", onMouseOverG);
			el.addEventListener("mouseout", onMouseOutG);
		});
	};
	const addHoverListenersH = () => {
		nodessss && nodessss.forEach((el) => {
			el.addEventListener("mouseover", onMouseOverH);
			el.addEventListener("mouseout", onMouseOutH);
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
	const removeHoverListenersG = () => {
		nodesss && nodesss.forEach((el) => {
			el.removeEventListener("mouseover", onMouseOverG);
			el.removeEventListener("mouseout", onMouseOutG);
		});		
	};
	const removeHoverListenersH = () => {
		nodessss && nodessss.forEach((el) => {
			el.removeEventListener("mouseover", onMouseOverH);
			el.removeEventListener("mouseout", onMouseOutH);
		});		
	};

	const onMouseOver = () => {
		setLinkHovered(true)
	};
	const onMouseOverU = () => {
		setLinkHoveredU(true)
	};
	const onMouseOverG = () => {
		setLinkHoveredG(true)
	};
	const onMouseOverH = () => {
		setLinkHoveredH(true)
	};
	const onMouseOut = () => {
		setLinkHovered(false)
	};
	const onMouseOutU = () => {
		setLinkHoveredU(false)
	};
	const onMouseOutG = () => {
		setLinkHoveredG(false)
	};
	const onMouseOutH = () => {
		setLinkHoveredH(false)
	};

	const customCursorMounted = () => {
		document.body.classList.add(hasCustomCursorClass);
	}

	const customCursorUnmounted = () => {
		document.body.classList.remove(hasCustomCursorClass);
	}

	const arrayClasses = [
		{[`${p}`]			: p	},
		{[`is-hidden`]		: hidden },
		{[`is-link-hovered`]		: linkHovered },
		{[`is-about-hovered`]		: linkHoveredU },
        {[`is-go-hovered-d`]		: linkHoveredH },
        {[`is-go-hovered`]		: linkHoveredG }
     
	];

	let classes = classNames(arrayClasses);
	classes = classes.split(' ').join(' | ');

    return(
        <div className={classes}
        style={{
            "--cursor-x": `${position.x}px`,
            "--cursor-y": `${position.y}px`
        }}>
                <div className={`${p}__inner`}>
                    <div className={`${p}__circle`}>
                        <span className={`${p}__cursor-text`}></span>
                    </div>
                </div>
        </div>
    );
}
const CBundleWrapper = () => {

	const isTouch = isTouchDevice();
	if(isTouch) return null;
	return <CBundle />
}

export default CBundleWrapper;