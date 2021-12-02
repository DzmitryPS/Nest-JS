import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VoteDto {
  @ApiProperty()
  @IsString()
  name: string;
}

export class GetResponseDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsInt()
  votes: number;

  @ApiProperty()
  @IsInt()
  position: number;
}
