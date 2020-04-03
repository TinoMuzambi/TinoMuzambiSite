function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);
}

function update() {
    const style1 = document.getElementById("switcher1");
    if (sessionStorage.getItem("dark") === "true") {
        style1.innerHTML = "LIGHT";
        swapStyleSheet("dark.css");
    }
    else {
        style1.innerHTML = "DARK";
        swapStyleSheet("light.css");
    }

    initiate()
}

function initiate() {
    const style1 = document.getElementById("switcher1");

    style1.onclick = function() {
        if (sessionStorage.getItem("dark") !== "true") {
            style1.innerHTML = "LIGHT";
            swapStyleSheet("dark.css");
            sessionStorage.setItem("dark","true");
        }
        else {
            style1.innerHTML = "DARK";
            swapStyleSheet("light.css");
            sessionStorage.setItem("dark","false");
        }
    };
}