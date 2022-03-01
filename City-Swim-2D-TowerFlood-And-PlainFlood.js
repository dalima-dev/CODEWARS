function rainVolume(towers) {
    let max = Math.max(...towers);
    let length = towers.length;
    let units = length * max - towers.reduce((a,b)=>a+b);
    let units_total = 0;
    
    if(towers[0] < towers[1]) units -= max - towers[0];
    if(towers[length-2] > towers[length-1]) units -= max - towers[length-1];
    //Codigo acima remove as unidades de agua das "bordas"
    return units;
  }
  //MUITO AVANCADO!! PRECISA ESTUDAR ALGORITMOS!!!
  console.log(rainVolume([2,1,3]))