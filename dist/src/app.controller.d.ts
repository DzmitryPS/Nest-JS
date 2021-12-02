import { AppService } from './app.service';
import { GetResponseDto, VoteDto } from './dto/vote-dto';
import { IPostResponse } from './type';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    voteAction(voteFor: VoteDto): IPostResponse;
    getResults(): GetResponseDto[];
}
