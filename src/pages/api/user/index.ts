

export default async function(req: { cookies: { bareacademy: string; }; }, res: { send: (arg0: any) => void; }) {
  const bareacademyCookie = req.cookies.bareacademy;
  if (bareacademyCookie !== undefined) {
    const cookies = JSON.parse(req.cookies.bareacademy);
    try {
      const { id, username, slug, img: img, backgroundImg, online } = cookies;
      const user = {
        id,
        username,
        slug,
        img,
        backgroundImg,
        online,
      };
      res.send(user);
    } catch (err) {
      return
    }
  } else {
    res.send("no user found, please log in.");
  }
  
}