import { OmitType, InputType } from "@nestjs/graphql";
import { Todo } from "../generics/Todo.dto";

@InputType()
export class UpdateDataInput extends OmitType(Todo, ["id"] as const) {}