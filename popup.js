$(init);

function init(){
  console.log('popup inited');

  var playInterval = $('#interval');
  var playCount = $('#count');

  var interval = localStorage.getItem('interval');
  var count = localStorage.getItem('count');
  playInterval.val(interval);
  playCount.val(count);

  playInterval.change(()=>{
    localStorage.setItem('interval', playInterval.val());
  });

  playCount.change(()=>{
    localStorage.setItem('count', playCount.val());
  });
}
