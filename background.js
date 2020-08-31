const browser = 'aboregie';
const safariService = `http://localhost:3015/?browser=${browser}&url=`;
const SafariEndpoint = safariService;

function callUrl(url) {
    fetch(SafariEndpoint + url, {
        mode: "no-cors",
    })
        .then()
        .catch(err => console.error(err));
}

chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        callUrl(tabs[0].url);
    });
});
