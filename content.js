
var PlayInterval;
var PlayCount;
var ShowExplanationTimeout;
var WaitResLoadedTime = 100;

//console.log("content inited");

chrome.runtime.sendMessage({type: "from content"}, function(response) {
  var param = response.val;
  PlayInterval = parseInt(param.interval);
  PlayCount = parseInt(param.count);
  ShowExplanationTimeout = parseInt(param.explanation);
  //console.log(PlayInterval + " " + PlayCount + " " + ShowExplanationTimeout);
  initMain();
});

var count = 0;
function initMain(){
  FocusInput();
  Try2Play();
  setTimeout(ShowExplanation, ShowExplanationTimeout);
}


function FocusInput(){
  var inp = $('input[name="word"]');
  inp.focus();
}

function Try2Play(){
  if(count < PlayCount)
  {
    var time = count === 0 ? WaitResLoadedTime : PlayInterval;
    timerID = setTimeout(PronouceWord, time);
    count++;
  }
}

function PronouceWord(){
  var btn = $('div.bdccontdivs div a img');
  if(btn == null){
    console.log("btn is null!")
  }
  else {
    if('click' in btn){
      btn.click();
      console.log('Pronounce Word')
    }
    else {
      console.log('btn has no click method')
    }
  }

  Try2Play();
}

function ShowExplanation(){
  var btn = $('input[value="显示词义"]');
  btn.click();
  console.log('ShowBtn Clicked');
}
