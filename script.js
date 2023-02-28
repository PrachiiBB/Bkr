score = 0;
cross = true;
document.onkeydown = function(e){
    console.log("key code is: ",e.keyCode)
    if(e.keyCode==38)  //on up arrow 
    {
        cyclist = document.querySelector('.cyclist');
        cyclist.classList.add('animateCyclist');   //to jump
        setTimeout(() => 
        {
            cyclist.classList.remove('animateCyclist')
        },1200);  //stop jumping
    }
    if(e.keyCode==39)  //on up arrow 
    {
        cyclist = document.querySelector('.cyclist');
        cyclistX = parseInt(window.getComputedStyle(cyclist,null).getPropertyValue('left'));
        cyclist.style.left = (cyclistX + 100) +"px";
        
    }
    if(e.keyCode==37)  //on up arrow 
    {
        cyclist = document.querySelector('.cyclist');
        cyclistX = parseInt(window.getComputedStyle(cyclist,null).getPropertyValue('left'));
        cyclist.style.left = (cyclistX - 100) +"px";
        
    }
}

setInterval(() =>
{
    cyclist = document.querySelector('.cyclist');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    //position of cyclist
    cxl = parseInt(window.getComputedStyle(cyclist,null).getPropertyValue('left'));
    cxr = parseInt(window.getComputedStyle(cyclist,null).getPropertyValue('right'));
    cy = parseInt(window.getComputedStyle(cyclist,null).getPropertyValue('bottom'));

    //position of obstacle
    oxl = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oxr = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('right'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('bottom'));

    offsetXL = Math.abs(cxl-oxl);
    offsetXR = Math.abs(cxr-oxr);
    offsetY = Math.abs(cy-oy);
    console.log(offsetXL,offsetXR,offsetY);

    if(offsetXL < 250 && offsetXR <250 && offsetY < 25)
    {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('animateObstacle')
    }
    else if(cross)
    {
        updateScore(score);
        score+=1;
        cross = false;
        setTimeout(()=>{
            cross = true;
        },5000);
    }
},100);

function updateScore(score)
{
    scoreCount.innerHTML = "Your Score: " + score;
}