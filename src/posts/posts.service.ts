import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './posts.model';
import { where } from 'sequelize';

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private postRepository: typeof Post) {}

    async create(dto: CreatePostDto) {
        const post = await this.postRepository.create({...dto})
        return post;
    }

    async getAllPosts() {

        const users = await this.postRepository.findAll({include: {all: true}})
        return users
    }
}
