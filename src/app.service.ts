import { Injectable } from '@nestjs/common';
import { imitateDb } from '../bd.js';
import { GetResponseDto, VoteDto } from './dto/vote-dto.js';
import { IPostResponse } from './type.js';

@Injectable()
export class AppService {
  getResults(): GetResponseDto[] {
    const resultToReturn: GetResponseDto[] = [];
    const sortedResult = imitateDb.sort(function (a, b) {
      if (a.votes > b.votes) {
        return -1;
      }
      if (a.votes < b.votes) {
        return 1;
      }
      return 0;
    });

    for (let i = 0; i < sortedResult.length; i++) {
      resultToReturn.push({
        name: sortedResult[i].name,
        votes: sortedResult[i].votes,
        position: i + 1,
      });
    }

    return resultToReturn;
  }

  voteAction(voteFor: VoteDto): IPostResponse {
    if (!imitateDb.find((person) => person.name == voteFor.name)) {
      return {
        success: false,
        message: `user ${voteFor.name} not found`,
      };
    }
    for (let i = 0; i < imitateDb.length; i++) {
      if (imitateDb[i].name == voteFor.name) {
        imitateDb[i].votes++;
      }
    }
    return {
      success: true,
    };
  }
}
