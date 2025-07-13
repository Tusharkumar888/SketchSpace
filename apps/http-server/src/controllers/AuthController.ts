import { client } from "@repo/db/config";
import { CreateUserShema, VerifyUserShema } from "@repo/common/types";
import { Request, Response } from 'express';
var jwt = require('jsonwebtoken');

const JWTSECRET ="34f772d49767cf290f2301b8e9bc14dee872a2114c187461c620d57f141c1615"//store it in env file
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


export const signup = async (req: Request, res: Response) => {
  const user = req.body;
  const parseUser = CreateUserShema.safeParse(req.body);
  if (!parseUser.success) {

    return res.status(statusCode.BAD_REQUEST).json({
      message: "Please enter valid input values.",
    });
  }
  const existingUser = await client.users.findFirst({
    where: { email: parseUser.data.email },
  });

  if (existingUser) {

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

    res.status(statusCode.INTERNAL_SERVER_ERROR).json({
      message: "unable to create user",
    });
  }
  var token = jwt.sign({email: parseUser.data.email}, JWTSECRET);

  res.status(statusCode.CREATED).json({
    message: "user created sucessfully " + token
  });
}




export const signin = async (req: Request, res: Response) => {
  const user = req.body;
  const parseUser = VerifyUserShema.safeParse(req.body);
  if (!parseUser.success) {

    return res.status(statusCode.BAD_REQUEST).json({
      message: "Please enter valid input values.",
    });
  }
  const existingUser = await client.users.findFirst({
    where: { email: parseUser.data.email },
  });
  console.log(existingUser)
  if (!existingUser) {

    res.status(statusCode.UNAUTHORIZED).json({
      message: " wrong email and password",
    });
  }

    var token = jwt.sign({email: parseUser.data.email}, JWTSECRET);

  res.status(statusCode.CREATED).json({
    message: "log in sucessfully " + token
  });
};

