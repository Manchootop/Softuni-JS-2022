function previousDay(year, mouth, day){
    let date = new Date(year, mouth - 1, day);
    date.setDate(date.getDate() - 1);
    console.log(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
}

previousDay(2016, 10, 1);   