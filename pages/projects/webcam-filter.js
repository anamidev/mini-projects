import {useEffect, useRef, useState} from "react";
import StripPhoto from "../../components/webcam-filter/StripPhoto";

export default function WebcamFilter() {
    const snapRef = useRef(null);
    const canvasRef = useRef(null);
    const videoRef = useRef(null);
    const rgbInput = useRef([]);
    
    const [photos, setPhotos] = useState([]);
    
    let ctx;
    let intervalId;
    
    function getVideo() {
        navigator.mediaDevices.getUserMedia({
            video: {
                width: {ideal: 4096},
                height: {ideal: 2160},
            },
            audio: false
        })
            .then(localMediaStream => {
                videoRef.current.srcObject = localMediaStream;
                videoRef.current.play();
            })
            .catch(err => {
                alert('Unable to get access to camera device. ' + err)
            });
    }
    
    function paintToCanvas() {
        const width = videoRef.current.videoWidth;
        const height = videoRef.current.videoHeight;
        canvasRef.current.width = width;
        canvasRef.current.height = height;
    
        intervalId = setInterval(() => {
            ctx.drawImage(videoRef.current, 0, 0, width, height);
            let pixels = ctx.getImageData(0, 0, width, height);
            
            // pixels = rgbSplit(pixels);
            // pixels = redEffect(pixels);
            // ctx.globalAlpha = 0.1;
            // pixels = greenScreen(pixels);
            
            ctx.putImageData(pixels, 0, 0);
        }, 16);
    }
    
    function takePhoto() {
        snapRef.current.currentTime = 0;
        snapRef.current.play();
        const data = canvasRef.current.toDataURL('image/jpeg');
        setPhotos(prev => [...prev, data]);
    }
    
    function redEffect(pixels) {
        for (let i = 0; i < pixels.data.length; i += 4) {
            pixels.data[i] = pixels.data[i] + 200; // RED
            pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
            pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
        }
        return pixels;
    }
    
    function rgbSplit(pixels) {
        for (let i = 0; i < pixels.data.length; i +=4 ) {
            pixels.data[i - 150] = pixels.data[i]; // RED
            pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
            pixels.data[i - 550] = pixels.data[i + 2]; // Blue
        }
        return pixels;
    }
    
    function greenScreen(pixels) {
        const levels = {};
    
        rgbInput.current.forEach((input) => {
            levels[input.name] = input.value;
        });
        
        for (let i = 0; i < pixels.data.length; i = i + 4) {
            let red = pixels.data[i];
            let green = pixels.data[i + 1];
            let blue = pixels.data[i + 2];
            let alpha = pixels.data[i + 3];

            if (red >= levels.rmin && red <= levels.rmax &&
                green >= levels.gmin && green <= levels.gmax &&
                blue >= levels.bmin && blue <= levels.bmax) {
                    pixels.data[i + 3] = 0;
            }
        }
        return pixels;
    }
    
    useEffect(() => {
        getVideo();
        ctx = canvasRef.current.getContext('2d');
        const video = videoRef.current;
        return () => {
            clearInterval(intervalId);
            video.srcObject?.getTracks().forEach(track => track.stop())
        }
    }, [])
    
    return (
        <>
            <div className="photobooth">
                <div className="controls">
                    <button onClick={takePhoto}>Take Photo</button>
                    <div className="rgb">
                        
                        <label htmlFor="rmin">Red Min:</label>
                        <input type="range" min="0" max="255" name="rmin" ref={r => rgbInput.current[0] = r}/>
                        
                        <label htmlFor="rmax">Red Max:</label>
                        <input type="range" min="0" max="255" name="rmax" ref={r => rgbInput.current[1] = r}/>
                        <br/>
                        
                        <label htmlFor="gmin">Green Min:</label>
                        <input type="range" min="0" max="255" name="gmin" ref={r => rgbInput.current[2] = r}/>
                        
                        <label htmlFor="gmax">Green Max:</label>
                        <input type="range" min="0" max="255" name="gmax" ref={r => rgbInput.current[3] = r}/>
                        <br/>
                        
                        <label htmlFor="bmin">Blue Min:</label>
                        <input type="range" min="0" max="255" name="bmin" ref={r => rgbInput.current[4] = r}/>
                        
                        <label htmlFor="bmax">Blue Max:</label>
                        <input type="range" min="0" max="255" name="bmax" ref={r => rgbInput.current[5] = r}/>
                    </div>
                </div>
        
                <canvas className="photo" ref={canvasRef}></canvas>
                <video className="player" ref={videoRef} onCanPlay={paintToCanvas}></video>
                <div className="strip">
                    {photos.map(photo => (
                        <StripPhoto data={photo} key={photo}></StripPhoto>
                    ))}
                </div>
            </div>
    
            <audio ref={snapRef}
                   src="/webcam-filter/snap.mp3"
                   hidden>
            </audio>
            
            <style jsx global>{`
                body {
                    font-size: 10px;
                    background: #ffc600;
                }
                
                .photobooth {
                    background: white;
                    max-width: 150rem;
                    margin: 2rem auto;
                    border-radius: 2px;
                }
                
                .photobooth:after {
                    content: '';
                    display: block;
                    clear: both;
                }
                
                .photo {
                    width: 100%;
                    float: left;
                }
                
                .player {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    width: 200px;
                }
                
                .strip {
                    padding: 2rem;
                }
                
                .strip img {
                    width: 100px;
                    overflow-x: scroll;
                    padding: 0.8rem 0.8rem 2.5rem 0.8rem;
                    box-shadow: 0 0 3px rgba(0,0,0,0.2);
                    background: white;
                }
                
                .strip a:nth-child(5n+1) img { transform: rotate(10deg); }
                .strip a:nth-child(5n+2) img { transform: rotate(-2deg); }
                .strip a:nth-child(5n+3) img { transform: rotate(8deg); }
                .strip a:nth-child(5n+4) img { transform: rotate(-11deg); }
                .strip a:nth-child(5n+5) img { transform: rotate(12deg); }
            `}</style>
        </>
    )
}