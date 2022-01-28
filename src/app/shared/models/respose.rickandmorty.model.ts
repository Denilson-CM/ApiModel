import { Rickandmorty } from "./rickandmorty.model";

export class ResposeRickandmorty{
    public count?: number;
    public next?: string;
    public pages?: number;
    public prev?: null;
    public results?: Array<Rickandmorty>;
    
}