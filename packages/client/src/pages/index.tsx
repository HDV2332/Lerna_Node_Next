import Link from "next/link";

export default function Home() {
  return (
    <div className="home-page flex w-full flex-col gap-8 font-mono">
      <div>
        <p className="mb-4">Tools</p>
        <div className="flex w-full flex-row gap-8">
          <div className="rounded-lg border border-gray-300 hover:border-gray-400 w-1/3 text-center">
            <Link
              passHref
              href={"/tools/json_formatter"}
              className="block p-8 text-black hover:text-gray-800"
            >
              JSON Formatter
            </Link>
          </div>
          <div className="rounded-lg border border-gray-300 hover:border-gray-400 w-1/3 text-center">
            <Link
              passHref
              href={"/tools/crontab"}
              className="block p-8 text-black hover:text-gray-800"
            >
              CronTab
            </Link>
          </div>
          <div className="rounded-lg border border-gray-300 hover:border-gray-400 w-1/3 text-center">
            <Link
              passHref
              href={"/tools/color_converter"}
              className="block p-8 text-black hover:text-gray-800"
            >
              Colors Converter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
