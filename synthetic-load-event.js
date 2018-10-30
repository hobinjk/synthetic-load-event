// performance.timing.loadEventEnd is equivalent to complete
// css load almost replicates "complete" but doesn't include time-to-recalculate
console.log(performance.now());
let start = Date.now();
let perfStart = performance.now();
document.addEventListener('readystatechange', function(event) {
  console.log(event.target.readyState, performance.now());
  if (event.target.readyState === 'complete') {
    setTimeout(function() {
      console.log('loadEventEnd', performance.timing.loadEventEnd - start + perfStart);
    }, 300);
  }
});

Array.from(document.querySelectorAll('script')).forEach(script => {
  script.addEventListener('load', function() {
    console.log('script load', performance.now());
  });
});

setTimeout(() => {
  Array.from(document.querySelectorAll('link')).forEach(link => {
    let href = link.href;
    link.addEventListener('load', function() {
      console.log('link load', performance.now(), href);
    });
  });
}, 0);
