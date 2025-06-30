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

const imagesCartes2 = [
  "../src/c1.jpg",
  "../src/c2.jpg",
];

function tirerCarte2() {
  const index2 = Math.floor(Math.random() * imagesCartes2.length);
  const carteImage2 = document.getElementById("carte2");
  carteImage2.src = imagesCartes2[index2];
  carteImage2.style.display = "block";
}