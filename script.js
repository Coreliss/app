function updateTime() {
    const cubaTime = new Date().toLocaleString("es-ES", { timeZone: "America/Havana" });
    const usaTime = new Date().toLocaleString("es-ES", { timeZone: "America/New_York" });
    const spainTime = new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" });

    document.getElementById("cuba-time").innerText = cubaTime;
    document.getElementById("usa-time").innerText = usaTime;
    document.getElementById("spain-time").innerText = spainTime;
}

setInterval(updateTime, 1000);
updateTime();
