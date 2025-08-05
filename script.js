function login() {
  const nama = document.getElementById("nama").value;
  const password = document.getElementById("password").value;

  if (nama && password) {
    // ✅ Pindah ke dashboard
    window.location.href = "dashboard.html";
  } else {
    alert("Nama dan Password wajib diisi ya 😅");
  }
}