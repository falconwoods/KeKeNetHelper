$(init);

function init(){
  console.log('popup inited');

  var playInterval = $('#interval');
  var playCount = $('#count');
  var showExplanation = $('#explanation');

  var interval = localStorage.getItem('interval');
  var count = localStorage.getItem('count');
  var explanationTimeout = localStorage.getItem('explanation');

  playInterval.val(interval);
  playCount.val(count);
  showExplanation.val(explanationTimeout);

  playInterval.change(()=>{
    localStorage.setItem('interval', playInterval.val());
  });

  playCount.change(()=>{
    localStorage.setItem('count', playCount.val());
  });

  showExplanation.change(()=>{
    localStorage.setItem('explanation', showExplanation.val());
  });
}
