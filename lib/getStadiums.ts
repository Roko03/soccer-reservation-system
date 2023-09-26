export default async function getStadiums() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/stadiums`,
        {
            next: { revalidate: 120 },
        }
    );

    if(!response.ok) throw new Error(`Failed to fetch stadiums`);

    return response.json()
}