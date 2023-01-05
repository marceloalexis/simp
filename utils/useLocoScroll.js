import React, { useEffect } from "react"
import LocomotiveScroll from "locomotive-scroll"
import 'locomotive-scroll/src/locomotive-scroll.scss'

export default function useLocoScroll(star){
    if (!star) return

    useEffect(() => {
        const scrollEl = document.querySelector('b-layout');

        const locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            class: 'is-reveal'
        })
    },[star])
}