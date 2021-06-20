//Run progressBar
function update() {
  let element = document.getElementById("myprogressBar");   
  let width = 0;
  let count=20;
  let identity = setInterval(scene, 1000);
  function scene() {
    if (width >= 100) {
      clearInterval(identity);
    } else {
      width+=5;
      count--; 
      element.style.width = width + '%'; 
      if(count>=10)
      {
        element.innerHTML = "00:"+count * 1 ;
      }
      else
      {
        element.innerHTML = "00:0"+count * 1 ;
      }

    }
  }
}
let noOfTasks=1;


function executeMain(){ 
	if(noOfTasks>0)
	{	
  		update();
  	}
  	else
  	{
  		alert("please Add Tasks");
  	}
	noOfTasks--;
}

executeMain();

let container=document.getElementById("container");


function addTasks(){

    let taskBox=document.getElementById("task");
    noOfTasks=taskBox.value;
    for(let i=0;i<noOfTasks;i++)
    {
      let progressBar = document.createElement('div');
      progressBar.setAttribute("class","bar");
      progressBar.setAttribute("id",`bar${i}`);
      progressBar.innerText="waiting...";
      let deleteButton = document.createElement("BUTTON");
      deleteButton.setAttribute("class","btn");
      deleteButton.innerHTML = "Delete";
      deleteButton.addEventListener("click",removeTasks);
      progressBar.appendChild(deleteButton);
      container.appendChild(progressBar);
    }
    taskBox.value="";
}

let del=0;

function removeTasks(){
    noOfTasks--;
    let el = document.getElementById(`bar${del}`);
    del++;
    el.parentNode.removeChild(el);
}
