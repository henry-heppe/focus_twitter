const observer = new MutationObserver(() => {
    var toRemove = [];
    toRemove.push('.css-175oi2r.r-dnmrzs.r-1559e4e');
    for(var i=0;i<toRemove.length;i++) {
        console.log(toRemove[i]);
        item = document.querySelector(toRemove[i]);
        if(item != null) {
            item.style.visibility = 'hidden';
        }
    }
  });
  
observer.observe(document.body, { childList: true, subtree: true });


  
  