import { BusinessTrendingBlog, BusinessTrendingData, BusinessTrendingVideo } from "@/lib/data";
import Image from "next/image";
import { FaPlay, FaRegHeart } from "react-icons/fa";
import { TbBadge } from "react-icons/tb";

export function BusinessComponent() {
    return (
        <div>
            <div className="container mx-auto px-4 xl:px-0 py-6 sm:py-12">
                <div className="w-full lg:w-1/2 lg:mt-16 mt-24 text-center lg:text-start">
                    <h2 className="text-gray-700 text-5xl mb-4">Business</h2>
                    <p className="text-sm text-gray-600">
                        Businesses thrive through innovation, strategic planning, and customer-centric approaches. Adaptability and effective leadership are crucial for navigating competitive markets.
                    </p>
                </div>
            </div>

            <div className="mx-auto container py-6 sm:py-12 px-4 xl:px-0">
                <h3 className="text-2xl text-gray-900 mb-8">Trending posts</h3>
                <div className="flex flex-wrap">
                    <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-12">
                        <div className=" w-full h-96">
                            <Image width={600} height={600} src="/business_trend_1.jpg" alt="" className="h-full w-full object-cover overflow-hidden rounded shadow" />
                        </div>
                        <p className="mt-6 mb-2 text-sm text-teal-500">Travel</p>
                        <h2 className="text-4xl text-gray-900 font-light">Crossing the Canadian border on foot. Learn the basics and join me!</h2>
                        <p className="text-gray-600 text-sm mt-4">12 September 2020</p>
                    </div>
                    <div className="md:w-1/3 w-full">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                            {BusinessTrendingData.map((data, index) =>
                                <div key={index}>
                                    <div className="h-44 w-full">
                                        <Image width={600} height={600} src={data.ImgSrc} alt="" className="h-full w-full object-cover overflow-hidden rounded shadow" />
                                    </div>
                                    <h2 className="mt-3 text-gray-900 text-base">10 Tips to design productively amidst the pandemic</h2>
                                    <p className="text-gray-600 text-sm mt-3">12 September 2020</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto container py-6 sm:py-12 px-4 xl:px-0">
                <h3 className="text-2xl text-gray-900 mb-8">Trending videos</h3>
                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                    {BusinessTrendingVideo.map((data, index) =>
                        <div key={index} className="border-b border-gray-300">
                            <div className="h-48 w-full relative border-b border-gray-300">
                                <iframe className="w-full h-full" src={data.videoSrc} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                            </div>
                            <h4 className="text-xl text-center text-gray-800 mt-4">{data.Title}</h4>
                            <p className="text-xs text-gray-600 mt-3 mb-8 text-center">{data.Paragraph}</p>
                        </div>
                    )}



                </div>
            </div>
            <div className="mx-auto container py-6 sm:py-12 px-4 xl:px-0">
                <h3 className="text-2xl text-gray-900 mb-8">Blog posts</h3>
                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-16">
                    {BusinessTrendingBlog.map((data, index) =>
                        <div key={index}>
                            <div className="h-56 w-full relative border-b border-gray-300">
                                <Image width={600} height={600} src={data.ImgSrc} alt="" className="h-full w-full object-cover  overflow-hidden shadow" />
                            </div>
                            <p className="mt-4 mb-3 text-teal-500 text-sm">{data.SubTitle}</p>
                            <h4 className="text-2xl text-gray-800">{data.Title}</h4>
                            <div className="flex items-center justify-between mt-4 mb-5">
                                <p className="text-gray-600 text-sm">{data.BlogDate}</p>
                                <div className="text-gray-600 flex items-center">
                                    <FaRegHeart />
                                    <TbBadge className="text-2xl" />
                                </div>
                            </div>
                            <p className="mb-5 text-gray-600 text-sm">{data.Paragraph}</p>
                            <p className="text-gray-600 text-sm">{data.HashTags}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}