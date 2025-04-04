document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const clearButton = document.createElement('button');
    
    editor.value = localStorage.getItem('editorContent') || '';

    editor.addEventListener('input', () => {
        localStorage.setItem('editorContent', editor.value);
    });

    clearButton.textContent = 'Очистить содержимое';
    clearButton.style.cssText = `
        padding: 10px 20px;
        background: #f44336;
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 4px;
    `;
    
    clearButton.addEventListener('click', () => {
        editor.value = '';
        localStorage.removeItem('editorContent');
    });

    editor.closest('.card').appendChild(clearButton);
});