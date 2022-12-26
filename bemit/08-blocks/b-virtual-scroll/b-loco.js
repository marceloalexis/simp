import React, {useEffect} from "react";
import LocomotiveScroll from 'locomotive-scroll';
export default function BVirtualScrollOnlyInClient(start){

    useEffect(() => {
        if (!start) return;

        const locoScroll = new LocomotiveScroll({
            el: document.querySelector("[data-scroll-container]"),
            lerp: 0.1,
            smooth: true,
            touchMultiplier: 3,
            class: 'is-reveal',
            tablet: {
                smooth: true,
            },
            smartphone: {
                smooth: true,
            }
        },[start])
    })
}