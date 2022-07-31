// @ts-check
function uniqueNumber(initialValue) {
  let id = initialValue;
  function incrementNumber(){
    return id++;
  };
  return incrementNumber;
}
const getIdentifier = uniqueNumber(0);

/**
 * @param {string} idItem optional
 * @returns { Object } Object with properties itemList and checkbox
 */
const createIdsForNewTask = (idItem = '') => {
  const identifier = getIdentifier();
  const identifiers = {
    itemList: idItem || `item${identifier}`,
    checkbox: `task${identifier}`,
  };
  return identifiers;
};
export default createIdsForNewTask;