import { TrendingData, postsData } from "@/lib/data";
import Image from "next/image";

export function ExploreComponent() {
    return (
        <div>
            <div className="mx-auto container pt-32 pb-6 sm:pb-12 px-4 xl:px-0">
                <div className="flex flex-wrap ">
                    <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-12">
                        <div className="h-96 w-full">
                            <Image src={'/1.png'} width={600} height={600} alt="1" className="h-full w-full object-cover overflow-hidden rounded shadow" />
                        </div>
                        <p className="mt-6 mb-2 text-sm text-teal-500">Travel</p>
                        <h2 className="text-4xl text-gray-900 font-light">Crossing the Canadian border on foot. Learn the basics and join me!</h2>
                        <p className="text-gray-600 text-sm mt-4">12 September 2020</p>
                    </div>
                    <div className="md:w-1/3 w-full">
                        <div className="h-96 w-full">
                            <Image src={'/2.png'} width={600} height={600} alt="1" className="h-full w-full object-cover overflow-hidden rounded shadow" />
                        </div>
                        <p className="mt-6 mb-2 text-sm text-teal-500">Travel</p>
                        <h2 className="text-4xl text-gray-900 font-light">Crossing the Canadian border on foot. Learn the basics and join me!</h2>
                        <p className="text-gray-600 text-sm mt-4">12 September 2020</p>
                    </div>
                </div>
            </div>

            {/* Posts Start */}
            <div className="mx-auto container py-6 sm:py-12 px-4 xl:px-0">
                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {
                        postsData.map(data =>
                            <div key={data.Title} className="flex items-center">
                                <div className="h-24 w-24 flex-shrink-0">
                                    <Image src={data.ImgSrc} alt={data.ImgSrc} width={600} height={600} className="h-full w-full object-cover overflow-hidden rounded shadow" />
                                </div>
                                <div className="pt-3 pb-3 ml-2 pr-5">
                                    <p className="text-sm text-yellow-500">{data.Title}</p>
                                    <p className="text-2xl text-gray-800 leading-8">{data.Paragraph}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="container px-4 xl:px-0 mx-auto">
                <hr className="border-t border-gry-300" />
            </div>

            {/* Trending posts */}
            <div className="mx-auto container py-6 sm:py-12 px-4 xl:px-0">
                <div className="flex flex-wrap mt-8 sm:mt-16">
                    <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-12">
                        <div className="h-96 w-full">
                            <Image src="/6.png" width={600} height={600} alt="TrendingImg" className="h-full w-full object-cover overflow-hidden rounded shadow" />
                        </div>
                        <p className="mt-6 mb-2 text-sm text-teal-500">Travel</p>
                        <h2 className="text-4xl text-gray-900 font-light">Crossing the Canadian border on foot. Learn the basics and join me!</h2>
                        <p className="text-gray-600 text-sm mt-4">12 September 2020</p>
                    </div>
                    <div className="md:w-1/3 w-full">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                            {
                                TrendingData.map(data =>
                                    <div key={data.Title}>
                                        <div className="h-44 w-full">
                                            <Image src={data.ImgSrc} width={600} height={600} alt={data.ImgSrc} className="h-full w-full object-cover overflow-hidden rounded shadow" />
                                        </div>
                                        <h2 className="mt-3 text-gray-900">{data.Title}</h2>
                                        <p className="text-gray-600 text-sm mt-3">{data.Paragraph}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}