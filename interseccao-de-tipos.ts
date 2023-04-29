type User = {
    id: number;
    name: string;
}

type Char = {
    nickname: string;
    level: number;
}

type PlayerInfo = User & Char
let info: PlayerInfo = {
    name: 'Mairão',
    id: 39,
    nickname: "fastRabbit",
    level: 30,
}

console.log(info)