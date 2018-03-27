export class Usuario{
	constructor(
        public id: number,
        public username: string,
        public name: string,
        public appaterno: string,
        public apmaterno: string,
        public email: string,
        public telefono: string,
        public password:string,
    ){}
}