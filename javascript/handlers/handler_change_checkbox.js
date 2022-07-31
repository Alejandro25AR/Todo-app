import {
  changeVisibilityMessageTasks,
} from "../helpers/helpers.js";

const changeValueOfAttributeIsCompleted = ($currentTask, currentValue) => {
  $currentTask.setAttribute("data-is-completed", currentValue);
};

const handlerChangeCheckbox = ($checkbox,currentFilter,$listTaskHTML) => {
  const $currentTask = $checkbox.closest(".c-list__item");
  const currentValue = $checkbox.checked;
  changeValueOfAttributeIsCompleted($currentTask, currentValue);
  if(currentFilter !== 'all'){
    setTimeout(() => {
      $currentTask.classList.add("hidden");
      changeVisibilityMessageTasks($listTaskHTML);
    }, 100);
  }
};
export default handlerChangeCheckbox;