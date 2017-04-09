var valInterval = localStorage.getItem('interval');
if(!valInterval)
  localStorage.setItem('interval', 2000);

var valCount = localStorage.getItem('count');
if(!valCount)
  localStorage.setItem('count', 4);

var explanationTimeout = localStorage.getItem('explanation');
if(!explanationTimeout)
  localStorage.setItem('explanation', 4000);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request.type);
    sendResponse(
      {
        type:"from background",
        val:GetParams()
      }
    );
  }
);

function GetParams(){
  var obj = {};
  obj.interval = localStorage.getItem('interval');
  obj.count = localStorage.getItem('count');
  obj.explanation = localStorage.getItem('explanation');
  return obj;
}
