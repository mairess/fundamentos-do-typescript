type TUser = {
    ide: number,
    name: string,
}

type TPayment = {
    method: string,
}

type TAccount = TUser & IUser;

interface IUser {
    ide: number,
    name: string,
}

interface IPayment {
    method: string,
}

interface IAccount extends IUser, IPayment {}