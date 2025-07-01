const express = require("express");
const router = express.Router();
import { client } from "@repo/db/config";
import { CreateUserShema, VerifyUserShema } from "@repo/common/types";
//move it inside the shairable file and find the solution to copile it first
enum statusCode {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    INTERNAL_SERVER_ERROR = 500,
    SERVICE_UNAVAILABLE = 503
}
router.post("/signup", async (req: Request, res: Response) => {
  const user = req.body;
  const parseUser = CreateUserShema.safeParse(req.body);
  if (!parseUser.success) {
    // @ts-ignore
    return res.status(statusCode.BAD_REQUEST).json({
      message: "Please enter valid input values.",
    });
  }
  const existingUser = await client.users.findFirst({
    where: { email: parseUser.data.email },
  });
  console.log(existingUser);
  if (existingUser) {
    // @ts-ignore
    res.status(statusCode.CONFLICT).json({
      message: " Already have a user with this email",
    });
  }

  const newUser = await client.users.create({
    data: {
      userName: parseUser.data.username,
      email: parseUser.data.email,
      password: parseUser.data.password,
    },
  });

  if (!newUser) {
    //@ts-ignore
    res.status(statusCode.INTERNAL_SERVER_ERROR).json({
      message: "unable to create user",
    });
  }
  //@ts-ignore
  res.status(statusCode.CREATED).json({
    message: "user created sucessfully " + parseUser.data.username,
  });
});





router.post("/signin", (req: Request, res: Response) => {
  const user = VerifyUserShema.safeParse(req.body);

  if (!user.success) {
    // @ts-ignore
    return res.status(statusCode.BAD_REQUEST).json({
      message: "Please enter valid input values.",
    });
  }
});

router.get("/hello", (req: Request, res: Response) => {
  const user = req.body;

  //@ts-ignore
  return res.status(statusCode.BAD_REQUEST).json({
    message: "Please enter valid input values." + user,
  });
});

module.exports = router;
