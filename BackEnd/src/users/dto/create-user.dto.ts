// dto/create-user.dto.ts

import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;
}
