function checkSession() {
    const token = sessionStorage.getItem("token");
    const expireTime = parseInt(sessionStorage.getItem("expireTime"));

    const now = new Date().getTime();

    if (!token || !expireTime || now > expireTime) {
        sessionStorage.clear();
        window.location.href = "login.html";
    }
}

// refresh session sur activité
function refreshSession() {
    const newExpireTime = new Date().getTime() + 30 * 60 * 1000;
    sessionStorage.setItem("expireTime", newExpireTime);
}

// events globaux
["click", "mousemove", "keypress"].forEach(event => {
    document.addEventListener(event, refreshSession);
});
