import throttle from "lodash.throttle"



const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onChange, 500));

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
console.log(savedData);


if (savedData) { 
    form.elements.email.value = savedData.email;
    form.elements.message.value = savedData.message;

};

function onChange() { 
    const data = {
        email: form.elements.email.value,
        message: form.elements.message.value
    }
    console.log(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

form.addEventListener('submit', onSubmit);


function onSubmit(event) { 
    event.preventDefault();
    const object = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(object);
    localStorage.removeItem(STORAGE_KEY);
    event.target.reset();
};



















// // - КОНСОЛЬ ВИДАЄ ЧЕРВОНИМ.те, що внизу

// // import throttle from 'lodash.throttle'; 

// // import '../css/common.css';
// // import '../css/03-feedback.css';

// const STORAGE_KEY = 'feedback-form-state';

// const refs = {
//     form: document.querySelector('.feedback-form'),
//     textarea: document.querySelector('.feedback-form textarea'),
// };

// // КУДИ СТАВИТИ 500 ВНИЗУ? у РЕПЕТИ БУЛО ТАК refs.textarea.addEventListener('input', throttle(onTextAreaInput, 500));

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', onTextAreaInput);
// // refs.input.addEventListener('email', onEmailInput); - пробувала для пошти

// populateTextarea();

// function onFormSubmit(evt) {
//     evt.preventDefault();
//     // ТРЕБА ВНИЗУ ЗРОБИТИ ПРАИВЛЬНИЙ КОНСОЛЬ
//     console.log('write smth'); 

//     evt.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);
//  } 


// function onTextAreaInput(evt) {
//     const message = evt.target.value;
//     localStorage.setItem(STORAGE_KEY, message);
//  }

// // ЧОГО НЕ ПРАЦЮЄ для пошти

// // function onEmailInput(evt) { 
// //     const email = evt.currentTarget.value;
// // localStorage.setItem(STORAGE_KEY, email)
// // }


// function populateTextarea() { 
//     const savedMessage = localStorage.getItem(STORAGE_KEY);

//     if (savedMessage) { 
//         console.log(savedMessage);
//         refs.textarea.value = savedMessage;
//     }
// }
