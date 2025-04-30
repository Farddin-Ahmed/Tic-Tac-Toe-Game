btn1 = document.getElementById("btn1");
btn2 = document.getElementById("btn2");
btn3 = document.getElementById("btn3");
btn4 = document.getElementById("btn4");
btn5 = document.getElementById("btn5");
btn6 = document.getElementById("btn6");
btn7 = document.getElementById("btn7");
btn8 = document.getElementById("btn8");
btn9 = document.getElementById("btn9");
msg = document.getElementById("msg");
reset = document.getElementById("reset");

let gameactive = true;
let chance = "x";

btn1.onclick = () =>{
    if (gameactive == false) {
    msg.style.opacity = 1;
    msg.innerText = `Player ${result} is WIN`;
    setTimeout(() => {
      msg.style.opacity = 0;
    }, 1000);
    return; // Exit the function after showing message
  }
  
  // Game is active
  if (btn1.innerText == "") {
    // Button is empty, proceed with marking it
    btn1.innerText = chance;
    if (chance == "x") {
      chance = "0";
    } else {
      chance = "x";
    }
    
    // Now check for win after a valid move
    let result = checkWin();
    if (result == "draw") {
      gameactive = false;
      msg.innerText = "It's a DRAW!";
      msg.style.opacity = 1;
      setTimeout(() => {
        msg.style.opacity = 0;
      }, 1000);
    } else if (result === null) {
      msg.style.opacity = 0;
    } else {
      gameactive = false;
      msg.innerText = `Player ${result} is WIN`;
      msg.style.opacity = 1;
      setTimeout(() => {
        msg.style.opacity = 0;
      }, 1000);
    }
  } else {
    // Button already has a mark, show invalid message
    msg.style.opacity = 1;
    msg.innerText = "Invalid";
    setTimeout(() => {
      msg.style.opacity = 0;
    }, 1000);
    // Don't check for win since no valid move was made
  }
}
btn2.onclick = () =>{
    if (gameactive == false) {
    msg.style.opacity = 1;
    msg.innerText = `Player ${result} is WIN`;
    setTimeout(() => {
      msg.style.opacity = 0;
    }, 1000);
    return; // Exit the function after showing message
  }
  
  // Game is active
  if (btn2.innerText == "") {
    // Button is empty, proceed with marking it
    btn2.innerText = chance;
    if (chance == "x") {
      chance = "0";
    } else {
      chance = "x";
    }
    
    // Now check for win after a valid move
    let result = checkWin();
    if (result == "draw") {
      gameactive = false;
      msg.innerText = "It's a DRAW!";
      msg.style.opacity = 1;
      setTimeout(() => {
        msg.style.opacity = 0;
      }, 1000);
    } else if (result === null) {
      msg.style.opacity = 0;
    } else {
      gameactive = false;
      msg.innerText = `Player ${result} is WIN`;
      msg.style.opacity = 1;
      setTimeout(() => {
        msg.style.opacity = 0;
      }, 1000);
    }
  } else {
    // Button already has a mark, show invalid message
    msg.style.opacity = 1;
    msg.innerText = "Invalid";
    setTimeout(() => {
      msg.style.opacity = 0;
    }, 1000);
    // Don't check for win since no valid move was made
  }
}
btn3.onclick = () =>{
    if (gameactive == false) {
    msg.style.opacity = 1;
    msg.innerText = `Player ${result} is WIN`;
    setTimeout(() => {
      msg.style.opacity = 0;
    }, 1000);
    return; // Exit the function after showing message
  }
  
  // Game is active
  if (btn3.innerText == "") {
    // Button is empty, proceed with marking it
    btn3.innerText = chance;
    if (chance == "x") {
      chance = "0";
    } else {
      chance = "x";
    }
    
    // Now check for win after a valid move
    let result = checkWin();
    if (result == "draw") {
      gameactive = false;
      msg.innerText = "It's a DRAW!";
      msg.style.opacity = 1;
      setTimeout(() => {
        msg.style.opacity = 0;
      }, 1000);
    } else if (result === null) {
      msg.style.opacity = 0;
    } else {
      gameactive = false;
      msg.innerText = `Player ${result} is WIN`;
      msg.style.opacity = 1;
      setTimeout(() => {
        msg.style.opacity = 0;
      }, 1000);
    }
  } else {
    // Button already has a mark, show invalid message
    msg.style.opacity = 1;
    msg.innerText = "Invalid";
    setTimeout(() => {
      msg.style.opacity = 0;
    }, 1000);
    // Don't check for win since no valid move was made
  }
}
btn4.onclick = () =>{
    if (gameactive == false) {
    msg.style.opacity = 1;
    msg.innerText = `Player ${result} is WIN`;
    setTimeout(() => {
      msg.style.opacity = 0;
    }, 1000);
    return; // Exit the function after showing message
  }
  
  // Game is active
  if (btn4.innerText == "") {
    // Button is empty, proceed with marking it
    btn4.innerText = chance;
    if (chance == "x") {
      chance = "0";
    } else {
      chance = "x";
    }
    
    // Now check for win after a valid move
    let result = checkWin();
    if (result == "draw") {
      gameactive = false;
      msg.innerText = "It's a DRAW!";
      msg.style.opacity = 1;
      setTimeout(() => {
        msg.style.opacity = 0;
      }, 1000);
    } else if (result === null) {
      msg.style.opacity = 0;
    } else {
      gameactive = false;
      msg.innerText = `Player ${result} is WIN`;
      msg.style.opacity = 1;
      setTimeout(() => {
        msg.style.opacity = 0;
      }, 1000);
    }
  } else {
    // Button already has a mark, show invalid message
    msg.style.opacity = 1;
    msg.innerText = "Invalid";
    setTimeout(() => {
      msg.style.opacity = 0;
    }, 1000);
    // Don't check for win since no valid move was made
  }
}
btn5.onclick = () =>{
    if (gameactive == false) {
    msg.style.opacity = 1;
    msg.innerText = `Player ${result} is WIN`;
    setTimeout(() => {
      msg.style.opacity = 0;
    }, 1000);
    return; // Exit the function after showing message
  }
  
  // Game is active
  if (btn5.innerText == "") {
    // Button is empty, proceed with marking it
    btn5.innerText = chance;
    if (chance == "x") {
      chance = "0";
    } else {
      chance = "x";
    }
    
    // Now check for win after a valid move
    let result = checkWin();
    if (result == "draw") {
      gameactive = false;
      msg.innerText = "It's a DRAW!";
      msg.style.opacity = 1;
      setTimeout(() => {
        msg.style.opacity = 0;
      }, 1000);
    } else if (result === null) {
      msg.style.opacity = 0;
    } else {
      gameactive = false;
      msg.innerText = `Player ${result} is WIN`;
      msg.style.opacity = 1;
      setTimeout(() => {
        msg.style.opacity = 0;
      }, 1000);
    }
  } else {
    // Button already has a mark, show invalid message
    msg.style.opacity = 1;
    msg.innerText = "Invalid";
    setTimeout(() => {
      msg.style.opacity = 0;
    }, 1000);
    // Don't check for win since no valid move was made
  }
}
btn6.onclick = () =>{
    if (gameactive == false) {
        msg.style.opacity = 1;
        msg.innerText = `Player ${result} is WIN`;
        setTimeout(() => {
          msg.style.opacity = 0;
        }, 1000);
        return; // Exit the function after showing message
      }
      
      // Game is active
      if (btn6.innerText == "") {
        // Button is empty, proceed with marking it
        btn6.innerText = chance;
        if (chance == "x") {
          chance = "0";
        } else {
          chance = "x";
        }
        
        // Now check for win after a valid move
        let result = checkWin();
        if (result == "draw") {
          gameactive = false;
          msg.innerText = "It's a DRAW!";
          msg.style.opacity = 1;
          setTimeout(() => {
            msg.style.opacity = 0;
          }, 1000);
        } else if (result === null) {
          msg.style.opacity = 0;
        } else {
          gameactive = false;
          msg.innerText = `Player ${result} is WIN`;
          msg.style.opacity = 1;
          setTimeout(() => {
            msg.style.opacity = 0;
          }, 1000);
        }
      } else {
        // Button already has a mark, show invalid message
        msg.style.opacity = 1;
        msg.innerText = "Invalid";
        setTimeout(() => {
          msg.style.opacity = 0;
        }, 1000);
        // Don't check for win since no valid move was made
      }
}
btn7.onclick = () =>{
    if (gameactive == false) {
    msg.style.opacity = 1;
    msg.innerText = `Player ${result} is WIN`;
    setTimeout(() => {
      msg.style.opacity = 0;
    }, 1000);
    return; // Exit the function after showing message
  }
  
  // Game is active
  if (btn7.innerText == "") {
    // Button is empty, proceed with marking it
    btn7.innerText = chance;
    if (chance == "x") {
      chance = "0";
    } else {
      chance = "x";
    }
    
    // Now check for win after a valid move
    let result = checkWin();
    if (result == "draw") {
      gameactive = false;
      msg.innerText = "It's a DRAW!";
      msg.style.opacity = 1;
      setTimeout(() => {
        msg.style.opacity = 0;
      }, 1000);
    } else if (result === null) {
      msg.style.opacity = 0;
    } else {
      gameactive = false;
      msg.innerText = `Player ${result} is WIN`;
      msg.style.opacity = 1;
      setTimeout(() => {
        msg.style.opacity = 0;
      }, 1000);
    }
  } else {
    // Button already has a mark, show invalid message
    msg.style.opacity = 1;
    msg.innerText = "Invalid";
    setTimeout(() => {
      msg.style.opacity = 0;
    }, 1000);
    // Don't check for win since no valid move was made
  }
}
btn8.onclick = () =>{
    if (gameactive == false) {
    msg.style.opacity = 1;
    msg.innerText = `Player ${result} is WIN`;
    setTimeout(() => {
      msg.style.opacity = 0;
    }, 1000);
    return; // Exit the function after showing message
  }
  
  // Game is active
  if (btn8.innerText == "") {
    // Button is empty, proceed with marking it
    btn8.innerText = chance;
    if (chance == "x") {
      chance = "0";
    } else {
      chance = "x";
    }
    
    // Now check for win after a valid move
    let result = checkWin();
    if (result == "draw") {
      gameactive = false;
      msg.innerText = "It's a DRAW!";
      msg.style.opacity = 1;
      setTimeout(() => {
        msg.style.opacity = 0;
      }, 1000);
    } else if (result === null) {
      msg.style.opacity = 0;
    } else {
      gameactive = false;
      msg.innerText = `Player ${result} is WIN`;
      msg.style.opacity = 1;
      setTimeout(() => {
        msg.style.opacity = 0;
      }, 1000);
    }
  } else {
    // Button already has a mark, show invalid message
    msg.style.opacity = 1;
    msg.innerText = "Invalid";
    setTimeout(() => {
      msg.style.opacity = 0;
    }, 1000);
    // Don't check for win since no valid move was made
  }
}
btn9.onclick = () =>{
    if (gameactive == false) {
    msg.style.opacity = 1;
    msg.innerText = `Player ${result} is WIN`;
    setTimeout(() => {
      msg.style.opacity = 0;
    }, 1000);
    return; // Exit the function after showing message
  }
  
  // Game is active
  if (btn9.innerText == "") {
    // Button is empty, proceed with marking it
    btn9.innerText = chance;
    if (chance == "x") {
      chance = "0";
    } else {
      chance = "x";
    }
    
    // Now check for win after a valid move
    let result = checkWin();
    if (result == "draw") {
      gameactive = false;
      msg.innerText = "It's a DRAW!";
      msg.style.opacity = 1;
      setTimeout(() => {
        msg.style.opacity = 0;
      }, 1000);
    } else if (result === null) {
      msg.style.opacity = 0;
    } else {
      gameactive = false;
      msg.innerText = `Player ${result} is WIN`;
      msg.style.opacity = 1;
      setTimeout(() => {
        msg.style.opacity = 0;
      }, 1000);
    }
  } else {
    // Button already has a mark, show invalid message
    msg.style.opacity = 1;
    msg.innerText = "Invalid";
    setTimeout(() => {
      msg.style.opacity = 0;
    }, 1000);
    // Don't check for win since no valid move was made
  }
}

