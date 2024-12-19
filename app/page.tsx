import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-purple-400 items-center justify-items-center min-h-screen py-4 font-[family-name:var(--font-roboto)]">
      {/* p-8 pb-20 gap-10 sm:p-20 */}
      <Navbar />
      
      {/* <main className="flex flex-col w-3/4 px-4 sm:px-10 relative">
        <div className="w-full bg-white rounded-lg p-8 sm:p-12 flex-grow">
          <p className="text-gray-700 text-lg">
            This is a card with a fixed height proportional to the navbar's
            height, filling the remaining space equally. The design ensures it
            stays consistent regardless of content length.
          </p>
        </div>
      </main> */}
    </div>
  );
}
