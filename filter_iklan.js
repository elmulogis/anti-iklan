chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: true };
  },
  {
    urls:
      [
        "*://*.doubleclick.net/*",
        "*://*.googleadservices.com/*",
        "*://*.googlesyndication.com/*",
        "*://*.moat.com/*",
        "*://*.popin.cc/*",
        "*://*.mgid.com/*"
      ]
  },
  ["blocking"]
);