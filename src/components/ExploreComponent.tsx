import { BlogPostData, TrendingData, TrendingVideoData, postsData } from "@/lib/data";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { TbBadge } from "react-icons/tb";

export function ExploreComponent() {
    return (
        <div>
            <div id="StartingContainer" className="mx-auto container pt-32 pb-6 sm:pb-12 px-4 xl:px-0">
                <div className="flex flex-wrap ">
                    <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-12">
                        <div className="h-96 w-full">
                            <Image src={'/1.jpg'} width={600} height={600} alt="1" className="h-full w-full object-cover overflow-hidden rounded shadow" />
                        </div>
                        <p className="mt-6 mb-2 text-sm text-teal-500">Healthy Eating</p>
                        <h2 className="text-4xl text-gray-900 font-light">The Benefits of a Plant-Based Diet: A Beginner&apos;s Guide</h2>
                        <p className="text-gray-600 text-sm mt-4">18 April 2022</p>
                    </div>
                    <div className="md:w-1/3 w-full">
                        <div className="h-96 w-full">
                            <Image src={'/2.jpg'} width={600} height={600} alt="2" className="h-full w-full object-cover overflow-hidden rounded shadow" />
                        </div>
                        <p className="mt-6 mb-2 text-sm text-teal-500">Healthy Recipes</p>
                        <h2 className="text-4xl text-gray-900 font-light">10 Delicious and Nutritious Smoothie Recipes for a Healthier You</h2>
                        <p className="text-gray-600 text-sm mt-4">30 May 2022</p>
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
                            <Image src="/6.png" width={600} height={600} alt="TrendingImage" className="h-full w-full object-cover overflow-hidden rounded shadow" />
                        </div>
                        <p className="mt-6 mb-2 text-sm text-teal-500">Travel</p>
                        <h2 className="text-4xl text-gray-900 font-light">Crossing the Canadian border on foot. Learn the basics and join me!</h2>
                        <p className="text-gray-600 text-sm mt-4">12 September 2020</p>
                    </div>
                    <div className="md:w-1/3 w-full">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                            {
                                TrendingData.map((data, index) =>
                                    <div key={index}>
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
            {/* Trending Videos */}
            <div className="mx-auto container py-6 sm:py-12 px-4 xl:px-0">
                <h3 className="text-2xl text-gray-900 mb-8">Trending Videos</h3>
                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">


                    {TrendingVideoData.map((data, index) =>
                        <div key={index} className="border-b border-gray-300">
                            <div className="h-48 w-full relative border-b border-gray-300">
                                <iframe height={192} src={data.VideoSrc} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                            </div>
                            <h4 className="text-xl text-center text-gray-800 mt-4">{data.Title}</h4>
                            <p className="text-xs text-gray-600 mt-3 mb-8 text-center">{data.Paragraph}</p>
                        </div>
                    )}

                </div>
            </div>
            {/* Blog Posts */}
            <div className="mx-auto container py-6 sm:py-12 px-4 xl:px-0">
                <h3 className="text-2xl text-gray-900 mb-8">Blog Posts</h3>
                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-16">

                    {BlogPostData.map((data, index) =>
                        <div key={index}>
                            <div className="h-56 w-full relative border-b border-gray-300">
                                <Image width={600} height={600} src={data.ImgSrc} alt="" className="h-full w-full object-cover rounded overflow-hidden shadow" />
                            </div>
                            <p className="mt-4 mb-3 text-teal-500 text-sm">{data.SubTitle}</p>
                            <h4 className="text-2xl text-gray-800">{data.Title}</h4>
                            <div className="flex items-center justify-between mt-4 mb-5">
                                <p className="text-gray-600 text-sm">20th September 2020</p>
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