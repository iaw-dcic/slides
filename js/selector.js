function loadSlides(slides) {
  $("body").load("slides_master.html", function() {
    $("#slides").load("slides/" + slides + ".html", function() {
      $("#slides").children().unwrap();
      window.slidedeck = new SlideDeck();
      $(".presentations").hide();
    });
  })
}
function showOptions() {
  window.history.pushState({}, 'Options', "#");
  $("body").removeClass("loaded").load("select.html");
}

function load() {
  var hashObj = getHashObj(); 
  if (hashObj.presentation !== undefined)
    loadSlides(hashObj.presentation);
  else
    showOptions();
}

function getHashObj() {
  var hash = document.location.hash.substring(1);
  var hashObj = {}; 
  hash.split('&').forEach(function(x){
    var arr = x.split('=');
    arr[1] && (hashObj[arr[0]] = arr[1]);
  });
  return hashObj;
}

function createHashString(name, slide) {
  return '#' + 'presentation=' + name + '&slide=' + slide;
}
window.onload = load;