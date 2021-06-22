const images = ["bg_0.jpg", "bg_1.jpg", "bg_2.jpg"];
// 1. Math.random()으로 랜덤 수를 호출(0~1), 거기에 * images.length를 곱해 배열 수 만큼 호출, .random()은 소수점이기 때문에 Math.floor를 통해 내림
const chosenImage = images[Math.floor(Math.random() * images.length )];
// 2. document.createElement()를 통해 HTML 태그 생성
const bgImage = document.createElement("img");
// 3. bgImages.src로 경로 설정
bgImage.src = `images/${chosenImage}`;
// 4. document.body.appendChild()로 HTMl 가장뒤에 적용 (prepend = 제일 앞에 적용)
document.body.appendChild(bgImage);