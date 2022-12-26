import React from "react";
import BVirtualScrollC from './b-virtual-scroll-only-in-client.js'


const BVirtualScroll = ({ children }) => {

	return(

			<div className={`${p} js-${p} smooth-scroll`}>
                <BVirtualScrollC>
				{children}
                </BVirtualScrollC>
			</div>

	)
};

export default BVirtualScroll;