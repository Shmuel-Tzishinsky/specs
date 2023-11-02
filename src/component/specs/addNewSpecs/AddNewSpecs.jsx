import { useState } from "react";
import { RenderStep } from "./steps/RenderStep";

export function AddNewSpecs() {
  const [step, setStep] = useState(1);

  const progress = [
    {
      ind: 1,
      title: "Some Text",
    },
    {
      ind: 2,
      title: "Some Text",
    },
    {
      ind: 3,
      title: "KPls",
    },
    {
      ind: 4,
      title: "Some Text",
    },
    {
      ind: 5,
      title: "Some Text",
    },
    {
      ind: 6,
      title: "Some Text",
    },
  ];

  return (
    <div className="w-full mt-24 flex justify-start items-center flex-col">
      <ul className="flex m-0 p-0 relative select-none	">
        {progress.map((pro) => (
          <li
            key={pro.ind}
            className={
              pro.ind === step
                ? "list-none w-[110px] rounded-[16px] text-center relative flex justify-center"
                : "list-none  w-[110px] text-center relative flex justify-center rounded-full"
            }
          >
            <div
              className={`px-[11px] py-[4px] z-10 rounded-full text-white flex justify-center items-center text-sm bg-[#121231] ${
                pro.ind === step && "w-full border-[1px] border-[#F4C927] border-solid"
              }`}
            >
              {pro.ind === step ? pro.title : pro.ind}
            </div>
          </li>
        ))}
      </ul>
      <div>{<RenderStep {...{ step, setStep }} />}</div>
    </div>
  );
}
