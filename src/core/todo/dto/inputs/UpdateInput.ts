import { Field, InputType } from "@nestjs/graphql";
import { WhereInput } from './WhereInput';
import { UpdateDataInput } from './DataInput';

@InputType()
export class UpdateInput {
  @Field(() => WhereInput)
  where: WhereInput;

  @Field(() => UpdateDataInput, { nullable: false })
  data: UpdateDataInput;
}