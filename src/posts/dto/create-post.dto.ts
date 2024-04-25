import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty({example: 'ZCT', description: "Title of task"})
    readonly title: string;
    @ApiProperty({example: 'Web application', description: "Task description"})
    readonly description: string;
    @ApiProperty({example: '14,04,2024', description: "Date of Task"})
    readonly date: string;
    @ApiProperty({example: 'false', description: "Task completed or not"})
    readonly completed: boolean;
    readonly userId: number;
}