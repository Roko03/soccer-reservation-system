import parseJWT from "@/app/util/parseJWT";
import { setCookie } from "cookies-next";

export default async function loginUser(token: string) {

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const userData = parseJWT(token)
    const userId = userData.userId;

    const authenticatedResponse  = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users?id=${userId}`, {headers: headers}
    );

    if (!authenticatedResponse.ok) return null;

    setCookie('token',token,{path: '/'})

    const authenticatedData = await authenticatedResponse.json();

    return authenticatedData;
}