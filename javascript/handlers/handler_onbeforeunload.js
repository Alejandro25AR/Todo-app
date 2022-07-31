import {
  setDataLocalStorage
} from "../helpers/helpers.js";

const createArrayWithOrderTask = (arrayTask) => {
  const orderTaskList = [];
  arrayTask.map((task, index) => {
    const dataTask = {
      id: "item" + index,
      text: task.querySelector("p").textContent,
      isCompleted:
        task.getAttribute("data-is-completed") === "false" ? false : true,
    };
    orderTaskList.push(dataTask);
  });
  return orderTaskList;
};


const handlerOnbeforeunload = ($list,$allFilter) => {
  const arrayTask = Array.from($list.children);
  const orderTaskList = createArrayWithOrderTask(arrayTask);
  setDataLocalStorage("tasks", orderTaskList);
  $allFilter.checked = true;
}
export default handlerOnbeforeunload;