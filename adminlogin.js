// Simulasi Database (DatabaseNeocore)
const database = [
  { username: "admin", password: "12345" },
  { username: "superadmin", password: "admin123" },
];

// Fungsi untuk menangani login
function handleLogin(event) {
  event.preventDefault(); // Mencegah reload halaman saat form dikirim

  // Ambil input username dan password dari form
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Cari user dalam "database"
  const user = database.find(
    (admin) => admin.username === username && admin.password === password
  );

  if (user) {
    // Jika login berhasil, redirect ke Administration.html
    window.location.href = "Administration.html";
  } else {
    // Jika login gagal, tampilkan pesan error
    const errorElement = document.getElementById("error");
    errorElement.textContent = "Username atau password salah!";
  }
}

// Event listener untuk form login
document.getElementById("loginForm").addEventListener("submit", handleLogin);
