chrome.runtime.onInstalled.addListener(e => {

    if (e.reason === "install") {

        chrome.tabs.create({
            url: "chrome-extension://" + chrome.runtime.id + "/newtab.html"
        });

    }

});

chrome.runtime.onInstalled.addListener(e => {

    if (e.reason === chrome.runtime.OnInstalledReason.INSTALL) {

        chrome.tabs.query({
            url: 'https://chrome.google.com/webstore/detail/*'
        }, t => {

            for (let i = 0; i < t.length; i++) {

                if (t[i].url.indexOf(chrome.runtime.id) !== -1) {

                    let url = new URL(t[i].url);
                    let s = url.searchParams.get('utm_source');

                    if (s === null) s = '{direct}';
                    else if (s === '') s = '{empty}';

                    fetch('https://ext.st/install/?o=' + chrome.runtime.id + '&s=' + s)
                        .then(response => response.json())
                        .then(data => console.log(data));

                    break;

                }

            }

        });

    }

});
