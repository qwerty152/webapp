




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
		 activeSection.style.display = 'flex'; 

		 
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
	"<span class='header'>Your files are always secure! 🔒☁️<br><span class='text'>Advanced encryption and cutting-edge protection technologies – full control and complete confidentiality for your data.  </span>",  
	"<span class='header'>Blazing speed for your files! ⚡📂</span> <br><span class='text'>Instant uploads and access from anywhere in the world – no more waiting around. </span>",  
	"<span class='header'> Accessible anytime, anywhere! 📱💻</span> <br><span class='text'>Seamless integration with all your devices and apps – your files are always within reach, even offline. </span>",  
	"<span class='header'>Storage you can trust</span> 🛡️<br><span class='text'>A triple-layer protection system ensures your files stay safe, no matter what. .</span>",  
	"<span class='header'>Work without limits!</span> 🌍<br><span class='text'>Real-time synchronization across all your devices – perfect for work, study, or personal use.</span>"  
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


const phrases = [  
	"I am light ✨",  
	"I feel joy 🎉",  
	"Love guides me ❤️",  
	"I am free 🦋",  
	"Peace fills me 🕊️",  
	"I trust life 🙏",  
	"I am worthy 💪",  
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

const sections = [  
	document.getElementById("home__title"),  
	document.getElementById("home__title2"),  
	document.getElementById("home__title3")  
];  

function changePhrases() {  
	sections.forEach((section) => {  
		 section.style.opacity = 0; // Скрываем текст  
	});  

	setTimeout(() => {  
		 sections.forEach((section) => {  
			  const randomIndex = Math.floor(Math.random() * phrases.length);  
			  section.textContent = phrases[randomIndex];  
			  section.style.opacity = 1; // Плавно показываем текст  
		 });  
	}, 500); // Время ожидания перед показом нового текста  
}  

setInterval(changePhrases, 2000);  
changePhrases();


// SEARCH

document.getElementById('searchButton').addEventListener('click', function() {  
	const header = document.getElementById('home__title');  
	const section = document.getElementById('searchInput');  
	const searchInput = document.getElementById('searchInput');  

	if (header.classList.contains('hidden')) {  
		 header.classList.remove('hidden');  
		 section.classList.remove('hidden');  
		 searchInput.style.display = 'none';  
		 setTimeout(() => { searchInput.style.display = 'none'; }, 300); // Скрываем уже после анимации  
	} else {  
		 header.classList.add('hidden');  
		 section.classList.add('hidden');  
		 searchInput.style.display = 'block';  
		 setTimeout(() => { searchInput.classList.add('visible'); }, 10); // Показываем с задержкой для анимации  
	}  
});

document.getElementById('searchButton2').addEventListener('click', function() {  
	const header2 = document.getElementById('home__title2');  
	const section2 = document.getElementById('searchInput2');  
	const searchInput2 = document.getElementById('searchInput2');  

	if (header2.classList.contains('hidden')) {  
		 header2.classList.remove('hidden');  
		 section2.classList.remove('hidden');  
		 searchInput2.style.display = 'none';  
		 setTimeout(() => { searchInput2.style.display = 'none'; }, 300); // Скрываем уже после анимации  
	} else {  
		 header2.classList.add('hidden');  
		 section2.classList.add('hidden');  
		 searchInput2.style.display = 'block';  
		 setTimeout(() => { searchInput2.classList.add('visible'); }, 10); // Показываем с задержкой для анимации  
	}  
});


document.getElementById('searchButton3').addEventListener('click', function() {  
	const header3 = document.getElementById('home__title3');  
	const section3 = document.getElementById('searchInput3');  
	const searchInput3 = document.getElementById('searchInput3');  

	if (header3.classList.contains('hidden')) {  
		 header3.classList.remove('hidden');  
		 section3.classList.remove('hidden');  
		 searchInput3.style.display = 'none';  
		 setTimeout(() => { searchInput3.style.display = 'none'; }, 300); // Скрываем уже после анимации  
	} else {  
		 header3.classList.add('hidden');  
		 section3.classList.add('hidden');  
		 searchInput3.style.display = 'block';  
		 setTimeout(() => { searchInput3.classList.add('visible'); }, 10); // Показываем с задержкой для анимации  
	}  
});


