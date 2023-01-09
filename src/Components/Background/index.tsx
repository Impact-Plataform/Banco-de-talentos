import videoBackground from '../../assets/background.mp4';
import { PropBackground } from '../../Types';


function Background({overlayEnabled}:PropBackground) {

    return (
        <div >
            <div className="main__video">
                <video autoPlay={true} loop={true} muted={true} src={videoBackground}></video>
            </div>
            <div className={overlayEnabled && "main__overlay" || ''}></div>
        </div>
    )
}

export default Background;