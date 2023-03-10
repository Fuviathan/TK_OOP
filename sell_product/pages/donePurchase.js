import Header from "../components/HomePage/Header/Header";
import { CheckIcon } from "@heroicons/react/solid";

export default function donePurchase() {
  return (
    <>
      <div className="relative z-10">
        <Header />
        <div className="absolute inset-0 flex items-center justify-center h-screen bg-white">
          <CheckIcon className="w-10 h-10 mr-2" />
          <div className="text-3xl font-semibold">Thank you for your purchase</div>
        </div>
      </div>
    </>
  );
}
