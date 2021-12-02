"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const bd_js_1 = require("../bd.js");
let AppService = class AppService {
    getResults() {
        const resultToReturn = [];
        const sortedResult = bd_js_1.imitateDb.sort(function (a, b) {
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
    voteAction(voteFor) {
        if (!bd_js_1.imitateDb.find((person) => person.name == voteFor.name)) {
            return {
                success: false,
                message: `user ${voteFor.name} not found`,
            };
        }
        for (let i = 0; i < bd_js_1.imitateDb.length; i++) {
            if (bd_js_1.imitateDb[i].name == voteFor.name) {
                bd_js_1.imitateDb[i].votes++;
            }
        }
        return {
            success: true,
        };
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map