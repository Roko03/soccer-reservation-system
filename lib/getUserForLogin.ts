import bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';

export default async function getUserForLogin(data: LoginData) {
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

  if (!userData || !userData[0].password) return false;

  const hashedPassword = userData[0].password;

  const passwordMatch = await bcrypt.compare(data.password, hashedPassword);

  if (!passwordMatch) return false;
  
  const token = sign({ userId: userData[0].id, username: userData[0].username},`${process.env.NEXT_PUBLIC_JWT_SECRET_KEY}` ,{ expiresIn: `${process.env.NEXT_PUBLIC_JWT_EXPIRES_IN}` });

  const cookie = serialize('token', token, {
    httpOnly: true,
    maxAge: 3600,
    path: '/',
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  });


  return { token, cookie };
}
