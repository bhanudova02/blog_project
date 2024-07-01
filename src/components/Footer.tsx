import { navListData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaChevronUp } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-gray-100">
            <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                    <div className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4">
                        <span className="sr-only">Back to top</span>

                        <Link href="#" className="cursor-pointer">
                            <FaChevronUp />
                        </Link>
                    </div>
                </div>

                <div className="lg:flex lg:items-end lg:justify-between">
                    <div>
                        <Link href="#" className="flex cursor-pointer justify-center text-teal-600 lg:justify-start">
                            <Image src={'/logo.png'} priority width={600} height={600} className="min-w-16 max-w-20 md:min-w-16 md:max-w-20" alt="Logo" />
                        </Link>
                        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
                            cum itaque neque.
                        </p>
                    </div>

                    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">

                        {navListData.map((list, index) =>
                            <li key={index}>
                                <Link className="text-gray-700 transition hover:text-gray-700/75" href={list.Link}>{list.Title}</Link>
                            </li>
                        )}
                    </ul>
                </div>

                <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                    Copyright &copy; 2024. All rights reserved.
                </p>
            </div>
        </footer>
    )
}