// Function to check for win
function checkWin() {
    // Check rows
    if(btn1.innerText != "" && btn1.innerText == btn2.innerText && btn1.innerText == btn3.innerText) return btn1.innerText;
    if(btn4.innerText != "" && btn4.innerText == btn5.innerText && btn4.innerText == btn6.innerText) return btn4.innerText;
    if(btn7.innerText != "" && btn7.innerText == btn8.innerText && btn7.innerText == btn9.innerText) return btn7.innerText;
    
    // Check columns
    if(btn1.innerText != "" && btn1.innerText == btn4.innerText && btn1.innerText == btn7.innerText) return btn1.innerText;
    if(btn2.innerText != "" && btn2.innerText == btn5.innerText && btn2.innerText == btn8.innerText) return btn2.innerText;
    if(btn3.innerText != "" && btn3.innerText == btn6.innerText && btn3.innerText == btn9.innerText) return btn3.innerText;
    
    // Check diagonals
    if(btn1.innerText != "" && btn1.innerText == btn5.innerText && btn1.innerText == btn9.innerText) return btn1.innerText;
    if(btn3.innerText != "" && btn3.innerText == btn5.innerText && btn3.innerText == btn7.innerText) return btn3.innerText;
    
    // Check for draw
    if(btn1.innerText != "" && btn2.innerText != "" && btn3.innerText != "" && 
       btn4.innerText != "" && btn5.innerText != "" && btn6.innerText != "" && 
       btn7.innerText != "" && btn8.innerText != "" && btn9.innerText != "") {
      return "draw";
    }
    
    return null;
  }

reset.onclick = () =>{
    btn1.innerText = "";
    btn2.innerText = "";
    btn3.innerText = "";
    btn4.innerText = "";
    btn5.innerText = "";
    btn6.innerText = "";
    btn7.innerText = "";
    btn8.innerText = "";
    btn9.innerText = "";

    gameactive = true;
    chance = "x";

    msg.innerText = "Game Restart";
    msg.style.opacity = 1;
    setTimeout(() => {
        msg.style.opacity = 0;
    },1000);
}