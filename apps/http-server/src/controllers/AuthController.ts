import { client } from "@repo/db/config";
import {
  CreateGroupShema,
  CreateMessageShema,
  CreateUserShema,
  VerifyUserShema,
} from "@repo/common/types";
import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
const JWTSECRET = process.env.JWTSECRET;
var jwt = require("jsonwebtoken");

enum statusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
  SERVICE_UNAVAILABLE = 503,
}

//singup and create jwt token
export const signup = async (req: Request, res: Response) => {
  const parseUser = CreateUserShema.safeParse(req.body);
  if (!parseUser.success) {
    return res.status(statusCode.BAD_REQUEST).json({
      message: "Please enter valid input values.",
    });
  }

  try {
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
  } catch (error) {
    console.log(error);
  }

  var token = jwt.sign({ email: parseUser.data.email }, JWTSECRET);

  res.status(statusCode.CREATED).json({
    message: "user created sucessfully " + token,
  });
};

//signin and create jwt token
export const signin = async (req: Request, res: Response) => {
  const parseUser = VerifyUserShema.safeParse(req.body);
  if (!parseUser.success) {
    return res.status(statusCode.BAD_REQUEST).json({
      message: "Please enter valid input values.",
    });
  }

  try {
    const existingUser = await client.users.findFirst({
      where: { email: parseUser.data.email },
    });

    if (!existingUser) {
      res.status(statusCode.UNAUTHORIZED).json({
        message: " wrong email and password",
      });
    }
  } catch (error) {
    console.log(error);
  }

  var token = jwt.sign({ email: parseUser.data.email }, JWTSECRET);

  res.status(statusCode.CREATED).json({
    message: "log in sucessfully " + token,
  });
};

//ceating a group
export const createGroup = async (req: Request, res: Response) => {
  const parseGrop = CreateGroupShema.safeParse(req.body);

  if (!parseGrop.success) {
    return res.status(statusCode.BAD_REQUEST).json({
      mess: "invalid cradantials",
    });
  }
  try {
    const foundUser = await client.users.findFirst({
      where: { id: parseGrop.data.adminId },
    });
    const foundgroup = await client.grop.findFirst({
      where: { slug: parseGrop.data.slug },
    });

    if (!foundUser) {
      return res.status(statusCode.UNAUTHORIZED).json({
        mess: "no user with this id",
      });
    }
    if (foundgroup) {
      return res.status(statusCode.FORBIDDEN).json({
        mess: "can't create a slug with same name",
      });
    }

    const createdGroup = await client.grop.create({
      data: {
        adminId: parseGrop.data.adminId,
        slug: parseGrop.data.slug,
      },
    });

    if (!createdGroup) {
      return res.status(statusCode.INTERNAL_SERVER_ERROR).json({
        mess: "unable to create user",
      });
    }
  } catch (error) {
    console.log(error);
  }

  return res.status(statusCode.CREATED).json({ mess: "group created sucess" });
};

//sending message to the group
export const createMessage = async (req: Request, res: Response) => {
  const parseMessage = CreateMessageShema.safeParse(req.body);

  if (!parseMessage.success) {
    return res.status(statusCode.BAD_REQUEST).json({
      mess: "invalid cradantials ",
    });
  }

  try {
    const founduser = await client.users.findFirst({
      where: { id: parseMessage.data?.userId },
    });
    //check the spalling
    const foundsender = await client.grop.findFirst({
      where: { id: parseMessage.data?.groupId },
    });
    if (!founduser?.id) {
      return res.status(statusCode.FORBIDDEN).json({
        mess: "unAuthrized user",
      });
    }

    if (!foundsender?.id) {
      return res.status(statusCode.NOT_FOUND).json({
        mess: "sender not found",
      });
    }

    const createdMessage = await client.message.create({
      data: {
        message: parseMessage.data.message,
        userId: parseMessage.data.userId,
        groupId: parseMessage.data.groupId,
      },
    });

    if (!createdMessage.id) {
      return res.status(statusCode.INTERNAL_SERVER_ERROR).json({
        mess: "unable to send message ",
      });
    }
  } catch (error) {
    console.log(error);
  }

  return res.status(statusCode.OK).json({
    mess: "messgae send sucess",
  });
};