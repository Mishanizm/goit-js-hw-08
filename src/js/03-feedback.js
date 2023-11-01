
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

const localStorageKey = 'feedback-form-state';

function saveFormDataToLocalStorage() {
    const formData = {
        email: emailInput.value,
        message: messageTextarea.value,
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function loadFormDataFromLocalStorage() {
    const savedData = localStorage.getItem(localStorageKey);
    if (savedData) {
        const formData = JSON.parse(savedData);
        emailInput.value = formData.email;
        messageTextarea.value = formData.message;
    }
}

const throttledSaveToLocalStorage = throttle(saveFormDataToLocalStorage, 500);

form.addEventListener('input', throttledSaveToLocalStorage);

loadFormDataFromLocalStorage();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const savedData = localStorage.getItem(localStorageKey);
    if (savedData) {
        const formData = JSON.parse(savedData);
        console.log('Form data submitted:', formData);

        localStorage.removeItem(localStorageKey);
        emailInput.value = '';
        messageTextarea.value = '';
    }
});
