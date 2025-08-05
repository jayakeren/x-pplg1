const products = [
  {
    nama: "Wearpack Gim Development",
    harga: "Rp100.000",
    gambar: "c:\Users\USER\Downloads\Baju GIM Development by jaya.jpeg",
    rating: 4
  },
  {
    nama: "Baju DKV",
    harga: "Rp100.500",
    gambar: "c:\Users\USER\Downloads\Baju DKV.jpeg",
    rating: 5
  },
  {
    nama: "Wearpack Teknik Grafika",
    harga: "Rp280.000",
    gambar: "https://via.placeholder.com/160x120?text=Sneakers",
    rating: 3
  },
  {
    nama: "Kemeja Putih",
    harga: "Rp99.000",
    gambar: "https://via.placeholder.com/160x120?text=Kemeja",
    rating: 4
  }
];

const list = document.getElementById("product-list");
const searchInput = document.getElementById("search");

function tampilkanProduk(data) {
  list.innerHTML = "";
  data.forEach((p, index) => {
    let stars = "⭐".repeat(p.rating);
    list.innerHTML += `
      <div class="card">
        <img src="${p.gambar}" alt="${p.nama}">
        <div class="info">
          <h4>${p.nama}</h4>
          <p>${p.harga}</p>
          <div class="actions">
            <span class="rating">${stars}</span>
            <span class="like" onclick="toggleLike(this)">❤️</span>
          </div>
          <button onclick="beli('${p.nama}')">🛒 Beli Sekarang</button>
        </div>
      </div>
    `;
  });
}

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const hasil = products.filter(p => p.nama.toLowerCase().includes(keyword));
  tampilkanProduk(hasil);
});

function toggleLike(el) {
  el.classList.toggle("active");
}

function beli(namaProduk) {
  alert("Kamu membeli: " + namaProduk + " ✅");
}

tampilkanProduk(products);