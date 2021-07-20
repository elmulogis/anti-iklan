# anti-iklan
> Extension Google Chrome untuk block iklan

Ekstensi [Google Chrome](https://www.google.com/chrome/) untuk blok [URL](https://en.wikipedia.org/wiki/URL).
Ini mencontoh ekstensi [cube](https://github.com/picatz/cube.git)

## Petujuk install

1. Clone source code: `$ git clone https://github.com/elmulogis/anti-iklan.git`
2. Pada Chrome, ketik `chrome://extensions` atau klik pada menu | More Tools kemudian pilih Extensions.
3. Aktifkan Developer Mode dengan klik tombol disebelah Developer mode.
4. Click tombol LOAD UNPACKED pilih folder yang anti-iklan yang sudah didownload.

## Cara kerja ?

Google chrome memiliki API [webRequest](https://developer.chrome.com/extensions/webRequest) untuk menganalisa trafik dan untuk intersep, blok, atau memodifikasi request.

Contoh jika pingin block `domain.com`:

```javascript
chrome.webRequest.onBeforeRequest.addListener(
  function(details) { return {cancel: true}; },
  { urls: ["*://*.domain.com/*"] },
  ["blocking"]
);
```