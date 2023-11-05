import throttle from 'lodash.throttle';

const FEEDBACK_KEY = "feedback-form-state";
let formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', throttle(onInputData, 500));
refs.form.addEventListener('submit', onFormSubmit);

populateFeedbackForm();

function onInputData(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  
localStorage.removeItem(FEEDBACK_KEY);
  console.log(formData);
  e.currentTarget.reset();
  formData = {};
}

function populateFeedbackForm() {
 
  try {
    let data = localStorage.getItem(FEEDBACK_KEY);
  if (!data) return;
  formData = JSON.parse(data);
Object.entries(formData).forEach(([key, val]) => {
  refs.form.elements[key].value = val;
});
} catch (error) { 
    console.log(error);
  }
}