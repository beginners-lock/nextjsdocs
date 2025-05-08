export default async function DasboardPage(){
    await new Promise(resolve => setTimeout(resolve, 3000));

    return(
        <div>
            Dashboard
        </div>
    )
}