import createIdsForNewTask from "./create_Ids_for_new_task.js";
import setDataInTempleteTask from './set_data_in_template_task.js';

const $taskLits = document.getElementById("task-list");
const $fragment = document.createDocumentFragment();

const itemsDynamicRender = (tasks) => {
  tasks.map((task) => {
    const identifiers = createIdsForNewTask(task.id);
    const $templateTask = setDataInTempleteTask(identifiers,task.text,'active',task.isCompleted);
    const $clone = document.importNode($templateTask, true);
    $fragment.appendChild($clone);
  });
  $taskLits.appendChild($fragment);
}

export default itemsDynamicRender;