interface Props{
    params: Promise<{id: string}>
}

export default async function PostPage({ params }: Props){
    const { id } = await params;

    return (
        <div>{`Post ${id}`}</div>
    )
}