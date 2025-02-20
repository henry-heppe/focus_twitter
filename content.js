
function effects() {
    const observer = new MutationObserver(() => {
        var toRemove = [];
        toRemove.push('[aria-label="X"]');
        toRemove.push('[aria-label="Startseite"]');
        toRemove.push('[aria-label="Suchen und entdecken"]');
        toRemove.push('[aria-label="Mitteilungen"]');
        toRemove.push('[aria-label="Direktnachrichten"]');
        toRemove.push('[aria-label="Grok"]');
        toRemove.push('[aria-label="Communities"]');
        toRemove.push('[aria-label="Premium"]');
        toRemove.push('[aria-label="Verifizierte Organisationen"]');
        toRemove.push('[aria-label="Profil"]');
        toRemove.push('[aria-label="Mehr Menübefehle"]');
        toRemove.push('[aria-label="Posten"]');
        toRemove.push('[aria-label="Account-Menü"]');
        toRemove.push('[aria-label="Zurück"]');
        toRemove.push('[data-testid="sidebarColumn"]');
        toRemove.push('[data-testid="DMDrawerHeader"]');

        for (var i = 0; i < toRemove.length; i++) {
            console.log(toRemove[i]);
            item = document.querySelector(toRemove[i]);
            if (item != null) {
                item.style.visibility = 'hidden';
            }
        }

        items = document.querySelectorAll('[data-testid="unlike"]');
        if (items.length != 0) {
            for (var j = 0; j < items.length; j++) {
                tweet = items[j].closest('[data-testid="tweet"]')
                tweet.remove();
            }
        }

        items = document.querySelectorAll('span');
        if (items.length != 0) {
            for (var j = 0; j < items.length; j++) {
                if (items[j].textContent == 'Gesponsert') {
                    tweet = items[j].closest('[data-testid="tweet"]')
                    tweet.style.visibility = 'hidden';
                }
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

// Check the toggle state when the script loads
chrome.runtime.sendMessage({ action: 'getToggleState' }, (response) => {
    if (response && response.toggleState) {
        effects(); // Only enable effects if the toggle is ON
    } else {
        console.log("Toggle is OFF. Content script will not run.");
    }
});