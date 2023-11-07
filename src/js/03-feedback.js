import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

function saveFormData() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFormData() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}

emailInput.addEventListener('input', throttle(saveFormData, 500));
messageInput.addEventListener('input', throttle(saveFormData, 500));

window.addEventListener('load', loadFormData);

feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const feedbackData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  if (!feedbackData.email || !feedbackData.message) {
    alert('Please complete both fields before submitting the form.');
    return;
  }

  console.log(feedbackData);

  emailInput.value = '';
  messageInput.value = '';

  localStorage.removeItem('feedback-form-state');
});
