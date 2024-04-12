import React from 'react';
import './paino.css'
function Piano() {
 
  const playSound = (soundNumber) => {
    let audio;

    if (soundNumber === 1) {
      
      audio = new Audio('/e.wav'); 
    } else if (soundNumber === 2) {
      
      audio = new Audio('/e.wav'); 
    }
    else if (soundNumber === 3) {
     
      audio = new Audio('/b.wav'); 
    }else if (soundNumber === 4) {
      
      audio = new Audio('/a.wav'); 
    }
    else if (soundNumber === 5) {
      
      audio = new Audio('/b.wav'); 
    }
    else if (soundNumber === 6) {
      
      audio = new Audio('/a.wav'); 
    }
    else if (soundNumber === 7) {
      
      audio = new Audio('/d.wav'); 
    }
    else if (soundNumber === 8) {
      
      audio = new Audio('/e.wav'); 
    }
    else if (soundNumber === 90) {
      
      audio = new Audio('/auto.mp3'); 
    }
    else if (soundNumber === 91) {
      
       audio = new Audio('/A4.mp3'); 
    }
    
    if(audio) {
      audio.play();
    }
  };

  return (
<div style={{height:"305px",width:"522px",border:"2px solid black ",borderRadius:"20px",boxShadow:'0 0 6px 6px black',marginLeft:"30%",marginTop:"%"}}>
    <div className='bkdiv'>
    <img src='https://www.freepnglogos.com/uploads/speaker-png/audio-speaker-png-clip-art-gallery-yopriceville-high-5.png' className='sound' height='100px' alt=''/>
    <img src='https://png.pngtree.com/png-vector/20220723/ourmid/pngtree-music-note-staves-png-image_5998977.png' height='110px' alt=''/>
    <input type='range'/>
    


    </div>
    <button onClick={() => playSound(2)} className='btn1'>A</button>

      <button onClick={() => playSound(1)} className='bkbtn' >B</button>
      <button onClick={() => playSound(2)} className='btn1'>C</button>
      <button onClick={() => playSound(3)} className='bkbtn'>B</button>

      <button onClick={() => playSound(2)} className='btn1'>D</button>
      <button onClick={() => playSound(4)} className='bkbtn'>B</button>

      <button onClick={() => playSound(2)} className='btn1'>C</button>
      <button onClick={() => playSound(5)} className='bkbtn'>B</button>

      <button onClick={() => playSound(2)} className='btn1'>F</button>
      <button onClick={() => playSound(6)}className='bkbtn'>B</button>

      <button onClick={() => playSound(2)} className='btn1'>G</button>
      <button onClick={() => playSound(7)} className='bkbtn'>B</button>

      <button onClick={() => playSound(2)} className='btn1'>H</button>
      <button onClick={() => playSound(8)} className='bkbtn'>B</button>
      <button onClick={() => playSound(2)} className='btn1'>H</button>
      <button onClick={() => playSound(2)} className='btn1'>G</button>
      <button onClick={() => playSound(7)} className='bkbtn'>B</button>
      








    </div>
   
  );
}

export default Piano;
