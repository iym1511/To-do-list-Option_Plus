const clock = document.getElementById("clock");

function getClock(){
    // 현재 시간을 가져오는 객체 (함수안에 객체 넣음)
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0"); 
    const seconds = String(date.getSeconds()).padStart(2,"0");
    return `현재시간  ${hours}:${minutes}:${seconds}`
}
clock.innerHTML = getClock(); // 사이트들어가자마자 시간 시작
// 이거없으면 시간 안흘러감 기록안됨
setInterval(()=>{clock.innerHTML=getClock();}, 1000); 
