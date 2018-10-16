import { Match } from '../models/match.model';

export interface ModalCoupon {
    match: Match,
    teamname: String,
    bet: Number,
    odds: Number
}