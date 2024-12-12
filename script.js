const phrases = [  
	"I am light ✨",  
	"I feel joy 🎉",  
	"Love guides me ❤️",  
	"I am free 🦋",  
	"Peace fills me 🕊️",  
	"I trust life 🙏",  
	"I am worthy 💪",  
	"Happiness surrounds me 😊",  
	"I grow strong 🚀",  
	"I shine bright 🌟",  
	"Love flows endlessly 💞",  
	"I embrace now 🌊",  
	"My soul soars ✈️",  
	"Strength is mine 💪",  
	"Life is kind 🌸",  
	"I choose love ❤️",  
	"I create magic 🎩",  
	"Gratitude finds me 🙏",  
	"Dreams come true 🌙",  
	"I radiate calm 🌊",  
	"Light flows within ☀️",  
	"My heart expands 💖",  
	"Beauty is everywhere 🌍",  
	"Energy lifts me 🔥",  
	"I welcome miracles ✨",  
	"I deserve peace 😌",  
	"My soul glows 🌟",  
	"Truth leads me 🦅",  
	"I am infinite 🌌",  
	"Love lives here ❤️",  
	"My spirit dances 🎶",  
	"Joy lifts everything 🎊",  
	"I breathe harmony 🌿",  
	"My journey flows 🏞️",  
	"I am limitless ✨"  
];  

function changePhrase() {  
	const phraseElement = document.getElementById("home__title");  
	phraseElement.style.opacity = 0; // Скрываем текст  

	setTimeout(() => {  
		 const randomIndex = Math.floor(Math.random() * phrases.length);  
		 phraseElement.textContent = phrases[randomIndex];  
		 phraseElement.style.opacity = 1; // Плавно показываем текст  
	}, 500); // Время ожидания для скрытия текста  
}  

setInterval(changePhrase, 2000);  
changePhrase();





const icons = document.querySelectorAll('.menu__btn');  
icons.forEach(icon => {  
    icon.addEventListener('click', () => {  
        // Убираем активный класс со всех иконок  
        icons.forEach(i => i.classList.remove('active__btn'));  
        // Добавляем активный класс к кликнутой иконке  
        icon.classList.add('active__btn');  
    });  
});  

function openCity(evt, cityName) {  
	var i, tabcontent, tablinks;  
	tabcontent = document.getElementsByClassName("menu__content");  

	// Скрываем все вкладки  
	for (i = 0; i < tabcontent.length; i++) {  
		 tabcontent[i].classList.remove("active"); 
		 tabcontent[i].style.display = "none"; 
	}  

	// Удаляем класс 'active' у всех кнопок  
	tablinks = document.getElementsByClassName("menu__btn");  
	for (i = 0; i < tablinks.length; i++) {  
		 tablinks[i].classList.remove("active");  
	}  

	
	var currentTab = document.getElementById(cityName);  
	if (currentTab) {   
		 currentTab.style.display = "block";
		 setTimeout(() => {  
			  currentTab.classList.add("active"); 
		 }, 10); 
	}  
 
	evt.currentTarget.classList.add("active ");  
}


function showSection(sectionId) { 
	const sections = document.querySelectorAll('.section'); 
	sections.forEach(section => { 
		section.classList.remove('active'); }); 
		const activeSection = document.getElementById(sectionId); 
		activeSection.classList.add('active');
	}

document.addEventListener('DOMContentLoaded', function() {
	const boardingSection = document.getElementById('boarding');
	const homeSection = document.getElementById('home');
	const menuSection = document.getElementById('menu');
	

	
	function toggleSections(activeSection, inactiveSection) {
		 inactiveSection.style.display = 'none'; 
		 activeSection.style.display = 'block'; 

		 
		 setTimeout(() => {
			  inactiveSection.classList.remove('active');
			  activeSection.classList.add('active');
		 }, 10); 
	}

	
	document.getElementById('boarding__btn').addEventListener('click', function() {
		 toggleSections(homeSection, boardingSection, menuSection);
	});

	
	document.getElementById('home__btn').addEventListener('click', function() {
		 toggleSections(boardingSection, homeSection);
	});

});


const toggleButton = document.getElementById('boarding__btn');  
const menu = document.getElementById('menu');  

toggleButton.addEventListener('click', () => {  
    if (menu.classList.contains('show')) {  
        menu.style.transition = 'none'; // Отключаем анимацию для мгновенного скрытия  
        menu.classList.remove('show'); // Убираем класс, чтобы скрыть меню  
        // Используем setTimeout, чтобы дождаться завершения предыдущей анимации  
        setTimeout(() => {  
            menu.style.display = 'none'; // Скрываем меню после анимации  
        }, 300); // Время соответствует продолжительности анимации  
    } else {  
        menu.style.display = 'flex'; // Показываем меню немедленно  
        // Небольшая задержка для правильного отображения анимации  
        setTimeout(() => {  
            menu.classList.add('show'); // Добавляем класс для анимации  
        }, 10); // Небольшая задержка для того, чтобы браузер обработал новый display  
    }  
});  

const texts = [  
	"<span class='header'>Ваши файлы всегда в безопасности!</span> 🔒☁️<br><span class='text'>Продвинутое шифрование и современные технологии защиты – полный контроль и полная конфиденциальность ваших данных.</span>",  
	"<span class='header'>Ускоренная работа с вашими файлами!</span> ⚡📂<br><span class='text'>Мгновенная загрузка и доступ из любой точки мира – больше никаких ожиданий.</span>",  
	"<span class='header'>Доступно в любое время и в любом месте!</span> 📱💻<br><span class='text'>Бесшовная интеграция со всеми вашими устройствами и приложениями – ваши файлы всегда под рукой, даже в оффлайн.</span>",  
	"<span class='header'>Хранение, которому можно доверять!</span> 🛡️<br><span class='text'>Трехуровневая система защиты гарантирует безопасность ваших файлов, независимо от обстоятельств.</span>",  
	"<span class='header'>Работайте без ограничений!</span> 🌍<br><span class='text'>Синхронизация в реальном времени между всеми вашими устройствами – идеально для работы, учебы или личного пользования.</span>"  
];  

let index = 0;  

function changeText() {  
	const container = document.getElementById('text-container');  

	container.classList.remove('visible');  
	container.classList.add('hidden');  

	setTimeout(() => {  
		 container.innerHTML = texts[index];  
		 container.classList.remove('hidden');  
		 container.classList.add('visible');  
		 index = (index + 1) % texts.length; 
	}, 1000); 
}  

changeText();  
setInterval(changeText, 4000); 