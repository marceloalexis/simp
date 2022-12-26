import React, { useState, useRef, useEffect } from 'react';
import OContainer from "../../07-objects/o-container/o-container.js"
import OCol from "../../07-objects/o-col/o-col.js"
import { Navigation, Controller, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css";
const CSlider = ({ dataSlide }) => {

	const p = 'c-slider';

	const swiper1Ref = useRef();
	const swiper2Ref = useRef();

	const tags= [dataSlide.map( e => (
		<li>{e.bHomeTag}</li>
	))]
	const tag= [
		tags[0][0].props.children,
		tags[0][1].props.children,
		tags[0][2].props.children,
		tags[0][3].props.children
	]
	useEffect(() => {
	  swiper1Ref.current.controller.control = swiper2Ref.current;
	  swiper2Ref.current.controller.control = swiper1Ref.current;
	}, []);
	
	return(
		<div className={`${p}`}>
			<OContainer p={p} extraClasses={`o-container--no-padding`}>
				<OCol cols={{sm:4, md: 2, lg:5}} extraClasses={`o-col--no-padding`}>
						<Swiper
							className="swiperImage"
							modules={[Navigation, Controller, EffectFade]}
							effect={"fade"}
							onSwiper={(swiper) => {swiper1Ref.current = swiper;}}
							navigation={{
									nextEl: '.swiper-button-next',
									prevEl: '.swiper-button-prev',}}
							breakpoints={{
								// when window width is >= 640px
								320: {
								slidesPerView: 1,
								},
								// when window width is >= 768px
								768: {
								slidesPerView: 1,
								},
								}}>
							<div className={`${p}__wrap`}>
							{
								dataSlide.map( e => {
										return(
											<SwiperSlide key={e.bHomeImage.link}>
												<div className={`${p}__wrapper-image`} style={{background: `url(${e.bHomeImage.link})`}}></div>
											</SwiperSlide>
											)
										})
							}
							</div>
						</Swiper>
				</OCol>
				<OCol cols={{sm: 4, md: 4, lg:7}} extraClasses={`o-col--no-padding`}>
					
						<Swiper	
							pagination= {{
								clickable: true,
								renderBullet: function (index, className) {
									return '<span class="button-sw ' + className + '">' + (tag[index]) +  "</span>";
								  }
							}}
							modules={[Controller, Navigation, EffectFade, Pagination]}
							effect={"fade"}
							className="swiperContent"
							onSwiper={(swiper) => {swiper2Ref.current = swiper;}}
							breakpoints={{
								// when window width is >= 640px
								320: {
								   slidesPerView: 1,
								   },
								   // when window width is >= 768px
								   768: {
								   slidesPerView: 1,
								   },
								}}
							>
							<div className={`${p}__wrap`}>
							{
								dataSlide.map( a => {
										return(
											<SwiperSlide key={a.bHomeTitle}>
											<div className={`${p}__wrapper-content`}>
												<div className={`${p}__content`}>
													<div className={`${p}__wrapper`}>
														<h2 className={'o-font-title-home'}>{a.bHomeTitle}</h2>
													</div>
													<div className={`${p}__wrapper`}>
														<div dangerouslySetInnerHTML={{__html: a.bHomeText}}></div>
													</div>
												</div>
											</div>
											</SwiperSlide>
											)
										})
							}
							</div>
								<span className={`${p}__left`}></span>
								<span className={`${p}__right`}></span>

						</Swiper>
				</OCol>

			</OContainer>		
		</div>
	)

}

export default CSlider