/* eslint-disable @typescript-eslint/no-explicit-any */
import { object, string } from "zod";
import { createSession, deleteSession } from "./session";
import { redirect } from "next/navigation";

const user = {
    id: "faudfs8sfa9fsjapsvl",
    email: "chukwurophi@gmail.com",
    password: "redc2003"
}

const validationSchema = object({
    email: string({ message: "Empty field" }).nonempty("Empty field").email("Invalid email"),
    password: string({ message: "Empty field" }).nonempty("Empty field").min(6, "Minimum of 6 characters"),
})

export async function login(prevState: any, formdata: FormData){
    const email = formdata.get("email");
    const password = formdata.get("password");

    const result = await validationSchema.safeParse({ email, password });

    if(!result.success){
        return { error: result.error.flatten().fieldErrors }
    }

    if(user.email!==email || user.password!==password){
        return { error: { email: "Invalid credentials", password: "Invalid credentials", } }
    }

    await createSession(user.id);
    redirect('/user')
}

export async function logout(){
    await deleteSession();
    redirect('/login')
}