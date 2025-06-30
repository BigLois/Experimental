const imagesCartes = [
  "../src/c1.jpg",
  "../src/c2.jpg",
];

function tirerCarte() {
  const index = Math.floor(Math.random() * imagesCartes.length);
  const carteImage = document.getElementById("carte");
  carteImage.src = imagesCartes[index];
  carteImage.style.display = "block";
}