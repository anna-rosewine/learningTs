type todoId = number;

interface TodoInterface {
    task: string;
    complete: boolean;
    id: todoId;
}

class Todo implements TodoInterface {
    id: todoId;
    complete: boolean;
    task: string;

    constructor(params: TodoInterface) {
        ({task: this.task, complete: this.complete, id: this.id} = params);
    }

    delete() {

    }

    update = (params: Omit<Partial<TodoInterface>, "id">) => {
        if(params.complete) this.complete = params.complete;
        if(params.task) this.task = params.task;
    }

}
