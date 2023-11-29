function time(){
    document.getElementById("time").innerHTML = "TIME IS:  " + moment().format("LTS")
  }
  
  function ip(){
    fetch("https://api.ipify.org?format=json").then(response => response.json().then(data => {
  document.getElementById("ip").innerHTML = "Your Ip: "+   data.ip
    }))
  }

  function download(){
    var s = document.createElement("a")
    var ss = new Blob([document.innerHTML] , {
        type: "text/html"
    })

    s.URL.createObjectURL(ss)
    s.href = "index.html"
    s.download =  s.URL.createObjectURL(ss)
    s.click()
    document.body.appendChild(s)

  }

  ip()
  setInterval(time,1000)