let dark = false;

function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);
}

function update() {
    console.log(sessionStorage.getItem("dark"));
    const style1 = document.getElementById("switcher1");
    if (sessionStorage.getItem("dark") === "true") {
        style1.innerHTML = "LIGHT";
        swapStyleSheet("dark.css");
        dark = true;
        console.log("dark true in index")
    }
    else {
        style1.innerHTML = "DARK";
        swapStyleSheet("light.css");
        dark = false
        console.log("dark false in index")
    }

    initiate()
}

function initiate() {
    const style1 = document.getElementById("switcher1");

    style1.onclick = function() {
        if (sessionStorage.getItem("dark") !== "true") {
            style1.innerHTML = "LIGHT";
            swapStyleSheet("dark.css");
            dark = true;
            console.log("dark true in index")
            sessionStorage.setItem("dark","true");
        }
        else {
            style1.innerHTML = "DARK";
            swapStyleSheet("light.css");
            dark = false
            console.log("dark false in index")
            sessionStorage.setItem("dark","false");
        }
    };
}