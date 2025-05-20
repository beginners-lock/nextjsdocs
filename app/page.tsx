//import Image from "next/image";

import Link from "next/link";

//import { notFound } from "next/navigation";

export default async function Home() {
  //Simulates the loading page
  //await new Promise(resolve => setTimeout(resolve, 5000));

  //Simulate the not-found page
  //notFound()

  //Simulate an error page
  //throw new Error('This is a simulated error fam.')

  return (
    <div className="flex flex-col">
      Home

      <Link href={'/dashboard'} className="text-blue-700 underline">
        Go to dashboard
      </Link>
    </div>
  );
}
