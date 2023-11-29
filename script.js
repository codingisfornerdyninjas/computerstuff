function time(){
    document.getElementById("time").innerHTML = "TIME IS:  " + moment().format("LTS")
  }
  
  function ip(){
    fetch("https://api.ipify.org?format=json").then(response => response.json().then(data => {
  document.getElementById("ip").innerHTML = "Your Ip: "+   data.ip
    }))
  }
  ip()
  setInterval(time,1000)