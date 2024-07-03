import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateOrEditActivityBody {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description: string;
}
