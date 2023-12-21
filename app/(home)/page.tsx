import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-wrap  w-full lg:w-3/4 justify-center mx-auto gap-y-10 lg:justify-between min-h-[100vh]">
      <div className="flex flex-wrap w-full bg-gray-100 pt-10 lg:justify-between px-10 gap-y-10 dark:bg-gray-700">
        <div className="w-full lg:w-[40%] flex flex-wrap gap-y-10">
          <h1 className="w-full text-2xl lg:text-4xl font-bold">
            Welcome to{" "}
            <span className="text-blue-500 dark:text-muted-foreground">
              Netflix
            </span>
            .
          </h1>
          <p className="w-full text-xl lg:text-2xl text-muted-foreground dark:text-gray-300  ">
            Explore a reel world of captivating movies at your fingertips
          </p>
          <p className="text-lg lg:text-xl text-muted-foreground dark:text-gray-300 w-full">
            Immerse yourself in a cinematic universe with our diverse collection
            of movies, where entertainment meets storytelling excellence.
          </p>
        </div>
        <div className="w-full lg:w-[40%] flex lg:justify-center lg:items-center">
          <div className="w-[300px] lg:h-7/12 h-[300px] relative">
            <Image src="/home/movies.jpg" alt="open site" fill />
          </div>
        </div>
            <div className="w-full flex mt-5">
              <Link
                href="/dashbord"
                className={cn(
                  "flex gap-x-5  justify-start w-[200px] dark:text-gray-100 text-gray-900",
                  buttonVariants({ className: "bg-blue-500" })
                )}
              >
                <p>Try Free </p>
                <ArrowBigRight />
              </Link>
            </div>
      </div>
    </div>
  );
}
