// import cookie from "cookie";
import axios from "axios";

const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

// eslint-disable-next-line camelcase
export default async function (
  req: {
    body: {
      data: {
        joined: any;
        slug: any;
        course: any;
        // eslint-disable-next-line camelcase
        users_permissions_user: any;
        publishedAt: any;
      };
    };
    headers: { cookie: string | any[] };
  },
  res: { send: (arg0: unknown) => void }
) {
  // eslint-disable-next-line camelcase
  const { joined, slug, course, users_permissions_user, publishedAt } =
    req.body.data;

  // console.log("it's me printing", cookie.parse(req.headers.cookie || ''));
  const token = req.headers.cookie.slice(12);

  // console.log("we got here");

  try {
    // console.log("testing 187")
    const response = await axios({
      method: "POST",
      url: `${baseUrl}/students`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        data: {
          joined,
          slug,
          course,
          users_permissions_user,
          publishedAt,
        },
      },
    });

    // console.log("If I am here then I succeeded", response.data.data.attributes.error);
    res.send(response.data.data.attributes.error);
  } catch (err) {
    // console.log("this is where it is all going wrong", JSON.stringify(err));
    console.log("fuck me finally", err);
    res.send(err);
  }
}

// export const leaveCourse = (req, res) => {
//   console.log(req.body.data);
// };
