import { useState } from "react";
import { RenderStep } from "./steps/RenderStep";
import { useNavigate } from "react-router-dom";
import { Step1 } from "./steps/step1";
import { Step2 } from "./steps/step2";
import { Step3 } from "./steps/step3";
import { Step4 } from "./steps/step4";
import { Step5 } from "./steps/step5";
import { Step6 } from "./steps/step6";

export function AddNewSpecs() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const stepData = [
    {
      ind: 1,
      title: "Some Text",
      btnR: {
        titleR: "Close",
        callBackR: () => navigate("/specs"),
      },
      btnL: {
        titleL: "Next",
        callBackL: () => setStep(2),
      },
      Component: () => <Step1 {...{ setStep }} />,
    },
    {
      ind: 2,
      title: "Some Text",
      btnR: {
        titleR: "Prev",
        callBackR: () => setStep(1),
      },
      btnL: {
        titleL: "Next",
        callBackL: () => setStep(3),
      },
      Component: () => <Step2 {...{ setStep }} />,
    },
    {
      ind: 3,
      title: "KPls",
      btnR: {
        titleR: "Prev",
        callBackR: () => setStep(2),
      },
      btnL: {
        titleL: "Next",
        callBackL: () => setStep(4),
      },
      Component: () => <Step3 {...{ setStep }} />,
    },
    {
      ind: 4,
      title: "Some Text",
      btnR: {
        titleR: "Prev",
        callBackR: () => setStep(3),
      },
      btnL: {
        titleL: "Next",
        callBackL: () => setStep(5),
      },
      Component: () => <Step4 {...{ setStep }} />,
    },
    {
      ind: 5,
      title: "Some Text",
      btnR: {
        titleR: "Prev",
        callBackR: () => setStep(4),
      },
      btnL: {
        titleL: "Next",
        callBackL: () => setStep(6),
      },
      Component: () => <Step5 {...{ setStep }} />,
    },
    {
      ind: 6,
      title: "Some Text",
      btnR: {
        titleR: "Prev",
        callBackR: () => setStep(5),
      },
      btnL: {
        titleL: "Submit",
        callBackL: () => navigate("/specs"),
      },
      Component: () => <Step6 {...{ setStep }} />,
    },
  ];

  return (
    <div className="w-full mt-24 flex justify-start items-center flex-col">
      <ul className="flex max-w-[770px] m-0 p-0 relative select-none	w-full justify-evenly">
        {stepData.map((pro) => (
          <li
            key={pro.ind}
            className={
              pro.ind === step
                ? "list-none min-w-[15%] rounded-[16px] text-center relative flex justify-center"
                : "list-none min-w-[15%] text-center relative flex justify-center rounded-full"
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
      <div>{<RenderStep {...{ step, stepData }} />}</div>
    </div>
  );
}
