function toggleState(roomId) {
    const room = document.getElementById(roomId);
    const statusDiv = room.querySelector('.status');
    
    if (statusDiv.classList.contains('free')) {
        statusDiv.classList.remove('free');
        statusDiv.classList.add('occupied');
        statusDiv.textContent = 'Ocupado';
    } else if (statusDiv.classList.contains('occupied')) {
        statusDiv.classList.remove('occupied');
        statusDiv.classList.add('maintenance');
        statusDiv.textContent = 'Manutenção';
    } else {
        statusDiv.classList.remove('maintenance');
        statusDiv.classList.add('free');
        statusDiv.textContent = 'Livre';
    }
}
