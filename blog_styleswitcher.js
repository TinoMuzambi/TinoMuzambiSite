function swapStyleSheet(sheet) {
    document.getElementById("pagestyle2").setAttribute("href", sheet);
}

function updateB() {
    console.log(dark)
    const style1 = document.getElementById("switcher2");
    if (sessionStorage.getItem("dark") === "true") {
        style1.innerHTML = "LIGHT";
        swapStyleSheet("dark.css");
        dark = true;
        console.log("dark true in blog")
    }
    else {
        style1.innerHTML = "DARK";
        swapStyleSheet("light.css");
        dark = false
        console.log("dark false in blog")
    }
    console.log(dark)

    initiate()
}

function initiate() {
    const style1 = document.getElementById("switcher2");

    style1.onclick = function() {
        if (sessionStorage.getItem("dark") !== "true") {
            style1.innerHTML = "LIGHT";
            swapStyleSheet("dark.css");
            dark = true;
            console.log("dark true in blog")
            sessionStorage.setItem("dark","true");
        }
        else {
            style1.innerHTML = "DARK";
            swapStyleSheet("light.css");
            dark = false;
            console.log("dark false in blog")
            sessionStorage.setItem("dark","false");
        }
    };
}