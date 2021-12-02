import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { GetResponseDto, VoteDto } from './dto/vote-dto';
import { ApiOperation } from '@nestjs/swagger';
import { IPostResponse } from './type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/vote')
  @ApiOperation({ summary: 'Voting' })
  voteAction(@Body() voteFor: VoteDto): IPostResponse {
    return this.appService.voteAction(voteFor);
  }

  @Get()
  getResults(): GetResponseDto[] {
    return this.appService.getResults();
  }
}
