import React from "react"
import classNames from 'classnames';

const OCol = ({p, extraClasses, cols, children}) => {

	const { xxl, xl, lg, md, sm, xxlPush ,xlPush,lgPush, mdPush, smPush } = cols;

	const arrayClasses = [
		{ [`${p}__col`]					: p, },
		{ [`${extraClasses}`]			: extraClasses },
		{ [`o-col-${xxl}@xxl`]				: xxl },
		{ [`o-col-push-${xxlPush}@xxl`]	: xxlPush},
		{ [`o-col-${xl}@xl`]				: xl },
		{ [`o-col-push-${xlPush}@xl`]	: xlPush},
		{ [`o-col-${lg}@lg`]				: lg },
		{ [`o-col-push-${lgPush}@lg`]	: lgPush},
		{ [`o-col-${md}@md`]				: md },
		{ [`o-col-push-${mdPush}@md`]	: mdPush},
		{ [`o-col-${sm}@sm`]				: sm },
		{ [`o-col-push-${smPush}@sm`]	: smPush}		
	]

	let classes = classNames(arrayClasses);
	classes = classes.split(' ').join(' | ');

	return(
		<div className={classes}>{children}</div>
	)

}

export default OCol