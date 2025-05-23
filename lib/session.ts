"use server"

import { JWTPayload, jwtVerify, SignJWT } from "jose"
import { cookies } from "next/headers";

/*interface Payload {
    userId: string
    expiresAt: Date
}*/

const SECRET_KEY = process.env.SECRET_KEY;
const secret = new TextEncoder().encode(SECRET_KEY);

export async function createSession(userId: string){
    console.log('me')
    const expiresAt = new Date(Date.now() + 7*24*60*60*1000);
    const payload = { userId, expiresAt };

    const session = await encrypt(payload);

    const cookie = await cookies();
    cookie.set("session", session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt
    })
}

export async function deleteSession(){
    console.log('me')
    const cookie = await cookies();
    cookie.delete("session");
}

async function encrypt(payload: JWTPayload){
    console.log('me')
    return await new SignJWT(payload).setProtectedHeader({
        alg: "HS256"
    }).setIssuedAt().setExpirationTime("7d").sign(secret);
}

export async function decrypt(session: string){
    console.log('me')
    const { payload } = await jwtVerify(session, secret, {
        algorithms: ["HS256"]
    });

    return payload;
}