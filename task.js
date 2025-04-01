document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const clearButton = document.createElement('button');
    
    // Восстановление сохраненного текста
    editor.value = localStorage.getItem('editorContent') || '';

    // Сохранение изменений в localStorage
    editor.addEventListener('input', () => {
        localStorage.setItem('editorContent', editor.value);
    });

    // Добавление кнопки очистки
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

    // Вставляем кнопку после textarea
    editor.closest('.card').appendChild(clearButton);
});