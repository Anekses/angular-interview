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

export interface Winner {
    season: number;
    driver: Driver;
}