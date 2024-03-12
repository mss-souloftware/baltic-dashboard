import Link from "next/link";
import Image from "next/image";

const TrainTrackBox = () => {
    return (
        <div className="flex items-center flex-col bg-white p-3 pt-3 mb-10 rounded-xl shadow-default">
            <div className="flex items-center justify-between w-full">
                <div className="flex">
                    <button className="p-3 rounded-md mr-1 bg-[#EAEEF7]">
                        <Image
                            width={20}
                            height={20}
                            src={"/images/icon/search-icon.png"}

                            alt="User"
                        />
                    </button>

                    <button className="p-3 rounded-md mr-1 bg-[#EAEEF7]">
                        <Image
                            width={20}
                            height={20}
                            src={"/images/icon/train-in.png"}

                            alt="User"
                        />
                    </button>

                    <button className="p-3 rounded-md mr-1 bg-[#EAEEF7]">
                        <Image
                            width={20}
                            height={20}
                            src={"/images/icon/train-out.png"}
                            alt="User"
                        />
                    </button>
                </div>

                <div className="titleSlots grid grid-cols-5 gap-3 mr-15">
                    <div className="titleSlotsInner text-black text-[12px] font-bold text-center">
                        <p>K15</p>
                        <div className="flex">
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                        </div>
                    </div>
                    <div className="titleSlotsInner text-black text-[12px] font-bold text-center">
                        <p>K14</p>
                        <div className="flex">
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div className="text-blue-600">|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                        </div>
                    </div>
                    <div className="titleSlotsInner text-black text-[12px] font-bold text-center">
                        <p>K13</p>
                        <div className="flex">
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                        </div>
                    </div>
                    <div className="titleSlotsInner text-black text-[12px] font-bold text-center">
                        <p>K12</p>
                        <div className="flex">
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                        </div>
                    </div>
                    <div className="titleSlotsInner text-black text-[12px] font-bold text-center">
                        <p>K11</p>
                        <div className="flex">
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="containerSlots flex items-center justify-between w-full mt-10">
                <div className="containerTitle w-1/12 text-sm font-bold">
                    Ausgang Nr
                    Zeit
                </div>
                <div className="containerRow flex gap-1 w-4/5 bg-white shadow-lg p-2 rounded-md">
                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>
                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>
                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>
                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>
                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>
                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>
                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>
                    <div className="flex slotsBox w-full">
                        <div className="bg-[#3B74B9] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#3B74B9] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>
                </div>
                <div className="containerTitle w-1/12 text-sm font-bold">
                    Eingang Nr Zeit
                </div>
            </div>

            <div className="containerSlots flex items-center justify-between w-full mt-4">
                <div className="containerTitle w-1/12 text-sm font-bold">
                    Ausgang Nr
                    Zeit
                </div>
                <div className="containerRow flex gap-1 w-4/5 bg-white shadow-lg p-2 rounded-md">
                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-full h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-full h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-full h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-full h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-full h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-full h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-full h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-full h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-full h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-full h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-full h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-full h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-full h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>
                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-full h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>
                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-full h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>
                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-full h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>
                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-full h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>
                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-full h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>
                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-full h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>
                    <div className="flex slotsBox w-full">
                        <div className="bg-[#3B74B9] w-full h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>
                </div>
                <div className="containerTitle w-1/12 text-sm font-bold">
                    Eingang Nr Zeit
                </div>
            </div>

            <div className="containerSlots flex items-center justify-between w-full mt-4">
                <div className="containerTitle w-1/12 text-sm font-bold">
                    Ausgang Nr
                    Zeit
                </div>
                <div className="containerRow flex gap-1 w-4/5 bg-white shadow-lg h-9 p-2 rounded-md"></div>
                <div className="containerTitle w-1/12 text-sm font-bold">
                    Eingang Nr Zeit
                </div>
            </div>

            <div className="containerSlots flex items-center justify-between w-full mt-4">
                <div className="containerTitle w-1/12 text-sm font-bold">
                    Ausgang Nr
                    Zeit
                </div>
                <div className="containerRow flex gap-1 w-4/5 bg-white shadow-lg h-9 p-2 rounded-md"></div>
                <div className="containerTitle w-1/12 text-sm font-bold">
                    Eingang Nr Zeit
                </div>
            </div>

            <div className="containerSlots flex items-center justify-between w-full mt-4">
                <div className="containerTitle w-1/12 text-sm font-bold">
                    Ausgang Nr
                    Zeit
                </div>
                <div className="containerRow flex gap-1 w-4/5 bg-white shadow-lg h-9 p-2 rounded-md"></div>
                <div className="containerTitle w-1/12 text-sm font-bold">
                    Eingang Nr Zeit
                </div>
            </div>

            <div className="containerSlots flex items-center justify-between w-full mt-4">
                <div className="containerTitle w-1/12 text-sm font-bold">
                    Ausgang Nr
                    Zeit
                </div>
                <div className="containerRow flex gap-1 w-4/5 bg-white shadow-lg p-2 rounded-md">
                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#DDE2EB] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#DDE2EB] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#DDE2EB] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#DDE2EB] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#DDE2EB] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#DDE2EB] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#DDE2EB] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#DDE2EB] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#DDE2EB] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#DDE2EB] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#DDE2EB] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#DDE2EB] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>

                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>
                    <div className="flex slotsBox w-full">
                        <div className="bg-[#DDE2EB] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#DDE2EB] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>
                    <div className="flex slotsBox w-full">
                        <div className="bg-[#DDE2EB] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#DDE2EB] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>
                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>
                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>
                    <div className="flex slotsBox w-full">
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#EAEEF7] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>
                    <div className="flex slotsBox w-full">
                        <div className="bg-[#3B74B9] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#3B74B9] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>
                    <div className="flex slotsBox w-full">
                        <div className="bg-[#3B74B9] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                        <div className="bg-[#3B74B9] w-6/12 h-5 rounded-sm hover:bg-[#3B74B9]"></div>
                    </div>
                </div>
                <div className="containerTitle w-1/12 text-sm font-bold">
                    Eingang Nr Zeit
                </div>
            </div>
            <div className="titleSlots grid grid-cols-10 gap-3 mt-10 mb-15">
                    <div className="titleSlotsInner text-black text-[12px] font-bold text-center">
                        <p>K10</p>
                        <div className="flex">
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                        </div>
                    </div>
                    <div className="titleSlotsInner text-black text-[12px] font-bold text-center">
                        <p>K09</p>
                        <div className="flex">
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                        </div>
                    </div>
                    <div className="titleSlotsInner text-black text-[12px] font-bold text-center">
                        <p>K08</p>
                        <div className="flex">
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                        </div>
                    </div>
                    <div className="titleSlotsInner text-black text-[12px] font-bold text-center">
                        <p>K07</p>
                        <div className="flex">
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                        </div>
                    </div>
                    <div className="titleSlotsInner text-black text-[12px] font-bold text-center">
                        <p>K06</p>
                        <div className="flex">
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                        </div>
                    </div>
                    <div className="titleSlotsInner text-black text-[12px] font-bold text-center">
                        <p>K05</p>
                        <div className="flex">
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                        </div>
                    </div>
                    <div className="titleSlotsInner text-black text-[12px] font-bold text-center">
                        <p>K04</p>
                        <div className="flex">
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                        </div>
                    </div>
                    <div className="titleSlotsInner text-black text-[12px] font-bold text-center">
                        <p>K03</p>
                        <div className="flex">
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                        </div>
                    </div>
                    <div className="titleSlotsInner text-black text-[12px] font-bold text-center">
                        <p>K02</p>
                        <div className="flex">
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                        </div>
                    </div>
                    <div className="titleSlotsInner text-black text-[12px] font-bold text-center">
                        <p>K01</p>
                        <div className="flex">
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                            <div>|</div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default TrainTrackBox;
