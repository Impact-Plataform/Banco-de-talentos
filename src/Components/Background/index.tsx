import videoBackground from '../../assets/background.mp4';


function Background() {

    return (
        <div >
            <div className="main__video">
                <video autoPlay={true} loop={true} muted={true} src={videoBackground}></video>
            </div>
            <div className="main__overlay"></div>
        </div>
    )
}

export default Background;