let themeClick=1;

document.getElementById("theme").addEventListener("click",function(){
    
     if(themeClick==1)
            { 
                document.getElementById("body").classList.add("bg-orange-100");
                document.getElementById("body").classList.remove("bg-[#f4f7ff]");
                themeClick=themeClick+1;
            }
    else if(themeClick==2)
             { document.getElementById("body").classList.add("bg-rose-200");
                document.getElementById("body").classList.remove("bg-orange-100");
                document.getElementById("body").classList.remove("bg-[#f4f7ff]");
                 themeClick=themeClick+1;
                }
           else if(themeClick==3){
                    themeClick=0;
                    document.getElementById("body").classList.remove("bg-orange-100");
                    document.getElementById("body").classList.remove("bg-rose-200"); 
                    document.getElementById("body").classList.add("bg-[#f4f7ff]");

                    themeClick=themeClick+1; 
                   }
});

document.getElementById("blog").addEventListener("click",function(){
    window.location.href="Blog.html"
})

const date = new Date();
const week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const month =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
document.getElementById("day").innerText = `${week[date.getDay()]}  ,`;
document.getElementById("month").innerText= `${month[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`

const taskNUmber = document.getElementById("task-number").innerText;
let convertedTaskNumber = parseInt(taskNUmber);

const pointNUmber = document.getElementById("point-number").innerText;
let convertedPointNumber = parseInt(pointNUmber);

let completedTask=0;

// card-1
document.getElementById("card-1").addEventListener("click",function(){
    completedTask=completedTask+1;
    alert("Board updated successfully");
    if(completedTask===6){
        alert("congratulations!!!you have completed all current task");
    }

    convertedTaskNumber=convertedTaskNumber-1;
    convertedPointNumber=convertedPointNumber+1;
    document.getElementById("task-number").innerText =convertedTaskNumber;
    document.getElementById("point-number").innerText= convertedPointNumber;
    document.getElementById("card-1").disabled = true;
    document.getElementById("card-1").classList.add("bg-[#9BA8F8]");
    document.getElementById("card-1").classList.remove("bg-blue-800");

    const task = document.getElementById("task-1").innerText;
    const h1 = document.createElement("h1");
    h1.innerText=`you have completed the task ${task} at ${new Date().toLocaleTimeString()}`;
    h1.classList.add("bg-[#f4f7ff]");
    h1.classList.add("mb-4");
    h1.classList.add("p-2");
    h1.classList.add("opacity-60");
    h1.classList.add("rounded-lg");
    h1.classList.add("text-sm");
    document.getElementById("history").appendChild(h1);

});
// card-2
document.getElementById("card-2").addEventListener("click",function(){
    completedTask=completedTask+1;
    alert("Board updated successfully");
    if(completedTask===6){
        alert("congratulations!!!you have completed all current task");
    }

    convertedTaskNumber=convertedTaskNumber-1;
    convertedPointNumber=convertedPointNumber+1;
    document.getElementById("task-number").innerText =convertedTaskNumber;
    document.getElementById("point-number").innerText= convertedPointNumber;
    document.getElementById("card-2").disabled = true;
    document.getElementById("card-2").classList.add("bg-[#9BA8F8]");
    document.getElementById("card-2").classList.remove("bg-blue-800");

    const task = document.getElementById("task-2").innerText;
    const h1 = document.createElement("h1");
    h1.innerText=`you have completed the task ${task} at ${new Date().toLocaleTimeString()}`;
    h1.classList.add("bg-[#f4f7ff]");
    h1.classList.add("mb-4");
    h1.classList.add("p-2");
    h1.classList.add("opacity-60");
    h1.classList.add("rounded-lg");
    h1.classList.add("text-sm");
    document.getElementById("history").appendChild(h1);

});

// card-3

