
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Status {
    COMPLETED = "COMPLETED",
    INPROGRESS = "INPROGRESS",
    PENDING = "PENDING"
}

export class Todo {
    id?: Nullable<number>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    expires?: Nullable<number>;
    isCompleted?: Nullable<boolean>;
    status?: Nullable<Status>;
}

export class UpdateTodoParamWhere {
    id?: Nullable<number>;
}

export class UpdateTodoParams {
    where?: Nullable<UpdateTodoParamWhere>;
    data?: Nullable<Todo>;
}

export abstract class IQuery {
    abstract getTodo(id?: Nullable<number>): Nullable<Todo> | Promise<Nullable<Todo>>;

    abstract getTodos(): Nullable<Nullable<Todo>[]> | Promise<Nullable<Nullable<Todo>[]>>;

    abstract getTodosByStatus(status?: Nullable<Status>): Nullable<Nullable<Todo>[]> | Promise<Nullable<Nullable<Todo>[]>>;
}

export abstract class IMutation {
    abstract createTodo(data?: Nullable<Todo>): Nullable<Todo> | Promise<Nullable<Todo>>;

    abstract updateTodo(params?: Nullable<UpdateTodoParams>): Nullable<Todo> | Promise<Nullable<Todo>>;

    abstract deleteTodo(where?: Nullable<UpdateTodoParamWhere>): Nullable<Todo> | Promise<Nullable<Todo>>;
}

type Nullable<T> = T | null;
