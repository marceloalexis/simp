import React, {useEffect} from 'react'
import OContainer from "../../07-objects/o-container/o-container.js"
import OCol from "../../07-objects/o-col/o-col.js"

const BDebug = () => {

	const p = 'b-debug';
	const isDebugClass = 'is-debug';
	const cols = { lg: 1, md: 1, sm: 1 };

	const handlerKeyPress = event => {
		const { keyCode } = event;
		if ( keyCode == 32 ) {
			document.body.classList.toggle(isDebugClass);
		}
	};

	useEffect(() => {
		document.body.addEventListener('keypress', handlerKeyPress, false);
		return () => {
			document.body.classList.remove(isDebugClass);
			document.body.removeEventListener('keypress', handlerKeyPress, false);
		};

	}, []);



	return(
		<div className={`${p}`}>
			<OContainer p={p}>
				<OCol p={p} cols={cols}>
					<div className={`${p}__col-content`}></div>
				</OCol>
				<OCol p={p} cols={cols}>
					<div className={`${p}__col-content`}></div>
				</OCol>
				<OCol p={p} cols={cols}>
					<div className={`${p}__col-content`}></div>
				</OCol>
				<OCol p={p} cols={cols}>
					<div className={`${p}__col-content`}></div>
				</OCol>
				<OCol p={p} cols={cols} extraClasses={`u-display-none@only-sm`}>
					<div className={`${p}__col-content`}></div>
				</OCol>
				<OCol p={p} cols={cols} extraClasses={`u-display-none@only-sm`}>
					<div className={`${p}__col-content`}></div>
				</OCol>
				<OCol p={p} cols={cols} extraClasses={`u-display-none@only-md u-display-none@only-sm`}>
					<div className={`${p}__col-content`}></div>
				</OCol>
				<OCol p={p} cols={cols} extraClasses={`u-display-none@only-md u-display-none@only-sm`}>
					<div className={`${p}__col-content`}></div>
				</OCol>
				<OCol p={p} cols={cols} extraClasses={`u-display-none@only-md u-display-none@only-sm`}>
					<div className={`${p}__col-content`}></div>
				</OCol>
				<OCol p={p} cols={cols} extraClasses={`u-display-none@only-md u-display-none@only-sm`}>
					<div className={`${p}__col-content`}></div>
				</OCol>
				<OCol p={p} cols={cols} extraClasses={`u-display-none@only-md u-display-none@only-sm`}>
					<div className={`${p}__col-content`}></div>
				</OCol>
				<OCol p={p} cols={cols} extraClasses={`u-display-none@only-md u-display-none@only-sm`}>
					<div className={`${p}__col-content`}></div>
				</OCol>				
			</OContainer>
		</div>
		)

}
export default BDebug