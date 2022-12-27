import React, {useRef, useState} from "react"
import OCol from "../../07-objects/o-col/o-col.js"
import OContainer from "../../07-objects/o-container/o-container.js"


const CVideoLayout = ({dataTitleVideo}) => {
    const p = 'c-video'
          const videoRef = useRef(null);
        
          const [isMuted, setIsMuted] = useState(true);
          const [isPaused, setIsPaused] = useState(false);
        
          // Función para mutear el video
          function muteVideo() {
            setIsMuted(true);
          }
          // Función para desmuteado el video
          function unmuteVideo() {
            setIsMuted(false);
          }       
          // Función para pausar el video
          function pauseVideo() {
            videoRef.current.pause();
            setIsPaused(true);
          }
          function playVideo() {
            // Reproduce el video
            videoRef.current.play();
            setIsPaused(false);
          }

    return(
        <div className={`${p}`} >
            <OContainer p={p} extraClasses={`o-container--no-padding`}>
                <OCol p={p} cols={{lg: 12 }} extraClasses={`o-col--no-padding`}>
                    <div className={`${p}__wrapper`}>
                        <div className={`${p}__video-layout`}>
                            <div className={`${p}__overlay`}></div>
                            <video poster={"/sunset-figure.jpg"} muted={isMuted} ref={videoRef} autoPlay loop>
                            <source src="/simpello-video.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className={`${p}__title-content`}>
                            <h2 className={`o-font-title-home`}>{dataTitleVideo}</h2>
                        </div>
                        <div className={`${p}__controls-video`}>
                            <ul>
                                <li className={`${p}__play-pause`} >
                                    { isPaused ?
                                    (<span onClick={playVideo} className={`${p}__btn-play`}></span>):
                                    (<span onClick={pauseVideo} className={`${p}__btn-pause`}></span>) 
                                     }
                                </li>
                                <li className={`${p}__un-mute`}>
                                    { isMuted ? (<span onClick={unmuteVideo} className={`${p}__btn-unmute`}></span>) : 
                                    (<span onClick={muteVideo} className={`${p}__btn-mute`}></span>) }    
                                </li>
                            </ul>    
                        </div>
                    </div>
                </OCol>
            </OContainer>
        </div>
    )
}

export default CVideoLayout