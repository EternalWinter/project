import { Field } from '@nestjs/graphql';
import { TodoStatus } from './Status.dto';

export class Todo {
	@Field(() => Number)
	id: number;

	@Field(() => String)
	name: string;

	@Field(() => String)
	description: string;

	@Field(() => Number)
	expires: number;

	@Field(() => Boolean)
	isCompleted: boolean;

	@Field(() => TodoStatus)
	status: TodoStatus;
}
