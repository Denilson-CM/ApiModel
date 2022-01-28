import { Loc, Orig } from "./templates.model";

export class Rickandmorty {
    public id?: number;
    public name?: string;
    public status?: string;
    public species?: string;
    public type?: string;
    public gender?: string;
    public origin?: Orig;
    public location?: Loc;
}

