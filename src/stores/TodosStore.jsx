import { observable, action, computed, decorate, autorun } from "mobx";

class TodoStore {
  todos = [
    { id: 1, value: "Clean The Dishes", isCompleted: false },
    { id: 2, value: "Finish Your Homewrok", isCompleted: true }
  ];

  constructor() {
    autorun(() => console.log(this.Progress));
  }

  get Progress() {
    return `${(
      this.todos.filter(t => t.isCompleted).length / this.todos.length
    ).toFixed(1) * 100}%`;
  }

  AddTodo(todo) {
    this.todos.push({
      id: this.todos.length + 1,
      value: todo,
      isCompleted: false
    });
  }

  ToggleTodo(id) {
    this.todos[id - 1].isCompleted = !this.todos[id - 1].isCompleted;
  }
}

decorate(TodoStore, {
  todos: observable,
  AddTodo: action,
  Progress: computed,
  ToggleTodo: action
});

const todoStoreInstance = new TodoStore();
export default todoStoreInstance;