document.getElementById("card-3").addEventListener("click",function(){
    completedTask=completedTask+1;
    alert("Board updated successfully");
    if(completedTask===6){
        alert("congratulations!!!you have completed all current task");
    }

    convertedTaskNumber=convertedTaskNumber-1;
    convertedPointNumber=convertedPointNumber+1;
    document.getElementById("task-number").innerText =convertedTaskNumber;
    document.getElementById("point-number").innerText= convertedPointNumber;
    document.getElementById("card-3").disabled = true;
    document.getElementById("card-3").classList.add("bg-[#9BA8F8]");
    document.getElementById("card-3").classList.remove("bg-blue-800");

    const task = document.getElementById("task-3").innerText;
    const h1 = document.createElement("h1");
    h1.innerText=`you have completed the task ${task} at ${new Date().toLocaleTimeString()}`;
    h1.classList.add("bg-[#f4f7ff]");
    h1.classList.add("mb-4");
    h1.classList.add("p-2");
    h1.classList.add("opacity-60");
    h1.classList.add("rounded-lg");
    h1.classList.add("text-sm");
    document.getElementById("history").appendChild(h1);

});

// card-4

document.getElementById("card-4").addEventListener("click",function(){
    completedTask=completedTask+1;
    alert("Board updated successfully");
    if(completedTask===6){
        alert("congratulations!!!you have completed all current task");
    }

    convertedTaskNumber=convertedTaskNumber-1;
    convertedPointNumber=convertedPointNumber+1;
    document.getElementById("task-number").innerText =convertedTaskNumber;
    document.getElementById("point-number").innerText= convertedPointNumber;
    document.getElementById("card-4").disabled = true;
    document.getElementById("card-4").classList.add("bg-[#9BA8F8]");
    document.getElementById("card-4").classList.remove("bg-blue-800");

    const task = document.getElementById("task-4").innerText;
    const h1 = document.createElement("h1");
    h1.innerText=`you have completed the task ${task} at ${new Date().toLocaleTimeString()}`;
    h1.classList.add("bg-[#f4f7ff]");
    h1.classList.add("mb-4");
    h1.classList.add("p-2");
    h1.classList.add("opacity-60");
    h1.classList.add("rounded-lg");
    h1.classList.add("text-sm");
    document.getElementById("history").appendChild(h1);

});

// card-5

document.getElementById("card-5").addEventListener("click",function(){
    completedTask=completedTask+1;
    alert("Board updated successfully");
    if(completedTask===6){
        alert("congratulations!!!you have completed all current task");
    }

    convertedTaskNumber=convertedTaskNumber-1;
    convertedPointNumber=convertedPointNumber+1;
    document.getElementById("task-number").innerText =convertedTaskNumber;
    document.getElementById("point-number").innerText= convertedPointNumber;
    document.getElementById("card-5").disabled = true;
    document.getElementById("card-5").classList.add("bg-[#9BA8F8]");
    document.getElementById("card-5").classList.remove("bg-blue-800");

    const task = document.getElementById("task-5").innerText;
    const h1 = document.createElement("h1");
    h1.innerText=`you have completed the task ${task} at ${new Date().toLocaleTimeString()}`;
    h1.classList.add("bg-[#f4f7ff]");
    h1.classList.add("mb-4");
    h1.classList.add("p-2");
    h1.classList.add("opacity-60");
    h1.classList.add("rounded-lg");
    h1.classList.add("text-sm");
    document.getElementById("history").appendChild(h1);

});

// card-6

document.getElementById("card-6").addEventListener("click",function(){
    completedTask=completedTask+1;
    alert("Board updated successfully");
    if(completedTask===6){
        alert("congratulations!!!you have completed all current task");
    }

    convertedTaskNumber=convertedTaskNumber-1;
    convertedPointNumber=convertedPointNumber+1;
    document.getElementById("task-number").innerText =convertedTaskNumber;
    document.getElementById("point-number").innerText= convertedPointNumber;
    document.getElementById("card-6").disabled = true;
    document.getElementById("card-6").classList.add("bg-[#9BA8F8]");
    document.getElementById("card-6").classList.remove("bg-blue-800");

    const task = document.getElementById("task-6").innerText;
    const h1 = document.createElement("h1");
    h1.innerText=`you have completed the task ${task} at ${new Date().toLocaleTimeString()}`;
    h1.classList.add("bg-[#f4f7ff]");
    h1.classList.add("mb-4");
    h1.classList.add("p-2");
    h1.classList.add("opacity-60");
    h1.classList.add("rounded-lg");
    h1.classList.add("text-sm");
    document.getElementById("history").appendChild(h1);

});

const history = document.getElementById("history"); 
const deleteHistory = document.getElementById("clear-history");
deleteHistory.addEventListener("click",function(){
    while (history.hasChildNodes()) {
        history.removeChild(history.firstChild);
      }
})