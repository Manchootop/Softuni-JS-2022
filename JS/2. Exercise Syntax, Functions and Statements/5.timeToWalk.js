function walking(steps, stepLength, speed){
    let distanceInMeters = steps * stepLength;
    let speedMetersSec = speed / 3.6;
    let time = distanceInMeters / speedMetersSec;
    let rest = Math.floor(distanceInMeters / 500);

    let timeMin = Math.floor(time / 60);
    let timeSecond = Math.round(timeMin % 60);
    let timeHr = Math.floor(time / 3600);
    console.log((timeHr < 10 ? "0" : "") + timeHr + ':' + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ':' + (timeSecond < 10 ? '0' : '') + timeSecond);
}

walking(4000, 0.6, 5)