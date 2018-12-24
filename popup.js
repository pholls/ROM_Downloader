let downloadROM = document.getElementById('downloadROM');

downloadROM.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let gid = tabs[0].url.match(/\/(\d{1,})$/)[1]
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'window.location.assign("https://www.emuparadise.me/roms/get-download.php?test=true&gid='+ gid +'");'});
  });
};
