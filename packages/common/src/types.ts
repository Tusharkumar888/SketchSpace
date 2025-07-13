import * as z from "zod/v4"; 
 
export const CreateUserShema = z.object({ 
  username: z.string().min(3).max(20),
  email: z.email({ pattern: z.regexes.email }),
  password: z.string().min(8),

});



export const VerifyUserShema = z.object({ 
  email: z.email({ pattern: z.regexes.email }),
  password: z.string().min(8),

});

export const CreateGroupShema = z.object({
   slug: z.string().min(3).max(20),
   adminId:z.string()
})