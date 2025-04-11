document.getElementById("sendButton").addEventListener("click", function() {

    const messageInput = document.getElementById("messageInput");
    const messageContent = messageInput.value.trim();
    if (!messageContent) {
        alert("enter a message first bubba");
        return;
    }
    
    
    const data = {
        content: messageContent,
        username: "Kazoo !!"
    };

    const webhookURL = "https://discord.com/api/webhooks/1360042809851117609/GB8X_aHwWc21LydsZYegIx-uIZC4YF8mDmhEU47-QbGE_eB_biXDLwKKDLplqK0zk74K";
    
    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert("message sent over brick to brick connection");
            messageInput.value = "";
        } else {
            alert("message failed to send :<");
            console.error("Error sending message:", response);
        }
    })
    .catch(error => {
        console.error("Fetch error:", error);
        alert("brick to brick connection is shit");
    });
});
