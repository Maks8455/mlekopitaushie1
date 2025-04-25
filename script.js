// Вопросы и варианты ответов
const questions = [
    {
        question: 'Какие животные относятся к сумчатым?',
        options: ['Кенгуру', 'Медведь', 'Лев', 'Жираф'],
        correctAnswer: 'Кенгуру'
    },
    {
        question: 'У какого животного самый большой мозг среди всех наземных животных?',
        options: ['Горилла', 'Орангутан', 'Человек', 'Слон'],
        correctAnswer: 'Слон'
    },
    {
        question: 'Какой вид млекопитающих является единственным известным теплокровным животным, способным активно парить в воздухе?',
        options: ['Летучая мышь', 'Белка-летяга', 'Заяц-русак', 'Енот-полоскун'],
        correctAnswer: 'Летучая мышь'
    },
    {
        question: 'Кто из перечисленных зверей живет дольше всего?',
        options: ['Собака', 'Корова', 'Голубой кит', 'Хорёк'],
        correctAnswer: 'Голубой кит'
    },
    {
        question: 'Почему медведи спят зимой?',
        options: ['Они предпочитают отдыхать', 'Это связано с нехваткой пищи и холодом', 'Из-за нехватки воды', 'Просто любят спать долго'],
        correctAnswer: 'Это связано с нехваткой пищи и холодом'
    }
];

let score = 0;

// Функция отображения вопроса
function showQuestion(questionObj, index) {
    const quizContainer = document.getElementById('quiz-container');
    let html = `<h2>Вопрос №${index + 1}: ${questionObj.question}</h2><ul>`;
    
    // Добавляем опции ответов
    for(let i = 0; i < questionObj.options.length; i++) {
        html += ` <li> <label> <input type="radio" name="q${index}" value="${questionObj.options[i]}"/> ${questionObj.options[i]} </label> </li> `;
    }
    
    html += '</ul>';
    quizContainer.innerHTML += html;
}

// Отображение всех вопросов
for(let i = 0; i < questions.length; i++) {
    showQuestion(questions[i], i);
}

// Проверка ответов
function checkAnswers() {
    let totalCorrect = 0;
    
    // Проходим по каждому вопросу
    for(let i = 0; i < questions.length; i++) {
        const selectedOption = document.querySelector(`input[name=q${i}]:checked`);
        
        if(selectedOption && selectedOption.value === questions[i].correctAnswer) {
            totalCorrect++;
        }
    }
    
    // Показываем результат
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.textContent = `Вы ответили правильно на ${totalCorrect}/${questions.length} вопросов.`;
}