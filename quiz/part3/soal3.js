

  function tentukanDeretGeometri(arr) {
    if(arr.length <= 2) {return true;}
    let selisih = arr[1] / arr[0];
    for(let i = 0; i < arr.length - 1; i++) {
      if(arr[i + 1] / arr[i] !== selisih) {
        return false;
      }  
    }
    return true;
    };
    
    console.log(tentukanDeretGeometri([1, 3, 9, 27, 81]));