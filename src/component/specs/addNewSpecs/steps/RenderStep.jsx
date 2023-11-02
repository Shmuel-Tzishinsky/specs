import PropTypes from "prop-types";

let StepItem = ({ stepData, step }) => {
  const {
    Component,
    btnR: { titleR, callBackR },
    btnL: { titleL, callBackL },
  } = stepData[step - 1];

  return (
    <div className="px-6 py-5 mt-12 min-w-[500px] min-h-[340px] bg-[#121231] rounded-xl flex flex-col justify-between">
      <Component />
      <div className="flex justify-between">
        <div
          onClick={callBackR}
          to={"/specs"}
          className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
        >
          {titleR}
        </div>
        <div
          className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
          onClick={callBackL}
        >
          {titleL}
        </div>
      </div>
    </div>
  );
};

export const RenderStep = ({ step, stepData }) => <StepItem {...{ step, stepData }} />;

RenderStep.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
  stepData: PropTypes.array,
};

StepItem.propTypes = {
  step: PropTypes.number,
  stepData: PropTypes.array,
};
