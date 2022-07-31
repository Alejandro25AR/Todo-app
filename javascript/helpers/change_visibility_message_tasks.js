const $withotTasks = document.getElementById("withot-tasks");

const checkNumberOfTasks = (listTaskHTML) => {
  const isListEmpty = listTaskHTML.length === 0 ? true : false;
  return isListEmpty;
};

const changeVisibilityMessageTasks = ($listTaskHTML) => {
  const listTaskHTML = Array.from($listTaskHTML.children);
  const isListEmpty = checkNumberOfTasks(listTaskHTML);
  if (isListEmpty) {
    $withotTasks.classList.remove("hidden");
  }
  else if (!isListEmpty) {
    let thereAreVisibleTask = listTaskHTML.some((task) => {
      return !task.classList.contains("hidden");
    });
    thereAreVisibleTask 
    ? $withotTasks.classList.add("hidden")
    : $withotTasks.classList.remove("hidden");
  }
};
export default changeVisibilityMessageTasks;