"use strict";
import {
  handlerAddNewTask,
  handlerDeleteTask,
  handlerChangeCheckbox,
  handlerTaskFilter,
  handlerDropZone,
  handlerOnbeforeunload,
} from "./handlers/handlers.js";
import {
  validateFirtsVisit,
  itemsDynamicRender,
  getDataLocalStorage,
  updateItemsLeft,
  changeVisibilityMessageTasks
} from "./helpers/helpers.js";

window.addEventListener("load", () => {
  let $draggedElement = null;
  const $btnChangeTheme = document.getElementById("btn-change-theme");
  const $body = document.getElementById("body");
  const $btnAddTask = document.getElementById("btn-add-task");
  const $taskInput = document.getElementById("task-input");
  const classButtonDeleteTask = ".c-list__btn-delete";
  const $listTaskHTML = document.getElementById("task-list");
  const $allFilter = document.getElementById("all");

  const filters = {
    current: $allFilter,
    previus: null,
    value: "all",
  };

  validateFirtsVisit();
  const tasks = getDataLocalStorage("tasks");
  itemsDynamicRender(tasks);
  updateItemsLeft($listTaskHTML);
  changeVisibilityMessageTasks($listTaskHTML);

  document.addEventListener("click", (e) => {
    /* Change Theme */
    if (
      e.target.matches(`#${$btnChangeTheme.getAttribute("id")}`) ||
      e.target.matches(`#${$btnChangeTheme.getAttribute("id")} *`)
    ) {
      $body.classList.toggle("theme--invert");
    }
    /* Add Task */
    if (e.target.matches(`#${$btnAddTask.getAttribute("id")}`)) {
      handlerAddNewTask($btnAddTask, filters.value, $listTaskHTML);
    }
    /* Delete Task */
    if (
      e.target.matches(classButtonDeleteTask) ||
      e.target.matches(classButtonDeleteTask + " *")
    ) {
      handlerDeleteTask(e.target, $listTaskHTML);
      updateItemsLeft($listTaskHTML);
      changeVisibilityMessageTasks($listTaskHTML);
    }
    /* Modify State Task */
    if (e.target.matches(".o-checkbox")) {
      if (e.target.closest(".c-list__item")) {
        handlerChangeCheckbox(e.target, filters.value,$listTaskHTML);
      }
    }
    /* Clear completed tasks */
    if (e.target.matches("#clear-completed")) {
      Array.from($listTaskHTML.children).map((item) => {
        if (item.getAttribute("data-is-completed") === "true") {
          handlerDeleteTask(item, $listTaskHTML);
        }
      });
      updateItemsLeft($listTaskHTML);
      changeVisibilityMessageTasks($listTaskHTML);
    }
    /* Filter List */
    if (e.target.name === "filterList") {
      handlerTaskFilter(filters, e.target, $listTaskHTML);
      changeVisibilityMessageTasks($listTaskHTML);
    }
  });

  /* Add Task with key Enter */
  $taskInput.addEventListener("keypress", (e) => {
    if (e.code == "Enter") {
      e.preventDefault();
      $btnAddTask.checked = true;
      handlerAddNewTask($btnAddTask, filters.value, $listTaskHTML);
      changeVisibilityMessageTasks($listTaskHTML);
    }
  });

  /* For Mobile */
  document.addEventListener("touchend", (e) => {
    /* Change Theme */
    if (
      e.target.matches(`#${$btnChangeTheme.getAttribute("id")}`) ||
      e.target.matches(`#${$btnChangeTheme.getAttribute("id")} *`)
    ) {
      $body.classList.toggle("theme--invert");
    }
    /* Add Task */
    if (e.target.matches(`#${$btnAddTask.getAttribute("id")}`)) {
      handlerAddNewTask($btnAddTask, filters.value, $listTaskHTML);
    }
    /* Delete Task */
    if (
      e.target.matches(classButtonDeleteTask) ||
      e.target.matches(classButtonDeleteTask + " *")
    ) {
      handlerDeleteTask(e.target, $listTaskHTML);
      updateItemsLeft($listTaskHTML);
      changeVisibilityMessageTasks($listTaskHTML);
    }
    /* Modify State Task */
    if (e.target.matches(".o-checkbox")) {
      if (e.target.closest(".c-list__item")) {
        handlerChangeCheckbox(e.target, filters.value,$listTaskHTML);
      }
    }
    /* Clear completed tasks */
    if (e.target.matches("#clear-completed")) {
      Array.from($listTaskHTML.children).map((item) => {
        if (item.getAttribute("data-is-completed") === "true") {
          handlerDeleteTask(item, $listTaskHTML);
        }
      });
      updateItemsLeft($listTaskHTML);
      changeVisibilityMessageTasks($listTaskHTML);
    }
    /* Filter List */
    if (e.target.name === "filterList") {
      handlerTaskFilter(filters, e.target, $listTaskHTML);
      changeVisibilityMessageTasks($listTaskHTML);
    }
  });

  /* Drag and drop */
  document.addEventListener("dragstart", (e) => {
    if (e.target.matches(".c-list__item")) {
      $draggedElement = e.target;
    }
  });

  document.addEventListener("dragenter", (e) => {
    if (e.target.matches(".c-list__item")) {
      e.target.classList.add("border");
    }
  });

  document.addEventListener("dragleave", (e) => {
    if (e.target.matches(".c-list__item")) {
      e.target.classList.remove("border");
    }
    if (e.target.matches(".c-list__item *")) {
    }
  });

  document.addEventListener("dragover", (e) => {
    if (
      e.target.matches(".c-list__item") ||
      e.target.matches(".c-list__item *")
    ) {
      e.preventDefault();
    }
  });

  document.addEventListener("drop", (e) => {
    e.preventDefault();
    if (e.target.matches(".c-list__item")) {
      const $dropZone = e.target;
      e.target.classList.remove("border");
      handlerDropZone($draggedElement, $dropZone);
    }
    if (e.target.matches(".c-list__item *")) {
      const $dropZone = e.target.closest(".c-list__item");
      handlerDropZone($draggedElement, $dropZone);
    }
  });

  /* Save tasks to local storage before closing the page */
  window.onbeforeunload = function (e) {
    handlerOnbeforeunload($listTaskHTML, $allFilter);
    return null;
  };
});