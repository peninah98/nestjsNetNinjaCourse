import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUser() {
    return [];
  }
  @Get(':id')
  getUserById() {
    return {};
  }
}
