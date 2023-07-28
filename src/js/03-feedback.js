// - КОНСОЛЬ ВИДАЄ ЧЕРВОНИМ.те, що внизу

// import throttle from 'lodash.throttle'; 

// import '../css/common.css';
// import '../css/03-feedback.css';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
};

// КУДИ СТАВИТИ 500 ВНИЗУ? у РЕПЕТИ БУЛО ТАК refs.textarea.addEventListener('input', throttle(onTextAreaInput, 500));

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextAreaInput);
// refs.input.addEventListener('email', onEmailInput); - пробувала для пошти

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();
    // ТРЕБА ВНИЗУ ЗРОБИТИ ПРАИВЛЬНИЙ КОНСОЛЬ
    console.log('write smth'); 

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
 } 


function onTextAreaInput(evt) {
    const message = evt.target.value;
    localStorage.setItem(STORAGE_KEY, message);
 }

// ЧОГО НЕ ПРАЦЮЄ для пошти

// function onEmailInput(evt) { 
//     const email = evt.currentTarget.value;
// localStorage.setItem(STORAGE_KEY, email)
// }


// ЧИ  ТРЕБА ЦЕ:
function populateTextarea() { 
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) { 
        console.log(savedMessage);
        refs.textarea.value = savedMessage;
    }
}
