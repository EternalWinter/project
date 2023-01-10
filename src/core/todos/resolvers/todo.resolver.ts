import { Resolver, Mutation, Query, Args } from "@nestjs/graphql";
import { Prisma, Status, Todo } from "@prisma/client";

import { TodoService } from "../services/todo.service";

@Resolver("Todo")
export class TodoResolver {
  constructor(private readonly TodoService: TodoService) {}

  @Query()
  async getTodo(
    @Args("id")
    id
  ) {
    return this.TodoService.findOne(id);
  }

  @Query()
  async getTodos() {
    return this.TodoService.findAll();
  }

  @Query()
  async getTodosByStatus(
    @Args("status")
    status: Status
  ) {
    return this.TodoService.findByStatus(status);
  }

  @Mutation()
  async createTodo(@Args("data", { nullable: false }) data: Todo) {
    return this.TodoService.createTodo(data);
  }

  @Mutation()
  async updateTodo(
    @Args("params")
    params: {
      where: Prisma.TodoWhereUniqueInput;
      data: Prisma.TodoUpdateInput;
    }
  ) {
    return this.TodoService.updateTodo(params);
  }

  @Mutation()
  async deleteTodo(@Args("where") where: Prisma.TodoWhereUniqueInput) {
    return this.TodoService.deleteTodo(where); 
  }
}
