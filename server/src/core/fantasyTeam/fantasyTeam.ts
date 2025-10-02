export class FantasyTeam {
    // TODO: define roster, owner info, scoring, etc.
    private ownerId: string;

    private leagueId: string;

    private draftId: string;

    // https://sleepercdn.com/avatars/thumbs/<avatar_id>
    private avatarId: string;

    // TODO: narrow object type
    private leagueSettings: Record<any, any>;

    // TODO: confirm object type
    private scoringSettings: Record<string, number>;

    private rosterPositions: string[];

    private teamStats: Record<string, number>;

    private seasonYear: string;

    private players: string[];

    /** ID of team within league. */
    private rosterId: number;

    constructor(
        ownerId: string,
        leagueId: string,
        draftId: string,
        avatarId: string,
        leagueSettings: Record<any, any>,
        scoringSettings: Record<string, number>,
        rosterPositions: string[],
        teamStats: Record<string, number>,
        seasonYear: string,
        players: string[],
        rosterId: number
    ) {
        this.ownerId = ownerId;
        this.leagueId = leagueId;
        this.draftId = draftId;
        this.avatarId = avatarId;
        this.leagueSettings = leagueSettings;
        this.scoringSettings = scoringSettings;
        this.rosterPositions = rosterPositions;
        this.teamStats = teamStats;
        this.seasonYear = seasonYear;
        this.players = players;
        this.rosterId = rosterId;
    }

    public getOwnerId(): string {
        return this.ownerId;
    }
}