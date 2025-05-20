import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const SECRET_KEY = process.env.SECRET_KEY;
const secretkey = new TextEncoder().encode(SECRET_KEY);

type PayLoad = {
    userId: string
    expiresAt: Date
}

export const createSession = async (userId: string) => {
    const expiresAt = new Date(Date.now() + 7*24*60*60*1000);
    const payload = { userId, expiresAt };
    console.log('I am in create session');
    const session = await encrypt(payload);

    const cookie = await cookies()
    cookie.set("session", session, {
        httpOnly: true,
        expires: expiresAt,
        secure: true
    })
    console.log(cookie);
}

export const deleteSession = async () => {
    const cookie = await cookies()
    cookie.delete("session")
}

const encrypt = async (payload: PayLoad) => {
    return new SignJWT(payload).setProtectedHeader({
        alg: "HS256"
    }).setIssuedAt().setExpirationTime("7d").sign(secretkey)
}

export const decrypt = async (session: string | undefined = "") => {
    try{
        const { payload } = await jwtVerify(session, secretkey, {
            algorithms: ["HS256"]
        })

        return { payload }
    }catch(e){
        console.log('Decryption error: '+e);
    }
}