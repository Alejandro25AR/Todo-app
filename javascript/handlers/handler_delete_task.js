const handlerDeleteTask = ($buttonDeleteTask,$taskLits) => {
  const $itemToDelete = $buttonDeleteTask.closest('.c-list__item');
  $taskLits.removeChild($itemToDelete);
}

export default handlerDeleteTask;