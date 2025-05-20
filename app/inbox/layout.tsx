import Link from "next/link";

export default function InboxLayout(){
    return(
        <div className="flex flex-col items-center">
            Inbox Page

            <Link href="/message/4" className="mt-4 text-blue-800 underline">
                Message 4
            </Link>
        </div>
    )
}