document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('saveToJpie');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'http://www.jinglepie.com/nodes/new';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'text';
      i.name = 'link';
      i.value = tab.url;
      f.appendChild(i);
      var name = d.createElement('input');
      name.type = 'text';
      name.name = 'name';
      name.value = 'fromTheJpieExt';
      f.appendChild(name);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);
