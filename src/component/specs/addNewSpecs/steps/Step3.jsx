import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import PropTypes from "prop-types";

const ListItem = ({ ind, we_will, select, inputL, removeLine, handelChange, listKpls }) => (
  <div className="flex flex-row justify-around">
    <div className="flex flex-row py-2 px-2">
      {console.log(listKpls.length)}
      {listKpls.length > 3 && (
        <div
          onClick={() => removeLine(ind)}
          className="ml-[-22px]  mr-[7px] w-4 flex justify-center items-center cursor-pointer text-[#373761]"
        >
          <RiDeleteBinLine />
        </div>
      )}
      <p className="pr-2">We will</p>
      <input
        type="text"
        name={`we_will`}
        id=""
        data-ind={ind}
        onChange={handelChange}
        value={we_will}
        className="bg-transparent border-b-2 w-32 border-[#21213E] text-white outline-none"
      />
    </div>
    <div className="flex flex-row py-2 px-2">
      <select
        className="bg-transparent text-white mr-2 outline-none"
        name={`select`}
        onChange={handelChange}
        value={select}
        data-ind={ind}
      >
        <option className="text-base text-black">within</option>
        <option className="text-base text-black">in</option>
        <option className="text-base text-black">until</option>
      </select>
      <input
        type="text"
        name={`inputL`}
        data-ind={ind}
        value={inputL}
        onChange={handelChange}
        className="bg-transparent border-b-2 w-32 border-[#21213E] text-white outline-none"
      />
    </div>
  </div>
);

ListItem.propTypes = {
  ind: PropTypes.number,
  we_will: PropTypes.string,
  select: PropTypes.string,
  inputL: PropTypes.string,
  removeLine: PropTypes.func,
  handelChange: PropTypes.func,
  listKpls: PropTypes.array,
};

export function Step3() {
  const [listKpls, setKpls] = useState([
    {
      ind: 111111111,
      we_will: "",
      select: "within",
      inputL: "",
    },
    {
      ind: 222222222,
      we_will: "",
      select: "within",
      inputL: "",
    },
    {
      ind: 333333333,
      we_will: "",
      select: "within",
      inputL: "",
    },
  ]);

  const addLine = () => {
    if (listKpls.length < 10) {
      let uniq = new Date().getTime();
      setKpls((list) => [
        ...list,
        {
          ind: uniq,
          we_will: "",
          select: "within",
          inputL: "",
        },
      ]);
    } else {
      alert("You cannot add more than ten lines...");
    }
  };

  const removeLine = (ind) => {
    if (listKpls.length > 3) {
      setKpls(listKpls.filter((line) => line.ind !== ind));
    } else {
      alert("You cannot remove when last three lines...");
    }
  };

  const handelChange = ({
    target: {
      name,
      value,
      dataset: { ind },
    },
  }) => {
    let a = [];

    for (let i = 0; i < listKpls.length; i++) {
      const obj = listKpls[i];
      if (parseFloat(ind) === obj.ind) {
        a.push({
          ...obj,
          [name]: value,
        });
      } else {
        a.push(obj);
      }
    }

    setKpls(a);
  };

  return (
    <div className="text-white">
      <h1 className="pr-4 text-white text-xl">KPLs</h1>
      <div className="my-4 flex flex-col">
        <div className="flex flex-col">
          {listKpls.map((e, i) => (
            <ListItem key={i} {...{ ...e, removeLine, handelChange, listKpls }} />
          ))}
        </div>
        <div className="mt-2">
          <p
            onClick={addLine}
            className="text-white ml-2 cursor-pointer text-sm font-medium w-6 h-6 rounded-md flex justify-center items-center bg-[#21213E] select-none hover:opacity-80 ease-in-out"
          >
            +
          </p>
        </div>
      </div>
    </div>
  );
}
