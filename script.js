console.log("Welcome to My spotify");

// Intialize the variables

let songIndex =0;
let audioElement = new Audio('song/9.mp3 ');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let songItems =Array.from(document.getElementsByClassName('songItem'));
let masterSongName= document.getElementById('masterSongName');

let songs= [
    {songName: "kabhi Sala e Ishq", filePath: "song/1.mp3" , coverPath: "covers/1.jpg"},
    {songName: "Sala e Ishq", filePath: "song/2.mp3" , coverPath: "covers/2.jpg"},
    {songName: "Bin Tere Kya Yaar Mera", filePath: "song/3.mp3" , coverPath: "covers/3.jpg"},
    {songName: "Chahun Main Ya Naa Female Tone", filePath: "song/4.mp3" , coverPath: "covers/4.jpg"},
    {songName: "Dekhu Mai Tujhe Ya Dekhu Kudrat", filePath: "song/5.mp3" , coverPath: "covers/5.jpg"},
    {songName: "Ik Mili Menu Apsara - B Praak", filePath: "song/6.mp3" , coverPath: "covers/6.jpg"},
    {songName: "Main Royaan - Yasser Desai", filePath: "song/7.mp3" , coverPath: "covers/7.jpg"},
    {songName: "O Aasman Wale - Jubin Nautiyal", filePath: "song/8.mp3" , coverPath: "covers/8.jpg"},
    {songName: "Kacha Badam", filePath: "song/9.mp3" , coverPath: "covers/9.jpg"},
    {songName: "Kabhi Tumhe Female - Shershaah", filePath: "song/10.mp3" , coverPath: "covers/10.jpg"}


]

songItems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
    }else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle')
    gif.style.opacity=0;

    }
})

// listen to events
audioElement.addEventListener('timeupdate',()=>{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays=()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');

    element.classList.add('fa-play-circle');

  })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        masterSongName.innerText = songs[songIndex].songName;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src= `song/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();   
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');



    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }else{
        songIndex +=1;
    }
    audioElement.src= `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();  
        gif.style.opacity=1; 
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex -=1;
    }
    audioElement.src= `song/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();  
        gif.style.opacity=1; 
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})