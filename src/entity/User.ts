export class User
{
    public id: number;
    public username: string;
    public password: string;
    public age: number;
    constructor (id :number,username:string,password: string,age: number)
    {
        this.id=id;
        this.username=username;
        this.password=password;
        this.age=age;
    }
}