import React from 'react';
import PAGE_TRANSITION from '../../../utils/pageTransitionsVars.js'
import {LazyMotion, domAnimation, m} from 'framer-motion'
import BVirtualScroll from '../b-virtual-scroll/b-virtual-scroll.js'
import BFooter from '../../08-blocks/b-footer/b-footer.js'
const pageMotionProps = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			duration: PAGE_TRANSITION.DURATION,
			ease: PAGE_TRANSITION.EASE
		}
	},
	exit: {
		opacity: 0,
		transition: {
			duration: PAGE_TRANSITION.DURATION,
			delay: PAGE_TRANSITION.DURATION,
			ease: PAGE_TRANSITION.EASE
		}
	}
}

const BLayout = ({children}) => {

	const p = 'b-layout';

	return(
		
		<LazyMotion features={domAnimation}>
		<m.main className={`${p}`} {...pageMotionProps}>
		<BVirtualScroll>
			{children}
			<BFooter />
		</BVirtualScroll>
		</m.main>
		</LazyMotion>
		);
};

export default BLayout;