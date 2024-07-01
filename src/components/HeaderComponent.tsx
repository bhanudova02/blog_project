'use client'
import Image from "next/image";
import { navListData } from "../lib/data";
import { NavBarComponent } from "./NavBarComponent";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function HeaderComponent() {
    const pathname = usePathname();
    return (
        <div className="fixed w-full z-50">
            <div className="shadow-md shadow-green-200 text-lg bg-white py-2.5 md:py-2">
                <div className="flex flex-row items-center justify-between mx-auto container px-4 xl:px-0">
                    <Link href={'/'}>
                        <Image src={'/logo.png'} priority width={600} height={600} className="min-w-16 max-w-20 md:min-w-16 md:max-w-20" alt="Logo" />
                    </Link>
                    <div className="md:block hidden">
                        <ul className="flex gap-6">
                            {navListData.map((list, index) =>
                                <li className={`${(pathname==list.Link?'underline uppercase text-green-600 font-medium':'hover:underline uppercase cursor-pointer')}`} key={index}><Link href={list.Link}>{list.Title}</Link></li>
                            )}
                        </ul>
                    </div>
                    <NavBarComponent />
                </div>
            </div>
        </div>
    )
}