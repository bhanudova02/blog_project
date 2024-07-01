"use client"
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { RiCloseCircleFill } from "react-icons/ri";
import { useState } from "react"
import { navListData } from "@/lib/data";
import { usePathname } from "next/navigation";
export function NavBarComponent() {
    const [menuCls, setMenuCls] = useState('hidden');
    function handelToggleMenu(flag: boolean) {
        if (flag) {
            setMenuCls('block');
        } else {
            setMenuCls('hidden');
        }
    }
    const pathName = usePathname();
    return (
        <div className="md:hidden block">
            <button onClick={() => handelToggleMenu(true)}>
                <TiThMenu className="text-3xl md:text-2xl" />
            </button>
            <div className={menuCls}>
                <div className="md:hidden fixed bg-black inset-0 text-white ">
                    <button onClick={() => handelToggleMenu(false)} className="absolute right-4 top-6">
                        <RiCloseCircleFill className="text-3xl text-white" />
                    </button>
                    <div className="flex justify-center items-center h-[100vh]">
                        <ul className="text-center space-y-10 text-4xl">
                            {navListData.map((list,index) =>
                                <li className={`${(pathName==list.Link?'underline uppercase cursor-pointer text-green-500':'hover:underline uppercase cursor-pointer')}`} key={index}>
                                    <Link onClick={() => handelToggleMenu(false)} href={list.Link}>{list.Title}</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}