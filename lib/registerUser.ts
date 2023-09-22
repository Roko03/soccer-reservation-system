export default async function registerUser(data: RegisterUser) {
    const usernameExistResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users?username=${data.username}`,
        {
        cache: 'no-store',
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
        }
    );

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

    if (!usernameExistResponse.ok || !emailExistResponse.ok) return null;

    const usernameExist = await usernameExistResponse.json();
    const emailExist = await emailExistResponse.json();

    if(usernameExist.length > 0 || emailExist.length > 0) return null;
    
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users`,
        {
            cache:'no-store',
            method:'POST',
            headers:{
                "content-type": "application/json",
            },
            body: JSON.stringify(data)
        }
    );

    if(!response.ok) return null

    return response.json();
}