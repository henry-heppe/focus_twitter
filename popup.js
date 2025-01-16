const toggleSwitch = document.getElementById('toggleSwitch');

// Initialize the toggle state when the popup loads
chrome.runtime.sendMessage({ action: 'getToggleState' }, (response) => {
    if (response && response.toggleState !== undefined) {
        toggleSwitch.checked = response.toggleState;
    }
});

// Update the toggle state when the switch is toggled
toggleSwitch.addEventListener('change', () => {
    const newState = toggleSwitch.checked;

    // Notify the background script of the new state
    chrome.runtime.sendMessage({ action: 'setToggleState', state: newState });

    // Reload the relevant tab(s)
    chrome.tabs.query({ url: ["*://twitter.com/*", "*://x.com/*"] }, (tabs) => {
        tabs.forEach((tab) => {
            chrome.tabs.reload(tab.id);
        });
    });
});
