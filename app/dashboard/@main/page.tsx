import Link from "next/link";

export default async function DasboardPage(){
    await new Promise(resolve => setTimeout(resolve, 3000));

    return(
        <div className="flex flex-col">
            Main

            <Link href="/dashboard/main" 
                className="text-blue-800 underline mt-2"
            >
                Go to main
            </Link>
        </div>
    )
}