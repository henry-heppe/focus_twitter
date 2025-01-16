chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getToggleState') {
        // Respond to popup with the current toggle state
        chrome.storage.local.get(['toggleState'], (result) => {
            sendResponse({ toggleState: result.toggleState ?? false });
        });
        return true; // Keep the message channel open for asynchronous response
    }

    if (request.action === 'setToggleState') {
        // Update the toggle state in storage
        chrome.storage.local.set({ toggleState: request.state }, () => {
            console.log(`Toggle state set to: ${request.state}`);
        });
        sendResponse({ status: 'success' });
    }
});
