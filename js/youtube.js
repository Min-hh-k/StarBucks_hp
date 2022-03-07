
     // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";AIzaSyAC2AHCh03GZMs_OguFpkihpZgBYAh8AMw
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.

      function onYouTubeIframeAPIReady() {
        //  <div id="player"></div>
        new YT.Player('player', {
          videoId: 'An6LvWQuj_8', // youtube 영상 id ,, 링크 옆에 있음
          playerVars: {
            autoplay: true, //자동 재생
            loop: true, //반복 재생 유무
            playlist: 'An6LvWQuj_8', // 반복재생 할 경우 loop 다음에 playlist: id 추가
            key: AIzaSyAC2AHCh03GZMs_OguFpkihpZgBYAh8AMw
          },
          events: { //영상이 준비 되었을 때의 효과
            onReady: function (event) {
              event.target.mute() // 음소거
            }
          }
        });
      }

