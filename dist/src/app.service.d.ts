import { GetResponseDto, VoteDto } from './dto/vote-dto.js';
import { IPostResponse } from './type.js';
export declare class AppService {
    getResults(): GetResponseDto[];
    voteAction(voteFor: VoteDto): IPostResponse;
}
