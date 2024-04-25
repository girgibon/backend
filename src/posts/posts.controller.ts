import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponse, ApiOperation } from '@nestjs/swagger';

@ApiTags("Posts")
@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) {}

    @ApiOperation({summary: 'Post creation'})
    @ApiResponse({status: 200, type: Post})
    @Post()
    createPost(@Body() dto: CreatePostDto) {
        return this.postService.create(dto)
    }

    @ApiOperation({summary: 'Getting all posts'})
    @Get()
    getALL() {
        return this.postService.getAllPosts();
    }
}
