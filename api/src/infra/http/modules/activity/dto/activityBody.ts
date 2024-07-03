import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateActivityBody {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description: string;
}
