import React from "react"
import classNames from 'classnames';

const OContainer = ({p, extraClasses, children}) =>{


	const arrayClasses = [
		{[`${p}__container`]			: p},
		{[`${extraClasses}`]			: extraClasses},
		'o-container'
	]

	let classes = classNames(arrayClasses);
	classes = classes.split(' ').join(' | ');

	return (
		<div className={classes}>{children}</div>
		)

}

export default OContainer