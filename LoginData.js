function check_email() {
    if (email.value === "Gymnasium@Hammonense.de") {
        window.location.href = "laden.html";
        nutzername = "Hammo User";
        localStorage.setItem("nutzername", nutzername);

    } else if (email.value === "01639189000") {
        nutzername = "Bilal";
        localStorage.setItem("nutzername", nutzername);
        window.location.href = "laden.html";

    } else if (email.value === "01738500827") {
        nutzername = "Kentaro";
        localStorage.setItem("nutzername", nutzername);
        window.location.href = "laden.html";

    } else if (email.value === "01783015449") {
        nutzername = "Simon";
        localStorage.setItem("nutzername", nutzername);
        window.location.href = "laden.html";

    } else if (email.value === "01788937706") {
        nutzername = "Rayn";
        localStorage.setItem("nutzername", nutzername);
        window.location.href = "laden.html";

    } else if (email.value === "015731997882") {
        nutzername = "Jara";
        localStorage.setItem("nutzername", nutzername);
        window.location.href = "laden.html";
    }

    else if (email.value === "01795197377") {
        nutzername = "Vivien";
        localStorage.setItem("nutzername", nutzername);
        window.location.href = "laden.html";
    }

    else if (email.value === "017622934677") {
        nutzername = "Isabella";
        localStorage.setItem("nutzername", nutzername);
        window.location.href = "laden.html";
    }
    else if (email.value === "015739323411") {
        nutzername = "Amilia";
        localStorage.setItem("nutzername", nutzername);
        window.location.href = "laden.html";
    }
    else if (email.value === "017653756154") {
        nutzername = "Diya";
        localStorage.setItem("nutzername", nutzername);
        window.location.href = "laden.html";
    }
    else if (email.value === "016099683638") {
        nutzername = "Ben";
        localStorage.setItem("nutzername", nutzername);
        window.location.href = "laden.html";
    }

    else if (email.value === "01706094127") {
        nutzername = "Kaspar";
        localStorage.setItem("nutzername", nutzername);
        window.location.href = "laden.html";
    }

    else if (email.value === "lama_lama105") {
        nutzername = "Mona";
        localStorage.setItem("nutzername", nutzername);
        window.location.href = "laden.html";
    }

    else {
        fehler.innerHTML = "Ungültige Eingabe";
        email.value = "";
        versuche += 1;
        if (versuche === 5) {
            LoginInput.disabled = true;
            setTimeout(function () {
                LoginInput.disabled = false;
            }, 30000);
        }
    }
}