function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Menambahkan nol di depan angka jika kurang dari 10
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;

    // Memperbarui elemen HTML dengan ID "clock" dengan waktu yang baru
    document.getElementById("clock").innerHTML = timeString;
}

// Memanggil fungsi updateClock setiap detik
setInterval(updateClock, 1000);
