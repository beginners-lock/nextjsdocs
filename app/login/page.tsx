"use client"

import { useActionState } from "react"
import { login } from "../../lib/actions"
import { useFormStatus } from "react-dom";

export default function LoginPage(){
    const [state, loginAction] = useActionState(login, undefined);

    return(
        <div className="text-black w-full h-full">
            <form action={loginAction} className="flex flex-col items-start justify-start">
                <input name="email" type="email" placeholder="Email" className="border border-slate-300 px-2 py-1 w-40"/>
                <p className="text-red-700 mt-1 mb-2">{state?.error.email}</p>

                <input name="password" type="password" placeholder="Password" className="border border-slate-300 px-2 py-1 w-40"/>
                <p className="text-red-700 mt-1 mb-2">{state?.error.password}</p>

                <SubmitButton/>
            </form>
        </div>
    )
}

function SubmitButton () {
    const { pending } = useFormStatus();
    
    return(
        <button type="submit" className="px-2 py-1 border border-black">
            {pending?'Submitting...':'Submit'}
        </button>
    )
}