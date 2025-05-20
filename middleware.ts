import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/session";

const publicRoutes = ["/login"];
const protectedRoutes = ["/user"];

//Filters out Next.js internal assets
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};

export default async function middleware(req: NextRequest){
    //console.log('>>middlewaare');
    const destination = req.nextUrl.pathname;
    const cookie = await cookies();

    const session = cookie.get("session")?.value;
    const userId = await decrypt(session)
    
    if(publicRoutes.includes(destination) && userId){
        return NextResponse.redirect(new URL('/user', req.nextUrl));
    }

    if(protectedRoutes.includes(destination) && !userId){
        console.log('protected>>'+userId);
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }

    return NextResponse.next();
}