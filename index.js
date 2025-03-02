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

const date = new Date();
const week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const month =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
document.getElementById("day").innerText = `${week[date.getDay()]}  ,`;
document.getElementById("month").innerText= `${month[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`


