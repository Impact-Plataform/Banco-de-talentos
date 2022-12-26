import React from 'react';
import loadingGif from '../assets/loading.gif';



function Loading() {
    return(
        <div className="loading__loading loading__loading-column">
            <img src={loadingGif} alt="A temathic Death Star loading gif." />
            <h2 className='blink'>Loading...</h2>
        </div>
    )
}

export default Loading;