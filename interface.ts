interface User {
    name: string;
    id?: number;
}

function registerNewUser(newUser: User){
    newUser.id
}

let newUser: User = {
    name: "Maires",
    id: 23,
}