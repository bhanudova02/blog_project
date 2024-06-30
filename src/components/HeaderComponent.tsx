import Image from "next/image";
import { headerNavList } from "../lib/data";
import { NavBarComponent } from "./NavBarComponent";
export function HeaderComponent() {
    return (
        <div className="fixed w-full">
            <div className="shadow-md shadow-green-200 text-lg bg-white py-2.5 md:py-2">
                <div className="flex flex-row items-center justify-between mx-auto container px-4 xl:px-0">
                    <div>
                        <Image src={'/logo.png'} priority width={600} height={600} className="min-w-16 max-w-20 md:min-w-16 md:max-w-20" alt="Logo" />
                    </div>
                    <div className="md:block hidden">
                        <ul className="flex gap-6">
                            {headerNavList.map(list =>
                                <li className="hover:underline cursor-pointer" key={list}>{list}</li>
                            )}
                        </ul>
                    </div>
                    <NavBarComponent />
                </div>
            </div>
        </div>
    )
}