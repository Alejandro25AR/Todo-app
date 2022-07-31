import ErrorValidation from "../class/error_validation.js";

const verifyDropZone = ($draggedElement, $dropZoneElement) => {
  if ($draggedElement === $dropZoneElement)
    throw new ErrorValidation("The dragged element is equal of drop zone element");
};

const getCurrentTaskList = () => {
  const $itemsList = document.querySelectorAll(".c-list__item");
  return $itemsList;
};

const getIndexOfDraggedAndDropZoneElement = (
  $itemsList,
  $draggedElement,
  $dropZoneElement
) => {
  const elementIndices = {
    dragged: null,
    dropZone: null,
  };
  for (const [index, $item] of $itemsList.entries()) {
    if ($item === $draggedElement) elementIndices.dragged = index;
    if ($item === $dropZoneElement) elementIndices.dropZone = index;
    if (
      elementIndices.dragged === undefined &&
      elementIndices.dropZone === undefined
    )
      break;
  }
  return elementIndices;
};

const reorderItem = ($draggedElement, $dropZoneElement, elementIndices) => {
  if (elementIndices.dropZone > elementIndices.dragged) {
    $dropZoneElement.insertAdjacentElement("afterend", $draggedElement);
  }
  if (elementIndices.dropZone < elementIndices.dragged) {
    $dropZoneElement.insertAdjacentElement("beforebegin", $draggedElement);
  }
};

const handlerDropZone = ($draggedElement,$dropZoneElement) => {
  try { 
    verifyDropZone($draggedElement, $dropZoneElement);
    const $itemsList = getCurrentTaskList();
    const elementIndices = getIndexOfDraggedAndDropZoneElement($itemsList,$draggedElement,$dropZoneElement);
    reorderItem($draggedElement, $dropZoneElement, elementIndices);
  }catch(e) {
    // console.warn(e);
  }
}

export default handlerDropZone;