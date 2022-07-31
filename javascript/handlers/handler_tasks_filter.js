const changeAttributeDisable = ($filter) => {
  const currentState = $filter.disabled ?? false;
  $filter.disabled = !currentState;
};

const savePreviusFilter = (filters) => {
  filters.previus = filters.current;
};

const changeCurrentFilter = (filters, $pressedFilter) => {
  filters.current = $pressedFilter;
};

const changeValueFilter = (filters,newValue) => {
  filters.value = newValue;
};

const taskFilter = {
  all(tasksElements) {
    tasksElements.map((item) => {
      if (item.classList.contains("hidden")) {
        item.classList.remove("hidden");
      }
    });
  },
  active(tasksElements) {
    tasksElements.map((item) => {
      item.getAttribute("data-is-completed") === "true"
        ? item.classList.add("hidden")
        : item.classList.remove("hidden");
    });
  },
  completed(tasksElements) {
    tasksElements.map((item) => {
      item.getAttribute("data-is-completed") === "false"
        ? item.classList.add("hidden")
        : item.classList.remove("hidden");
    });
  },
};

const handlerTaskFilter = (filters,$pressedFilter,$List) => {
  changeAttributeDisable(filters.current);
  const valuePressedFilter = $pressedFilter.value;
  savePreviusFilter(filters);
  changeCurrentFilter(filters,$pressedFilter);
  changeValueFilter(filters,valuePressedFilter);
  const tasksElements = Array.from($List.children);
  taskFilter[valuePressedFilter](tasksElements);
  changeAttributeDisable(filters.previus);
};

export default handlerTaskFilter;