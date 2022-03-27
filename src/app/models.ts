export interface DriverResponse {
    DriverStandings: Array<DriverStandings>
    round: string;
    season: string;
}

export interface DriverStandings {
    Constructors: Array<Constructor>
    Driver: Driver;
    points: string;
    position: string;
    positionText: string;
    wins: string;
}

export interface Constructor {
    constructorId: string;
    name: string;
    nationality: string;
    url: string;
}

export interface Driver {
    dateOfBirth: string;
    driverId: string;
    familyName: string;
    givenName: string;
    nationality: string;
    url: string;
}

export interface WinnerResponse {
    winners: Winner[];
}

export interface Winner {
    season: number;
    driver: Driver;
}

export interface Result {
    races: Race[]
}

export interface Race {
    season: string;
    raceName: string;
    date: string;
    Circuit: Circuit;
    Results: RaceResult[]
}

export interface Circuit {
    circuitName: string;
}

export interface RaceResult {
    Driver: Driver
}