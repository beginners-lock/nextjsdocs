"use client"

interface Props {
    error: Error
    reset: ()=>void
}

export default function Error({ error, reset }: Props){
    return(
        <div>
            <h2>Something went wrong</h2>
            <p>{error.message}</p>
            <button 
                className="py-1.5 px-4 mt-2 text-white bg-black "
                onClick={reset}
            >Try again</button>
        </div>
    )
}