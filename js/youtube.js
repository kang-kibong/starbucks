const tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 유튜브 라이브러리에서 제공하는 함수명을 따라 작성해야한다.
function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    videoId: "aCkI0tjzUbQ", // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "aCkI0tjzUbQ", // 반복 재생이 true이면 반복재생할 목록을 ID로 제공해줘야함
    },

    // 영상이 준비되면 onReady 함수가 실행되고 event의 mute 함수를 통해 음소거 처리를 한다.
    events: {
      onReady: (event) => {
        event.target.mute(); // 음소거
      },
    },
  });
}
