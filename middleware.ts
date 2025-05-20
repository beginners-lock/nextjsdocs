import { NextRequest, NextResponse } from "next/server";

const publicRoutes = ["/login"];
const protectedRoutes = ["/user"];

//Filters out Next.js internal assets
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};

export default async function middleware(req: NextRequest){
    //console.log('>>middlewaare');
    const destination = req.nextUrl.pathname;
    
    if(publicRoutes.includes(destination)){

    }

    if(protectedRoutes.includes(destination)){

    }

    NextResponse.next();
}