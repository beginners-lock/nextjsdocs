"use client"

import { logout } from "@/lib/actions"
import { useActionState } from "react"
import { useFormStatus } from "react-dom";

export default function UserPage(){
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, logoutAction] = useActionState(logout, undefined);

    return(
        <div className="w-full text-black">
            <form action={logoutAction}>     
            <LogoutButton/>
            </form>
        </div>
    )
}

function LogoutButton(){
    const { pending } = useFormStatus();

    return(
        <button className="border border-black px-2 py-1">
            { pending ? 'Logging out' : 'Logout' }
        </button>
    )
}