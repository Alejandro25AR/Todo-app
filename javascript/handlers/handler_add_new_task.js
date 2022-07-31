import ErrorValidation from "../class/error_validation.js";
import {
  changeVisibilityMessageTasks,
  setDataInTempleteTask,
  updateItemsLeft,
  createIdsForNewTask
} from "../helpers/helpers.js";

const $taskInput = document.getElementById("task-input");
const $taskLits = document.getElementById("task-list");

const getValueOfTaskInput = () => {
  const valueOfTaskInput = $taskInput.value.trim();
  return valueOfTaskInput;
};
const verifyTaskInput = (valueOfTaskInput) => {
  if(valueOfTaskInput === '') {
    throw new ErrorValidation('The task input is empty')
  }
}
const resetTextInput = () => {
  $taskInput.value = '';
};
const resetButtonAddTask = ($buttonAddTask) => {
  $buttonAddTask.checked= false;
};
const renderTempleteTaskItem = ($templateTask) => {
  const $fragment = document.createDocumentFragment();
  const $clone = document.importNode($templateTask,true);
  $fragment.appendChild($clone);
  $taskLits.appendChild($fragment);
}
const handlerAddNewTask = ($buttonAddTask,valueFilter,$list) => {
  try{
    const valueOfTaskInput = getValueOfTaskInput();
    verifyTaskInput(valueOfTaskInput);
    const identifiers = createIdsForNewTask();
    const $templateTask = setDataInTempleteTask(identifiers,valueOfTaskInput,valueFilter,false);
    resetTextInput();
    setTimeout(()=> {
      resetButtonAddTask($buttonAddTask);
      renderTempleteTaskItem($templateTask);
      updateItemsLeft($list);
      changeVisibilityMessageTasks($list);
    },100)
  }catch(e) {
    setTimeout(()=> {
      resetButtonAddTask($buttonAddTask);
    },100)
    // console.log(e)
  }
}
export default handlerAddNewTask;