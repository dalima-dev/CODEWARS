function rectangleRotation(a, b) {
    let count = 0;
    let exclude_y_half = 0;
    let exclude_x_half = 0;
    const end_y = b/2;
    const end_x = a/2;
    for(let y = 0; y <= end_y; y += Math.sqrt(2)) exclude_y_half++;
    for(let x = 0; x <= end_x; x += Math.sqrt(2)) exclude_x_half++;
    let i;
    for(let y = 0, j = 0; y <= end_y; y += Math.sqrt(2)/2, j++){
        if(j % 2 == 0) i = 0;
        else
        i = Math.sqrt(2)/2;
        for(let x = i; x <= end_x; x += Math.sqrt(2)) count++;
    }
    return (count*2 - exclude_x_half)*2 - (exclude_y_half*2 - 1);
}    