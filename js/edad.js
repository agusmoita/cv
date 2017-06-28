window.onload = function () {
    var year = 1994
    var month = 9
    var day = 6
    var today = new Date()
    var age = today.getFullYear()-year
    age = 
        (today.getMonth() < month || 
        (today.getMonth() == month && today.getDate() < day)) 
        ? --age : age
    document.getElementById('edad').innerHTML = age
}