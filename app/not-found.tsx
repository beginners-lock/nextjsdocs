import Link from "next/link"

export default function NotFound(){
    return(
        <div className="h-screen flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-4">
            Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/" className="text-blue-600 underline">
            Go back home
        </Link>
        </div>
    )
}