import { Match } from './match.model';
import { Team } from "./team.model";
import { User } from "./user.model";

export class Coupon {
    _id?:string;
    userid:User;
    matchid:Match;
    username:String;
    teamA: Team;
    teamB: Team;
    bet:number;
    odds:number;
    result:Number;
    success?:Boolean;
    outcome:String;
    date?:String;
    favoriteTeam?:Boolean;
    win?:number
}