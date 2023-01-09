import { Resolver, Mutation, Query, Args, ResolveField } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";

import { TodoStatus } from "../dto/Status.dto";
import { Todo } from "../dto/Todo.dto";
import { TodoService } from "./todo.service";
import { UpdateTodoInput } from "../inputs/UpdateTodo";
import { DeleteTodoInput } from "../inputs/DeleteTodo";

@Resolver("Todo")
export class TodoResolver {
  constructor(private readonly TodoService: TodoService) {}

  @Query(() => Todo)
  async getTodo(
    @Args("id", {
      type: () => Number,
    })
    id
  ) {
    return this.TodoService.findOne(id);
  }

  @Query(() => [Todo])
  async getTodos() {
    return this.TodoService.findAll();
  }

  @Query(() => [Todo])
  async getTodosByStatus(
    @Args("status", {
      type: () => TodoStatus,
    })
    status
  ) {
    return this.TodoService.findByStatus(status);
  }

  @Mutation(() => Todo)
  async createTodo(@Args("data", { nullable: false }) data: Todo) {
    return this.TodoService.createTodo(data);
  }

  @Mutation(() => Todo)
  async updateTodo(
    @Args("params", { type: () => UpdateTodoInput })
    params: UpdateTodoInput
  ) {
    return this.TodoService.updateTodo(params);
  }

  @Mutation(() => Todo)
  async deleteTodo(
    @Args("where", { type: () => DeleteTodoInput }) where: DeleteTodoInput
  ) {
    return this.TodoService.deleteTodo(where.where);
  }
}
