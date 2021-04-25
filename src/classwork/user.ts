type UserId = number;

interface UserInterface {
    id: UserId;
    firstName: string;
    lastName: string;
    email: string;
    sendEmail: (draft: boolean) => boolean;
    update: (params: Partial<UserInterface>) => boolean;
}

class User implements UserInterface{
    email: string;
    firstName: string;
    id: UserId;
    lastName: string;
    userName: Pick<UserInterface, "firstName" | "lastName">
    constructor(params: Omit<UserInterface, "sendEmail" | "update">) {
        this.email = params.email;
        this.firstName = params.firstName;
        this.id = params.id;
        this.lastName = params.lastName;
        this.userName = {
            firstName: '1',
            lastName: '1'
        }
    }

    update = (params: Omit<Partial<UserInterface>, "id">) => {
        if (params.email) this.email = params.email;
        console.log(params.email)
        return true;
    };

    sendEmail = (draft: boolean) => {
        console.log('Email was sent')
        return false;
    }
}

const user1: User = new User({id: 1, firstName: 'Anna', lastName: 'Wine', email: 'anna@gmail.com'});




