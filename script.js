document.addEventListener('DOMContentLoaded', function() {
	// Начальное состояние: показываем boarding
	document.getElementById('boarding').classList.add('active');

	// Обработчик события для кнопки
	document.getElementById('boarding__btn').addEventListener('click', function() {
		 // Убираем класс active у boarding и добавляем его к home
		 document.getElementById('boarding').classList.remove('active');
		 document.getElementById('home').classList.add('active');
	});
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

	// Начать исчезновение  
	container.classList.remove('visible');  
	container.classList.add('hidden');  

	setTimeout(() => {  
		 // Изменить текст после исчезновения  
		 container.innerHTML = texts[index];  
		 // Начать проявление  
		 container.classList.remove('hidden');  
		 container.classList.add('visible');  
		 index = (index + 1) % texts.length; // Вернуться к началу  
	}, 1000); // Задержка, соответствующая времени исчезновения  
}  

changeText(); // Начальный вызов для отображения первого текста  
setInterval(changeText, 4000); // Менять текст каждые 4 секунды (2 секунды видимости + 2 секунды растворения)  ы