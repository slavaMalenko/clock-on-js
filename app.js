window.onload = function () {
    window.setInterval(function () {
        let date = new Date();

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        hours < 10 ? hours = '0' + hours : hours
        minutes < 10 ? minutes = '0' + minutes : minutes
        seconds < 10 ? seconds = '0' + seconds : seconds

        document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds}`
    }, 1000)
}