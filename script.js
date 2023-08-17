const container = document.querySelector(".container"),
  urlInput = container.querySelector(".form input"),
  generateBtn = container.querySelector(".form button"),
  qrImg = container.querySelector(".qrCode img");

generateBtn.addEventListener("click", () => {
  generateBtn.innerText = "Generating QR code";
  let urlValue = urlInput.value;
  if (!urlValue) return;
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${urlValue}`;
  qrImg.addEventListener("load", () => {
    generateBtn.innerText = "Generate QR code";
    container.classList.add("active");
  });
});

urlInput.addEventListener("click", () => {
  if (!urlInput) {
    container.classList.remove("active");
  }
});
