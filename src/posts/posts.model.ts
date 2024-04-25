import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
import { User } from "src/users/users.model";


interface PostCreationAttrs {
    title: string,
    description: string;
    date: string;
    userId: number;
}


@Table({tableName: "posts"}) 
export class Post extends Model<Post, PostCreationAttrs> {
    @ApiProperty({example: '1', description: "Unque ID"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'ZCT', description: "Title of task"})
    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @ApiProperty({example: 'Web application', description: "Task description"})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @ApiProperty({example: '14,04,2024', description: "Date of Task"})
    @Column({type: DataType.STRING, allowNull: false})
    date: string;

    @ApiProperty({example: 'false', description: "Task completed or not"})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    completed: boolean;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    user: User
}