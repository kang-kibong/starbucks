const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
// .search 요소 내부에 input 태그를 선택한다.

searchEl.addEventListener("click", () => {
  searchInputEl.focus();
});
// search 요소를 클릭하면 input이 focus되도돌 로직을 구성한다.

searchInputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

// search클래스 요소 내부에있는 input요소가 focus되면 focused라는 클래스가 추가되도록한다. 여기서 focused는 검색 아이콘을 삭제하는 스타일링이 담긴 클래스이다.
// 추가로 placeholder속성을 추가하고 "통합검색" 값을 추가한다.
