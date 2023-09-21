import bcrypt from "bcryptjs"; // You need to import the bcrypt library

export default async function loginUser(data: LoginData){
    const emailExistResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users?email=${data.email}`,
        {
        cache: 'no-store',
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
        }
    );

    if (!emailExistResponse.ok) return null;

    const userData = await emailExistResponse.json();

    console.log(userData)

    if(!userData || !userData[0].password) return false;

    const hashedPassword = userData[0].password;

    const passwordMatch = await bcrypt.compare(data.password, hashedPassword)

    
}