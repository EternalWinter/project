import { Resolver, Mutation, Query, Args } from "@nestjs/graphql";

import { TodoStatus } from "./dto/common/Status.dto";
import { Todo } from "./dto/generics/Todo.dto";
import { TodoService } from "./todo.service";
import { UpdateInput } from "./dto/inputs/UpdateInput";
import { DeleteTodoInput } from "./dto/inputs/DeleteInput";
import { UpdateDataInput } from './dto/inputs/DataInput';

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
  async createTodo(@Args("data", { nullable: false }) data: UpdateDataInput) {
    return this.TodoService.createTodo(data);
  }

  @Mutation(() => Todo)
  async updateTodo(
    @Args("params", { type: () => UpdateInput })
    params: UpdateInput
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
