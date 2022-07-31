import { setDataLocalStorage,getDataLocalStorage } from "./local_storage.js";

const initialTasks = [
  {
    id: 'item0',
    text: 'Complete online JavaScript course',
    isCompleted: false
  },
  {
    id: 'item1',
    text: 'Jog around the park x3',
    isCompleted: false
  },
  {
    id: 'item2',
    text: '10 minutes meditation',
    isCompleted: false
  },
  {
    id: 'item3',
    text: 'Read for 1 hour',
    isCompleted: false
  },
  {
    id: 'item4',
    text: 'Pick up groceries',
    isCompleted: false
  },
  {
    id: 'item5',
    text: 'Completed Todo App on Frontend Mentor',
    isCompleted: true
  }
];

const validateFirtsVisit = () => {
  const IsFistVisit = getDataLocalStorage('isFirstVisit') ?? false;
  if(!IsFistVisit){
    setDataLocalStorage('tasks',initialTasks);
    setDataLocalStorage('isFirstVisit',true);
  }
}

export default validateFirtsVisit;