chrome.runtime.onInstalled.addListener(function() {

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {urlMatches: ".*emuparadise.*\d+"},
        // pageUrl: {urlMatches: "https:\/\/www\.emuparadise\.(?:me|org|mobi)\/.*\/(\d+)$"},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
