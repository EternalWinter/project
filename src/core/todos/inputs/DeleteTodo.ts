import { ObjectType, Field } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";

@ObjectType()
export class DeleteTodoInput {
  @Field({ nullable: false })
  where: Prisma.TodoWhereUniqueInput;
}
