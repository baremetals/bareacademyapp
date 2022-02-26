import { initializeApollo } from "lib/apolloClient";
import {
  UpdateMeMutationOptions,
  UpdateMeDocument,
  ChangePasswordDocument,
  ChangePasswordMutationOptions,
} from "generated/graphql";


export default async function (req: { body: { data: { id: string; email: string; username: string; fullName: string; description: string; location: string; password: string; flag: string }; }; cookies: { bareacademy: string; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) {
    const { id, email, username, fullName, description, location, password, flag } = req.body.data;
    const cookies = JSON.parse(req.cookies.bareacademy).jwt;
    const token = `Bearer ${cookies}`;
    const apolloClient = initializeApollo(null, token);
    // console.log(id);

    if (flag === "PASSWORD") {
      try {
        console.log("password update");
        await apolloClient.mutate<ChangePasswordMutationOptions>({
          mutation: ChangePasswordDocument,
          variables: {
            updateUsersPermissionsUserId: id,
            data: {
              password,
            },
          },
        });
        res.status(200).json({ message: "Successfuly logged out!" });
      } catch (err) {
        res
          .status(401)
          .json({ message: "Something went wrong please try again later." });
      }
    } else {
      try {
        console.log("profile details update");
        await apolloClient.mutate<UpdateMeMutationOptions>({
          mutation: UpdateMeDocument,
          variables: {
            updateUsersPermissionsUserId: id,
            data: {
              email: email,
              username: username,
              fullName: fullName,
              description: description,
              location: location,
            },
          },
        });
        res.status(200).json({ message: "Successfuly logged out!" });
      } catch (err) {
        res
          .status(401)
          .json({ message: "Something went wrong please try again later." });
      }
    }
    
    

}