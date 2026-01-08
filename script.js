const form = document.getElementById("recommendation-form");
const textarea = document.getElementById("new-recommendation");
const list = document.getElementById("recommendation-list");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // sayfanın yenilenmesini engelle

  const text = textarea.value.trim();
  if (!text) return;

  // Yeni recommendation elemanı oluştur
  const div = document.createElement("div");
  div.className = "recommendation";
  div.textContent = text;

  // Listeye ekle (Task 7)
  list.appendChild(div);

  // Textarea’yı temizle
  textarea.value = "";

  // Pop-up / onay mesajı (Task 9)
  alert("Thank you! Your recommendation has been added.");
});
