(function () {
    let position = 0;
    let reverse = false; 
    
    function moveForward(forward){
    if (reverse) {
      position -= forward;
    } 
    else{
    position += forward;
    }
    }
    function moveBackward(backward){
      if (reverse) {
      position += backward;
    } 
    else {
      position -= backward;
    }
    }
    function printLocation(){
      console.log(position);
    }
    
    function turnAround(){
    reverse = !reverse;
    }
    
    
    moveForward(5);
    moveBackward(3);
    printLocation();
    turnAround();
    moveForward(10);
    moveBackward(5);
    printLocation();
    
    })();