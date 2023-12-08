import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUser(@Query('type') type: string) {
    return [{ type }];
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return {
      id,
    };
  }

  @Post()
  createUser() {
    return {};
  }

  @Delete(':id')
  deleteUser() {
    return {};
  }

  @Put(':id')
  updateUser() {
    return {};
  }

  @Delete()
  deleteAllUsers() {
    return {};
  }
}
