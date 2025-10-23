let width=document.querySelector(".progress")
let start=document.querySelector(".status-text")
count=0
let button=document.querySelector("button")
button.addEventListener("click",()=>{
    let tmm=setInterval(() => {
        if(count<100){
        count++;
        width.style.width=`${count}%`
        start.textContent=`Start downloading.. ${count} %`}
        if(count===100){
            clearInterval(tmm)
             start.textContent=`Download Completed`
        }
    }, 100);
})
