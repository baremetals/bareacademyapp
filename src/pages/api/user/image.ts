import { initializeApollo } from "lib/apolloClient";
import {
  EditBackGroundImageMutationOptions,
  EditBackGroundImageDocument,
  EditProfileImageDocument,
  EditProfileImageMutationOptions,
} from "generated/graphql";


export default async function (
  req: {
    body: {
      data: {
          id: string,
          image: string,
        flag: string
      }
    };
    cookies: { bareacademy: string };
  },
  res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { data: any; }): void; new(): any; }; json: { (arg0: { message: string; }): void; new(): any; }; }; }
) {
//   const { id, file, flag } = req.body.data;
const { id, image, flag } = req.body.data;
  const cookies = JSON.parse(req.cookies.bareacademy).jwt;
  const token = `Bearer ${cookies}`;
  const apolloClient = initializeApollo(null, token);
//   console.log(cookies);
    if (flag === "COVERIMAGE") {

        try {
          console.log("back ground image update");
          const { data } =
            await apolloClient.mutate<EditBackGroundImageMutationOptions>({
              mutation: EditBackGroundImageDocument,
              variables: {
                updateUsersPermissionsUserId: id,
                data: {
                  backgroundImg: image,
                },
              },
            });
          // console.log(data);
          res.status(200).send({ data: data });
        } catch (err) {
        //   console.log("i am the error", err);
          res.status(401).json({ message: "try again later." });
        }
    } else {
        try {
          console.log("profile image update");
          const { data } =
            await apolloClient.mutate<EditProfileImageMutationOptions>({
              mutation: EditProfileImageDocument,
              variables: {
                updateUsersPermissionsUserId: id,
                data: {
                  img: image,
                },
              },
            });
          // console.log(data);
          res.status(200).send({ data: data });
        } catch (err) {
          console.log("i am the error", err);
          res.status(401).json({ message: "try again later." });
        }
    }
      
}
