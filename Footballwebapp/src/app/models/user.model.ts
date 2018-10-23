import { Team } from "./team.model";

export class User {
    _id?: String;
    teamid?: Team;
    winteamid?: Team;
    regdate?: String;
    username: String;
    name?: String;
    email?: String;
    password?: String;
    score?: Number;
    nettoscore?: Number;
    winteamcount?: Number;
    avatar?: String;
    aktiv?: Number;
    role?: String
}