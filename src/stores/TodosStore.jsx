import {
  observable,
  action,
  computed,
  decorate,
  autorun,
  runInAction
} from "mobx";

class TodoStore {
  todos = [];

  constructor() {
    autorun(() => console.log(this.Progress));
  }

  get Progress() {
    if (this.todos.length === 0) return "0%";
    return `${(
      this.todos.filter(t => t.completed).length / this.todos.length
    ).toFixed(2) * 100}%`;
  }

  async FetchTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = (await res.json()).slice(0, 6);
    console.log(data);
    runInAction(() => {
      this.todos = data;
    });
  }

  AddTodo(todo) {
    this.todos.push({
      id: this.todos.length + 1,
      title: todo,
      completed: false
    });
  }

  ToggleTodo(id) {
    this.todos[id - 1].completed = !this.todos[id - 1].completed;
  }
}

decorate(TodoStore, {
  todos: observable,
  AddTodo: action,
  Progress: computed,
  ToggleTodo: action,
  FetchTodos: action
});

const todoStoreInstance = new TodoStore();
export default todoStoreInstance;
