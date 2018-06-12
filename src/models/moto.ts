import { Marca } from "./marca";
import { Modelo } from "./modelo";
import { Version } from "./version";

export class Moto {
    constructor(
        public id: number,
        public marca: Marca,
        public modelo: Modelo,
        public version: Version,
        public anio: number,
        public km: number,
        public serie: number

    ) {

        
        
    }
}