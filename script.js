// Флаги логирования
const LOGGING_ENABLED = false; // пока отключено, готово к подключению

// Звуки
const clickSound = document.getElementById('clickSound');
const typingSound = document.getElementById('typingSound');
const openSound = document.getElementById('openSound');
const ambienceSound = document.getElementById('ambienceSound');

ambienceSound.volume = 0.3;
ambienceSound.play();

const contentText = document.getElementById('contentText');
const folders = document.querySelectorAll('.folder');

const folderContents = {
    history: `С детства он не стремился выделяться, ... (вставить всю квенту)`,
    ai: `AI помощник: если хотите доступ к закрытым линиям, подтвердите условия протокола...`,
    access: `Ранги и уровни доступа:\n1-3: минимальные\n4-7: средние\n8-9: секретные\n10: полный доступ`,
    arrests: `История задержаний: пока пусто.`
};

// Функция открытия папки
folders.forEach(folder => {
    folder.addEventListener('click', () => {
        clickSound.play();
        openSound.play();
        const target = folder.dataset.target;
        showText(folderContents[target]);
    });
});

function showText(text) {
    contentText.innerHTML = '';
    let i = 0;
    typingSound.play();
    const interval = setInterval(() => {
        if(i < text.length) {
            contentText.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
            typingSound.pause();
            typingSound.currentTime = 0;
        }
    }, 10); // скорость печати зависит от длины текста
}

// AI чат
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

let userNick = '';

function askNick() {
    userNick = prompt("Введите ваш игровой никнейм (обязательное):");
    if(!userNick) askNick();
}
askNick();

chatInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        const msg = chatInput.value.trim();
        if(!msg) return;
        appendMessage(userNick, msg);
        chatInput.value = '';

        if(msg.toLowerCase() === 'да') {
            appendMessage('AI', 'Ошибка: попробуйте позже');
        } else if(msg.toLowerCase() === 'нет') {
            appendMessage('AI', 'Я всегда рядом, если будет нужна помощь');
        }
    }
});

function appendMessage(sender, message) {
    const msgEl = document.createElement('div');
    msgEl.textContent = `${sender}: ${message}`;
    chatMessages.appendChild(msgEl);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Подготовка логирования
    if(LOGGING_ENABLED) {
        // отправка на сервер или запись в файл
        console.log(`LOG: ${sender} | ${message}`);
    }
}