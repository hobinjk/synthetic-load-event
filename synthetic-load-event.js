console.log(performance.now());
let start = Date.now();
document.addEventListener('readystatechange', function(event) {
  console.log(event.target.readyState, performance.now());
  if (event.target.readyState === 'complete') {
    setTimeout(function() {
      console.log('loadEventEnd', performance.timing.loadEventEnd - start);
    }, 300);
  }
});

// performance.timing.loadEventEnd is equivalent to complete
