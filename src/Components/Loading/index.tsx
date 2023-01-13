import React from 'react';
import loadingGif from '../../assets/loading.gif';
import videoBackground from '../../assets/background.mp4';



function Loading() {

    return (
        <div className='loading__content'>
            <div className="loading__video">
                <video autoPlay={true} loop={true} muted={true} src={videoBackground}></video>
            </div>
            <div className="loading__overlay"></div>
            <div className="loading__loading loading__loading-column">
                <img src={loadingGif} alt="A temathic Death Star loading gif." />
                <h2 className='blink'>Loading...</h2>
            </div>

        </div>
    )
}

export default Loading;