'use scrict';

let addLinkBtn = document.querySelector('#addLink');

addLinkBtn.addEventListener('click', () => {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() { 
    chrome.tabs.query({active:true},function(tabsArray) {
        var tab = tabsArray[0];
        var tabUrl = tab.url;
  alert(tabUrl); 
  });
      }, false);
});