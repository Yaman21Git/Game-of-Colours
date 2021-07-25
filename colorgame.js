var numS=6;
var colors=[];                 //["rgb(255, 0, 0)",......]
var pickedColor;
var loop= document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");
colorDisplay.textContent =pickedColor;

init();
function init(){
	for(var i=0;i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click",function(){
	        modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="Easy" ?numS=3:numS=6;
			reset();
		});
    }

    for(var i=0;i<loop.length;i++){
		loop[i].style.backgroundColor=colors[i];
		loop[i].addEventListener("click",function(){
	        var clicledColor= this.style.backgroundColor;
	        if(clicledColor===pickedColor){
			    messageDisplay.textContent="correct";
			    resetButton.textContent="play again?";
			    changeColor(clicledColor);
			    h1.style.backgroundColor=clicledColor;
			}
			else{
				messageDisplay.textContent="wrong!!, try again";
	            this.style.backgroundColor = "#232323";
			}
		});
    }

    reset();
}

function reset(){
	  colors=generateRandomColors(numS);
      pickedColor=pickColor();
      colorDisplay.textContent =pickedColor;
      for (var i = 0; i <loop.length; i++) {
      	if(colors[i]){
      		loop[i].style.display="block";
      		loop[i].style.backgroundColor=colors[i];
      	}
      	else loop[i].style.display="none";
      }
      h1.style.backgroundColor="steelblue";
      messageDisplay.textContent="";
      resetButton.textContent="New Colors";
}

// easyBtn.addEventListener("click",function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numS=3;
//     colors=generateRandomColors(numS);
//     pickedColor=pickColor();
//     colorDisplay.textContent =pickedColor;
//     h1.style.backgroundColor="steelblue";
//     messageDisplay.textContent="";
//     for(var i=0;i<loop.length;i++){
//     	if(colors[i]){
//     		loop[i].style.backgroundColor=colors[i];
//     	}
//     	else{
//     		loop[i].style.display="none";
//     	}
//     }
//     resetButton.textContent="New Colors";
//});

// hardBtn.addEventListener("click",function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numS=6;
//     colors=generateRandomColors(numS);
//     pickedColor=pickColor();
//     colorDisplay.textContent =pickedColor;
//     h1.style.backgroundColor="steelblue";
//     messageDisplay.textContent="";
//     for(var i=0;i<loop.length;i++){
//     		loop[i].style.backgroundColor=colors[i];
//     		loop[i].style.display="block";
//     }
//     resetButton.textContent="New Colors";
// });

resetButton.addEventListener("click",function(){
      reset();
});

function changeColor(o){
    for(var i=0;i<loop.length;i++){
    	loop[i].style.backgroundColor=o;
    }
}

function pickColor(){
	var random= Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
       arr.push(randomRGB());
	}
	return arr;
}

function randomRGB(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+ r +", "+ g +", "+ b +")";
}