function pokazDate(){
    document.getElementById("data").innerText = new Date();
}
setInterval(pokazDate, 1_000);