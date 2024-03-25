import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
const App = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const prices = {
    starter: {
      monthly: 9.99,
      yearly: 99.99,
    },
    pro: {
      monthly: 19.99,
      yearly: 199.99,
    },
    custom: {
      monthly: 100,
      yearly: 500,
    },
  };

  const handleBillingCycleChange = (cycle) => {
    setBillingCycle(cycle);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center py-4 mb-8">
        Buy a VPS Hosting Plan
      </h1>
      <div className="flex flex-col md:flex-row gap-6 justify-between">
        <div className="lg:w-1/4 w-full bg-white border border-indigo-400 rounded-lg p-8 hover:shadow-md">
          <h2 className="text-2xl font-bold mb-2">Starter</h2>
          <ul>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-yellow-400" />
              <span className="font-bold">1 vCPU</span> Core
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-yellow-400" />
              <span className="font-bold">4 GB </span> RAM
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-yellow-400" />
              <span className="font-bold">50 GB </span> NVMe Disk space
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-yellow-400" />
              <span className="font-bold">4 TB </span> Bandwidth
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-green-400" />
              <span className="font-bold">1 </span> Snapshot
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-green-400" />
              <span className="font-bold">Weekly </span> Backups
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-green-400" />
              <span className="font-bold">Dedicated </span> IP Address
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-green-400" />
              <span className="font-bold">Full </span> Root Access
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-green-400" />
              <span className="font-bold">AI </span> Assistant
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-green-400" />
              <span className="font-bold">Malware </span> Scanner
            </li>
          </ul>
          <p className="text-gray-700 mb-2">
            <del>$13.99</del>
          </p>
          <a className="text-indigo-600  px-2 py-1 rounded-full bg-indigo-200 font-bold">
            save 68%
          </a>
          <div className="text-xl text-[#2f1c6a] font-semibold my-4">
            ${" "}
            <span className="text-4xl font-bold">
              {billingCycle === "monthly"
                ? `${prices.starter.monthly}/mo`
                : `${prices.starter.yearly}/yr`}
            </span>
          </div>
          <a className="bg-indigo-500 text-center hover:bg-indigo-600 w-full block text-white font-semibold py-2 px-8 rounded">
            Subscribe Now
          </a>
        </div>
        <div className="lg:w-1/4 w-full bg-white border border-indigo-400 rounded-lg p-8 hover:shadow-md">
          <h2 className="text-2xl font-bold mb-2">Pro</h2>
          <ul>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-yellow-400" />
              <span className="font-bold">2 vCPU</span> Core
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-yellow-400" />
              <span className="font-bold">4 GB </span> RAM
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-yellow-400" />
              <span className="font-bold">100 GB </span> NVMe Disk space
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-yellow-400" />
              <span className="font-bold">8 TB </span> Bandwidth
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-green-400" />
              <span className="font-bold">1 </span> Snapshot
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-green-400" />
              <span className="font-bold">Weekly </span> Backups
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-green-400" />
              <span className="font-bold">Dedicated </span> IP Address
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-green-400" />
              <span className="font-bold">Full </span> Root Access
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-green-400" />
              <span className="font-bold">AI </span> Assistant
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-green-400" />
              <span className="font-bold">Malware </span> Scanner
            </li>
          </ul>
          <p className="text-gray-700 mb-2">
            <del>$17.99</del>
          </p>
          <a className="text-indigo-600  px-2 py-1 rounded-full bg-indigo-200 font-bold">
            save 67%
          </a>
          <div className="text-xl text-[#2f1c6a] font-semibold my-4">
            ${" "}
            <span className="text-4xl font-bold">
              {billingCycle === "monthly"
                ? `${prices.pro.monthly}/mo`
                : `${prices.pro.yearly}/yr`}
            </span>
          </div>
          <a className="bg-indigo-500 text-center hover:bg-indigo-600 w-full block text-white font-semibold py-2 px-8 rounded">
            Subscribe Now
          </a>
        </div>
        <div className="lg:w-1/4 w-full bg-white border border-indigo-400 rounded-lg p-8 hover:shadow-md">
          <h2 className="text-2xl font-bold mb-2">Unlimited</h2>
          <ul>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-yellow-400" />
              <span className="font-bold">8 vCPU</span> Core
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-yellow-400" />
              <span className="font-bold">32 GB </span> RAM
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-yellow-400" />
              <span className="font-bold">400 GB </span> NVMe Disk space
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-yellow-400" />
              <span className="font-bold">32 TB </span> Bandwidth
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-green-400" />
              <span className="font-bold">1 </span> Snapshot
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-green-400" />
              <span className="font-bold">Weekly </span> Backups
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-green-400" />
              <span className="font-bold">Dedicated </span> IP Address
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-green-400" />
              <span className="font-bold">Full </span> Root Access
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-green-400" />
              <span className="font-bold">AI </span> Assistant
            </li>
            <li className="text-[#2f1c6a] flex gap-2 items-center my-2">
              <FaCheck className="mt-1 text-green-400" />
              <span className="font-bold">Malware </span> Scanner
            </li>
          </ul>
          <p className="text-gray-700 mb-2">
            <del>$13.99</del>
          </p>
          <a className="text-indigo-600  px-2 py-1 rounded-full bg-indigo-200 font-bold">
            save 68%
          </a>
          <div className="text-xl text-[#2f1c6a] font-semibold my-4">
            ${" "}
            <span className="text-4xl font-bold">
              {billingCycle === "monthly"
                ? `${prices.custom.monthly}/mo`
                : `${prices.custom.yearly}/yr`}
            </span>
          </div>
          <a className="bg-indigo-500 text-center hover:bg-indigo-600 w-full block text-white font-semibold py-2 px-8 rounded">
            Subscribe Now
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button
          className={`mx-2 py-2 px-4 rounded ${
            billingCycle === "monthly"
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => handleBillingCycleChange("monthly")}
        >
          Monthly
        </button>
        <button
          className={`mx-2 py-2 px-4 rounded ${
            billingCycle === "yearly" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleBillingCycleChange("yearly")}
        >
          Yearly
        </button>
      </div>
    </div>
  );
};

export default App;
