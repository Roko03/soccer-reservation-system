export default function getCookie(name: string){
  const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
  const targetCookie = cookies.find((cookie) => cookie.startsWith(`${name}=`));
  if (targetCookie) {
    return targetCookie.split("=")[1];
  }
  return null;
};
