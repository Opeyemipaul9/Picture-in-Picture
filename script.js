const videoElement =  document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream , Pass to video element then play..

async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        console.log(videoElement.srcObject);
        videoElement.onloadedmetadata = () => {
            videoElement.play();
            videoElement.hidden = false;
        }
    }
    catch(error){
        console.log('errors');
        // Catch Error Here
    }
} 


button.addEventListener('click', selectMediaStream);
