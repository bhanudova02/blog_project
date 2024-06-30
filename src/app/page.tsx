import Image from "next/image";

export default function Home() {
  return (<>
    <div className="flex flex-row items-center justify-between shadow-md shadow-green-200 text-lg bg-white px-4 py-2">
      <div>
        <Image src={'/logo.png'} width={600} height={600} className="w-20" alt="Logo" />
      </div>
      <div>
        <ul className="flex gap-6">
          <li>Explore</li>
          <li>Business</li>
          <li>Technology</li>
          <li>Lifestyle</li>
        </ul>
      </div>
      <div>
        Profile
      </div>

    </div>
  </>);
}
