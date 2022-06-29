// create an array for the 
// const taskList = [];
// const newBtn = document.querySelector('submitBtn')

const taskList = [] //this is where the values of the list goes
const taskDiv = document.querySelector('#tasks');
const newBtn = document.querySelector('#newSubmitBtn');

document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

newBtn.addEventListener('click', async (SubmitEvent) => {
  SubmitEvent.preventDefault()

  let string = document.getElementById('#new-task-description').value
  console.log('Task entered', string)
  taskList.push(string)
})

