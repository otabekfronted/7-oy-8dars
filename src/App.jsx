import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { PiCoinsBold } from "react-icons/pi";
import { BsFillSendFill } from "react-icons/bs";
import { PiChartLineFill } from "react-icons/pi";
import { HiBellAlert } from "react-icons/hi2";

function CurrencyConverter() {
    const [selectedFrom, setSelectedFrom] = useState("A"); // Birinchi select uchun
    const [selectedTo, setSelectedTo] = useState("V");
    const handleSwap = () => {
        setSelectedFrom(selectedTo);
        setSelectedTo(selectedFrom);
    };
    const [inputValue, setInputValue] = useState("");
    const [warning, setWarning] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;

        // Agar harf kiritsa, ogohlantirish chiqaramiz
        if (isNaN(value)) {
            setWarning("Please enter numbers only!");
        } else {
            setWarning("");
        }

        setInputValue(value);
    };

    return (
        <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <div className="grid grid-cols-4 gap-1 rounded-full border border-solid border-gray-250 p-2 md:gap-2">
                <a
                    className="w-70 flex items-center justify-center gap-2  bg-gray-800 active:bg-gray-800 hover:opacity-70  p-4 duration-200 rounded-full text-white text-xl"
                    href="#"
                >
                    <PiCoinsBold /> <span>Convert</span>
                </a>
                <a
                    className="w-70 flex items-center justify-center gap-2 active:bg-slate-800 hover:opacity-70 hover:border-2 hover:border-gray-800 border-2 border-white duration-200 p-4 rounded-full text-slate-500 font-medium text-xl"
                    href="#"
                >
                    <BsFillSendFill /> <span>Send</span>
                </a>
                <a
                    className="w-70 flex items-center justify-center gap-2 active:bg-slate-800 hover:opacity-70 hover:border-2 hover:border-gray-800 border-2 border-white duration-200 p-4 rounded-full text-slate-500 font-medium text-xl"
                    href="#"
                >
                    <PiChartLineFill /> <span>Charts</span>
                </a>
                <a
                    className="w-70 flex items-center justify-center gap-2 active:bg-slate-800 hover:opacity-70 hover:border-2 hover:border-gray-800 border-2 border-white duration-200 p-4 rounded-full text-slate-500 font-medium text-xl"
                    href="#"
                >
                    <HiBellAlert /> <span>Alerts</span>
                </a>
            </div>

            <div className="my-5 relative flex items-center gap-1 w-full">
                <div className="b h-[95px] rounded-lg border border-solid border-gray-250 bg-white px-4 py-2 text-2xl font-semibold text-greyblue-400 hover:bg-gray-150 has-[input:focus]:outline has-[input:focus]:outline-2 has-[input:focus]:outline-blue-400">
                    <label className="text-xl">Amount</label>
                    <div className="flex items-center gap-2">
                        <span>$</span>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 rounded-md focus:outline-none border-none"
                        />
                    </div>
                    {warning && (
                        <p className="text-red-500 text-sm mt-1">{warning}</p>
                    )}
                </div>

                <div className="flex flex-col">
                    <div
                        className={`relative h-[95px] w-[395px] rounded-lg border border-solid border-gray-250 bg-white px-4 py-2 text-2xl font-semibold text-greyblue-400 hover:bg-gray-150 ${
                            selectedFrom
                                ? "focus-within:outline focus-within:outline-2 focus-within:outline-blue-400"
                                : ""
                        }`}
                    >
                        <label className="absolute top-2 left-4 text-xl text-gray-600">
                            From
                        </label>
                        <ReactFlagsSelect
                            selected={selectedFrom}
                            onSelect={(code) => setSelectedFrom(code)}
                            className="h-full w-full rounded-lg focus:outline-none mt-6"
                        />
                    </div>
                </div>

                <button
                    onClick={handleSwap}
                    className="w-16 h-16 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                >
                    ⇆
                </button>

                <div className="flex flex-col">
                    <div
                        className={`relative h-[95px] w-[395px] rounded-lg border border-solid border-gray-250 bg-white px-4 py-2 text-2xl font-semibold text-greyblue-400 hover:bg-gray-150 ${
                            selectedTo
                                ? "focus-within:outline focus-within:outline-2 focus-within:outline-blue-400"
                                : ""
                        }`}
                    >
                        <label className="absolute top-2 left-4 text-xl text-gray-600">
                            To
                        </label>
                        <ReactFlagsSelect
                            selected={selectedTo}
                            onSelect={(code) => setSelectedTo(code)}
                            className="h-full w-full rounded-lg focus:outline-none mt-6"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrencyConverter;
