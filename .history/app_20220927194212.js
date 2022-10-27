const correctAnswers = ['B', 'A', 'A', 'A'];

const form = document.getElementById('quiz-form');

const result = document.querySelector('')

form.addEventListener('submit', e => {

    e.preventDefault() ;

    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    })

    console.log(score);

})