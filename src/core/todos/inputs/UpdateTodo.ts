import { ObjectType, Field } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";

@ObjectType()
export class UpdateTodoInput {
  @Field({ nullable: true })
  where: Prisma.TodoWhereUniqueInput;

  @Field({ nullable: false })
  data: Prisma.TodoUpdateInput;
}
