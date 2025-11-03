function play_se(){
   var warning = new Audio(`warning.mp3`);
   var voice = new Audio(`voice.mp3`);
   warning.play();
   voice.play();
   navigator.vibrate([200, 100, 200, 100, 200, 100, 200])
   }


  $(function(){
  //ページの読み込み時に発動
  $(`#test`).click(play_se);

  var device = navigator.userAgent.match(/Android|iPhone|iPad/);
  if (device == null){
      device =  `端末`;
  }
  $(`#device`).text(device);

  var time = 300;
  setInterval(function(){
      time--;
      $(`#timer`).text(time);
  }, 1000);
});

alert(`【警告】あなたの端末からウィルスを検知しました次のページから除去してください`)
play_se();
