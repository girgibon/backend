import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { Post } from "./posts/posts.model";

@Module ({
    controllers: [],
    providers: [],
    imports: [
      SequelizeModule.forRoot({
        dialect: 'postgres',
        host: 'zct.postgres.database.azure.com',
        port: 5432,
        username: 'postgres',
        password: 'Qwerty123',
        database: 'postgres',
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false
          }
        },
        models: [User, Role, UserRoles, Post],
        autoLoadModels: true
      }),
      UsersModule,
      RolesModule,
      AuthModule,
      PostsModule,
      ],
})
export class AppModule {}
