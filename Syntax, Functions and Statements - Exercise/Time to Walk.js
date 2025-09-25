function walkingTime(steps, footprint, speed) {
    let distance = steps * footprint;
  
    let rests = Math.floor(distance / 500);

    let timeHours = distance / 1000 / speed; 

    let totalSeconds = timeHours * 3600;

    totalSeconds += rests * 60;

  
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = Math.round(totalSeconds % 60);


    console.log(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`);
}


walkingTime(4000, 0.60, 5);   
walkingTime(2564, 0.70, 5.5); 