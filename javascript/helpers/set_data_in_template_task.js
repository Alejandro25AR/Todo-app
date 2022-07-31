//@ts-check
//@ts-ignore
const $templateTask = document.getElementById("template-task").content;

const $itemList = $templateTask.querySelector("li");
const $checkbox = $templateTask.querySelector("input");
const $labelCheckbox = $templateTask.querySelector("label");
const $paragraphTask = $templateTask.querySelector("p");


const hiddenElement = ($element) => {
  $element.classList.add('hidden');
}
const visibleElement = ($element) => {
  $element.classList.remove('hidden');
}
/**
 * @param {object} identifiers 
 * @param {string} valueOfTask 
 * @param {string} filterList 
 * @param {boolean} isCompleted
 */
const setDataInTempleteTask = (identifiers, valueOfTask,filterList,isCompleted) => {
  $itemList.setAttribute('id',identifiers.itemList);
  $itemList.setAttribute('data-is-completed',isCompleted);
  filterList === 'completed' ? hiddenElement($itemList) : visibleElement($itemList);
  $checkbox.setAttribute('id',identifiers.checkbox);
  isCompleted ? $checkbox.checked=true : $checkbox.checked=false;
  $labelCheckbox.setAttribute('for',identifiers.checkbox);
  $paragraphTask.textContent = valueOfTask;
  return $templateTask;
}

export default setDataInTempleteTask;