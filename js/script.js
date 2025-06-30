const imagesCartes = [
  "../src/t1.jpg",
  "../src/t2.jpg",
  "../src/t3.jpg",
  "../src/t7.jpg",
  "../src/t5.jpg",
  "../src/t6.jpg",
];

function tirerCarte() {
  const index = Math.floor(Math.random() * imagesCartes.length);
  const carteImage = document.getElementById("carte");
  carteImage.src = imagesCartes[index];
  carteImage.style.display = "block";
}

const imagesCartes2 = [
  "../src/i1.jpg",
  "../src/i2.jpg",
  "../src/i3.jpg",
  "../src/i4.jpg",
];

function tirerCarte2() {
  const index2 = Math.floor(Math.random() * imagesCartes2.length);
  const carteImage2 = document.getElementById("carte2");
  carteImage2.src = imagesCartes2[index2];
  carteImage2.style.display = "block";
}