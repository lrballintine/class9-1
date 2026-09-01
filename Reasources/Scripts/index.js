let count = 0

function handleOnLoad(){
    document.getElementById("app").innerHTML=`
    <div id = counter><h1>Hello World</h1></div>
    <button id = "myButton">Click Me </button>`
    btn = document.getElementById("myButton")
    btn.addEventListener("click", function () {
    count++
    document.querySelector("#counter").innerHTML = `<h1>You Have Clicked ${count} times </h1>`
    })
}