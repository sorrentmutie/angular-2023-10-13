export class User {

    constructor(public name: string, public surname: string){}
}


export interface UserInterface {
    name: string;
    surname: string;
}

// x: user = new User("Mario", "Rossi");
// y: UserInterface = { name: "Luigi", surname: "Bianchi"}