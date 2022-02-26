

export default async function(req: { cookies: { bareacademy: string; }; }, res: { send: (arg0: any) => void; }) {
  const cookies = JSON.parse(req.cookies.bareacademy);
  const {
    id,
    username,
    slug,
    img: img,
    backgroundImg,
    online,
  } = cookies;
  const user = {
    id,
    username,
    slug,
    img,
    backgroundImg,
    online,
  };
  res.send(user);
}