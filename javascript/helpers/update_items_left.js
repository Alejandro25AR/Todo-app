const $itemLeft = document.getElementById('items-left');

const getLeftTasksNumber = ($list) => {
  let leftTasks = 0;
  Array.from($list.children).map((task)=>{
    if(task.getAttribute('data-is-completed') === 'false'){
      leftTasks++;
    }
  });
  return leftTasks;
}
const updateItemsLeft = ($list) => {
  const leftTasksNumber = getLeftTasksNumber($list)
  $itemLeft.textContent = leftTasksNumber;
}
export default updateItemsLeft;