// Yazı alanını seç
const textArea = document.getElementById('textArea');

// Yazdırma görünümü
function printView() {
    document.querySelector('.writing-board').style.height = '100vh';
    document.querySelector('.keyboard').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
}

// Yazı alanına odaklan
function focusTextArea() {
    textArea.focus();
}

// Tüm tuşları seç
const keys = document.querySelectorAll('.key');

// Her tuş için olay dinleyicisi ekle
keys.forEach(key => {
    key.addEventListener('click', function() {
        const keyValue = this.textContent;
        
        // İmlecin mevcut konumunu al
        const cursorPos = textArea.selectionStart;
        const selectionEnd = textArea.selectionEnd;
        const textBefore = textArea.value.substring(0, cursorPos);
        const textAfter = textArea.value.substring(selectionEnd);
        
        // Özel tuşların kontrolü
        switch(this.id) {
            case 'backspace':
                if (cursorPos === selectionEnd) {
                    // İmleç tek bir noktadaysa, bir karakter sil
                    textArea.value = textBefore.slice(0, -1) + textAfter;
                    textArea.setSelectionRange(cursorPos - 1, cursorPos - 1);
                } else {
                    // Seçili metin varsa, seçili metni sil
                    textArea.value = textBefore + textAfter;
                    textArea.setSelectionRange(cursorPos, cursorPos);
                }
                break;
            case 'enter':
                textArea.value = textBefore + '\n' + textAfter;
                textArea.setSelectionRange(cursorPos + 1, cursorPos + 1);
                break;
            case 'tab':
                textArea.value = textBefore + '    ' + textAfter;
                textArea.setSelectionRange(cursorPos + 4, cursorPos + 4);
                break;
            case 'clear':
                textArea.value = '';
                break;
            default:
                // Normal karakterleri imlecin bulunduğu konuma ekle
                textArea.value = textBefore + keyValue + textAfter;
                textArea.setSelectionRange(cursorPos + 1, cursorPos + 1);
        }
        
        focusTextArea();
    });
});

// Sayfa yüklendiğinde yazı alanına odaklan
document.addEventListener('DOMContentLoaded', focusTextArea);

// Enter tuşu için klavye olayı
textArea.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        textArea.value += '\n';
    }
});

// Tab tuşu için klavye olayı
textArea.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        e.preventDefault();
        textArea.value += '    ';
    }
});

function toggleFooter() {
    const content = document.querySelector('.collapsible-content');
    const icon = document.querySelector('.toggle-icon');
    
    content.classList.toggle('hidden');
    icon.classList.toggle('rotated');
}