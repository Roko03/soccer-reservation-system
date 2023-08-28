export default async function registerUser(data: RegisterUser) {
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