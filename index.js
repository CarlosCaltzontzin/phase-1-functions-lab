// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    let blocks; 
    if(distance === 43){blocks = 1};
    if(distance === 50){blocks = 8}; 
    if(distance < 42){blocks = 8};
    return blocks 
}

function distanceFromHqInFeet(distance){
    let feet;
    if(distance === 43){feet = 264};
    if(distance === 50){feet = 2112};
    if(distance < 42){feet = 2112};
    return feet 
}

function distanceTravelledInFeet(start,destination){
    let blocks = Math.abs(destination - start);
    let feet = blocks * 264;
    return feet
}

function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start, destination);
    let price;
    if(feet <= 400){price = 0}
    if(feet > 400 && feet <= 2000){
        feet -= 400
        price = feet * .02}
    if(feet > 2000){price = 25}    
    if(feet > 2500){price = 'cannot travel that far'}
    return price 
}