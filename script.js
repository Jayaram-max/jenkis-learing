const actionButton = document.getElementById('actionButton');
const messageDiv = document.getElementById('message');

actionButton.addEventListener('click', () => {
    document.body.classList.toggle('active');
    messageDiv.textContent = 'Button clicked! Jenkins pipeline ready.';
});
