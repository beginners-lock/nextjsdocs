import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/session";

const publicRoutes = ['/login']
const privateRoutes = ['/user']

//Filters out Next.js internal assets
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};

export default async function middleware(req: NextRequest){
    const destination = req.nextUrl.pathname;
    
    const session = req.cookies.get("session")?.value;

    if(publicRoutes.includes(destination) && session){
        const payload = await decrypt(session);

        if(payload.userId){
           return NextResponse.redirect(new URL('/user', req.nextUrl)) 
        }
    }
    
    if(privateRoutes.includes(destination) && !session){
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    return NextResponse.next()
}