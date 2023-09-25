type RegisterData = {
    username:string;
    email:string;
    password:string;
    repeatPassword:string;
}

type LoginData = {
    email: string;
    password: string;
}

type RegisterUser = {
    username:string;
    email:string;
    password:string;
}

type Stadium = {
    id:string;
    name: string;
    location: string;
    imageUrl: string;
    latitude: number;
    longitude: number;
}