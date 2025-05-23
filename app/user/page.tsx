"use client"

import { logout } from "@/lib/actions";
import { useActionState } from "react"
import { useFormStatus } from "react-dom";

export default function UserPage(){
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, logoutAction] = useActionState(logout, undefined);

    return(
        <div className="text-black w-full h-full">
            <form action={logoutAction} className="flex flex-col items-start justify-start">
                <LogoutButton/>
            </form>
        </div>
    )
}

function LogoutButton(){
    const { pending } = useFormStatus();

    return(
        <button type="submit" className="px-2 py-1 border border-black bg-black text-white">
            {pending ? 'Logging out...' : 'Logout'}
        </button>
    )
}

