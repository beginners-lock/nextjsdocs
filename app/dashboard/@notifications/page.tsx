import Link from "next/link";

export default async function NotificationPage(){
    await new Promise(resolve => setTimeout(resolve, 5000));

    return(
        <div className="flex flex-col">
            Notifications

            <Link href="/dashboard/notificatiosn"
                className="text-blue-800 mt-2 underline"
            >
            Go to notifications
            </Link>
        </div>
    )
}