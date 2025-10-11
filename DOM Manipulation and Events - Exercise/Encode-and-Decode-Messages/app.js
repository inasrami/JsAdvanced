function encodeAndDecodeMessages() {
    const [encodeBtn, decodeBtn] = document.querySelectorAll('button');
    const [senderTextarea, receiverTextarea] = document.querySelectorAll('textarea');

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode() {
        const message = senderTextarea.value;
        let encodedMessage = '';

        for (let char of message) {
            const asciiCode = char.charCodeAt(0);
            encodedMessage += String.fromCharCode(asciiCode + 1);
        }

        receiverTextarea.value = encodedMessage;
        senderTextarea.value = '';
    }

    function decode() {
        const encodedMessage = receiverTextarea.value;
        let decodedMessage = '';

        for (let char of encodedMessage) {
            const asciiCode = char.charCodeAt(0);
            decodedMessage += String.fromCharCode(asciiCode - 1);
        }

        receiverTextarea.value = decodedMessage;
    }
}