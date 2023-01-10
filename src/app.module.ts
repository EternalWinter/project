import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";

import { TodoModule } from "./core/todos/todo.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ["./**/**/*.graphql"],
      definitions: {
        path: join(process.cwd(), "src/core/graphql.ts"),
        outputAs: 'class',
      },
      playground: true,
    }),
    TodoModule,
  ],
})
export class AppModule {}
