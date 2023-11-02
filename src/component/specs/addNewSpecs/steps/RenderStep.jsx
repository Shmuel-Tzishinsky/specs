import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Step1 } from "./step1";
import { Step2 } from "./step2";
import { Step3 } from "./step3";
import { Step4 } from "./step4";
import { Step5 } from "./step5";
import { Step6 } from "./step6";

const Steps = ({ step, setStep }) => {
  switch (step) {
    case 1:
      return (
        <div className="px-6 py-5 mt-12 min-w-[500px] min-h-[340px] bg-[#121231] rounded-xl flex flex-col justify-between">
          <Step1 {...{ setStep }} />
          <div className="flex justify-between">
            <NavLink
              to={"/specs"}
              className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
            >
              Close
            </NavLink>
            <div
              className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
              onClick={() => setStep(2)}
            >
              Next
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="px-6 py-5 mt-12 min-w-[500px] min-h-[340px] bg-[#121231] rounded-xl flex flex-col justify-between">
          <Step2 {...{ setStep }} />
          <div className="flex justify-between">
            <div
              className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
              onClick={() => setStep(1)}
            >
              Prev
            </div>
            <div
              className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
              onClick={() => setStep(3)}
            >
              Next
            </div>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="px-6 py-5 mt-12 min-w-[500px] min-h-[340px] bg-[#121231] rounded-xl flex flex-col justify-between">
          <Step3 {...{ setStep }} />
          <div className="flex justify-between">
            <div
              className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
              onClick={() => setStep(2)}
            >
              Prev
            </div>
            <div
              className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
              onClick={() => setStep(4)}
            >
              Next
            </div>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="px-6 py-5 mt-12 min-w-[500px] min-h-[340px] bg-[#121231] rounded-xl flex flex-col justify-between">
          <Step4 {...{ setStep }} />
          <div className="flex justify-between">
            <div
              className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
              onClick={() => setStep(3)}
            >
              Prev
            </div>
            <div
              className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
              onClick={() => setStep(5)}
            >
              Next
            </div>
          </div>
        </div>
      );
    case 5:
      return (
        <div className="px-6 py-5 mt-12 min-w-[500px] min-h-[340px] bg-[#121231] rounded-xl flex flex-col justify-between">
          <Step5 {...{ setStep }} />
          <div className="flex justify-between">
            <div
              className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
              onClick={() => setStep(4)}
            >
              Prev
            </div>
            <div
              className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
              onClick={() => setStep(6)}
            >
              Next
            </div>
          </div>
        </div>
      );
    case 6:
      return (
        <div className="px-6 py-5 mt-12 min-w-[500px] min-h-[340px] bg-[#121231] rounded-xl flex flex-col justify-between">
          <Step6 {...{ setStep }} />
          <div className="flex justify-between">
            <div
              className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
              onClick={() => setStep(5)}
            >
              Prev
            </div>
            <NavLink
              to={"/specs"}
              className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
            >
              Submit
            </NavLink>
          </div>
        </div>
      );
  }
};

export const RenderStep = ({ step, setStep }) => <Steps {...{ step, setStep }} />;

RenderStep.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
};

Steps.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
};
