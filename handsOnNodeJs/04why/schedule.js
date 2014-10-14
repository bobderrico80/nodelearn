var scheduler = function(timeout, callbackfunction) {
  return function() {
    setTimeout(callbackfunction, timeout);
  }
};

(function() {
  var timeout = 1000;
  var count = 0;
  var schedule = scheduler(timeout, function doStuff(){
    console.log(++ count);
    schedule();
  });
  schedule();
})();
