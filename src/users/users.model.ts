import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { BelongsToMany } from "sequelize-typescript";
import { UserRoles } from "src/roles/user-roles.model";
import { Post } from "src/posts/posts.model";


interface UserCreationAttrs {
    email: string,
    nickname: string;
    password: string;
}


@Table({tableName: "users"})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: "Unque ID"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'user@gmail.com', description: "Email"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '12345678', description: "Password"})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'true', description: 'Banned or not'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'It does not matter', description: 'Reason for ban'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]

    @HasMany(() => Post)
    posts: Post[];
}