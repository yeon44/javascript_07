let ex_01 = document.querySelector("#test_01Img"); // => 선택

let ex_01Img = function () {
  ex_01.setAttribute("src", "img/smurfs_img.jpg");
  ex_01.setAttribute("alt", "스머프포스터");
  ex_01.style.width = "160px";
};
// => 호출
ex_01Img();

let ex_02arr = [
  {
    img: "./img/smurf_movie.png",
    alt: "스머프의 모험",
  },
];

let ex_02 = document.querySelector("div"); // => div 태그 선택

function ex_02Img(img, alt) {}
