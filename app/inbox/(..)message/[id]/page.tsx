import Link from "next/link";

interface Props {
    params: Promise<{ id: string }>
}

export default async function Message({ params }: Props){
    const { id } = await params;
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    return(
        <div className="bg-gray-600 w-96 h-96 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <Link href="/inbox" className="text-red-800 mb-4">
                Close
            </Link>

            {`Message ${id}`}
        </div>
    )
}