// Set target time for today (23:59:59)
const now = new Date();
const targetTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    23, 59, 59
).getTime();

function updateCountdown() {
    const currentTime = new Date().getTime();
    let gap = targetTime - currentTime;

    if (gap < 0) {
        // Reset to next day 23:59:59 if time passed
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(23, 59, 59, 999);
        gap = tomorrow.getTime() - currentTime;
    }

    // Time units
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;

    const hours = Math.floor(gap / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    // Update HTML
    document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
}

// Run immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);
