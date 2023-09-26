import getCookie from "@/app/util/getCookie";
import parseJWT from "@/app/util/parseJWT";

export default async function getUser(){
    const token = getCookie('token');

    if(!token) return null;

    let userId;
    if(token){
        const userData = parseJWT(token);
        userId = userData.userId;
    }

    const userResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users?id=${userId}`,
        {
            method:'GET'
        }
    );

    if(!userResponse.ok) return null;

    const userResponseData = await userResponse.json();

    return userResponseData[0];
}