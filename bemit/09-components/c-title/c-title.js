import React, { useContext } from 'react'
import Image from 'next/image'
import OContainer from '../../07-objects/o-container/o-container.js'
import OCol from '../../07-objects/o-col/o-col.js'
import { m } from 'framer-motion';
import PAGE_TRANSITION from '../../../utils/pageTransitionsVars'
import { MainContext } from '../../../contexts/Main.context.js'

const CTitle = ({ categories, id, title, subTitle, SRC, Height, Width, Alt}) => {
  const p = 'c-title';

  const {windowSize} = useContext(MainContext);
  const {width, height} = windowSize;


  const easing = [0.175, 0.85, 0.42, 0.96];
  const TOTAL_TIME = PAGE_TRANSITION.DURATION;
  const titleVariants = {
    initial: {y: '150%'},
    animate: {y: '0%'},
    exit: {y:'-110%'}
  };
  return (
<div className={`${p}`}>
      <OContainer p={p} extraClasses={`${p}__main-section`}>
        <OCol p={p} cols={{lg:9}}>
          <div className={`${p}__wrapper-main`}>
          <div className={`${p}__wrapper-title`}>
              <m.div
                key={`detail-project-${id}-title`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={titleVariants}
                transition={{ duration: TOTAL_TIME/2, delay: PAGE_TRANSITION.DURATION, ease: easing }}

              >
                <h1 className={`o-font-title-bold`}>{title}</h1>
              </m.div>
          </div>
            <div className={`${p}__wrapper-subtitle`}>
              <m.div
                key={`detail-project-${id}-subtitle`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={titleVariants}
                transition={{ duration: TOTAL_TIME, delay: PAGE_TRANSITION.DURATION, ease: easing }}
              >
                <p className={`o-font-subtitle`}>{subTitle}</p>
              </m.div>

            </div>
            <div className={`${p}__wrapper-categories`}>
            <m.div
                key={`detail-project-${id}-subtitle`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={titleVariants}
                transition={{ duration: TOTAL_TIME, delay: PAGE_TRANSITION.DURATION, ease: easing }}
            >
                          <ul>
              {
                categories.edges.map( category => {
                  return(<li className={`o-font-text`} key={category.node.slug}>{category.node.name}</li>);
                  
                })}
            </ul>
            </m.div>

            </div>
           
          </div>
        </OCol>
      </OContainer>
      <OContainer p={p} extraClasses={`${p}__main-image o-container--no-padding`}>
        <OCol p={p} cols={{lg:12}} extraClasses={`o-col--no-padding`}>
          <div className={`${p}__wrapper-main-image`}>
            <Image src={SRC} width={Width} height={Height} alt={Alt} priority={true}/>
          </div>
        </OCol>
      </OContainer>
</div>
);
}

export default CTitle