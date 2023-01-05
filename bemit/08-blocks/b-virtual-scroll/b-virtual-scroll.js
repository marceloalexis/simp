import React from 'react';
import dynamic from 'next/dynamic'

const BVirtualScrollOnlyInClient = dynamic(
	() => import('./b-virtual-scroll-only-in-client'),
	{ ssr: false }
)

const BVirtualScroll = ({ children }) => {

	const p = 'b-virtual-scroll';

	return(
		<>
			<div className={`${p} js-${p}`} data-scroll-container>
				{children}
			</div>
			<BVirtualScrollOnlyInClient />
		</>
	);
};

export default BVirtualScroll;