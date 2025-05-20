"use server"
import { object, string } from "zod";
import { createSession, deleteSession } from "./session";
import { redirect } from "next/navigation";

const validationSchema = object({
        email: string({ message: "This field is required" }).nonempty("This field is required")
                .email({ message: "Invalid email" }),
        password: string({ message: "This field is required" }).nonempty("This field is required")
                    .min(8, "Minimum of 8 characters")
    });

const test = {
    id: "sfas8gflsg94rp309fdsfga",
    email: "chukwurophi@gmail.com",
    password: "password"
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function login(prevstate: any, formdata: FormData){
    const email = formdata.get("email");
    const password = formdata.get("password");
    
    const result = validationSchema.safeParse({ email, password });

    //Check if the data wasn't sent right
    if(!result.success){
        return { error: result.error.flatten().fieldErrors }
    }

    //Check if the email and password are correct
    if(email!==test.email || password!==test.password){
        return { error: { email: "Invalid credentials", password: "Invalid credentials" } }
    }

    await createSession(test.id)

    redirect('/user')

}

export async function logout(){
    await deleteSession()
    redirect('/login')
}