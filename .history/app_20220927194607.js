const correctAnswers = ['B', 'A', 'A', 'A'];

const form = document.getElementById('quiz-form');

const result = document.querySelector('.result');

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

    scrollTo(0,0);
    //result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none')

    
    // step 4.1 animate score
    let output = 0;

    let x = result.querySelector('span').textContent = `${output}%`;
    const timer = setInterval(()=>{
        
        if(output===score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 100)
})