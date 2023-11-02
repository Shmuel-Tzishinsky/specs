export default function SpecsBox() {
  return (
    <div className="border-solid  border-[1px] m-4 bg-[#121231] pt-4 pr-5 pb-4 pl-5  grid grid-cols-[55%_15%_15%_15%] text-sm border-[#F4C927] rounded-md">
      <div className="flex flex-col overflow-hidden">
        <div className="pr-2 pb-2 text-2xl font-600">Title title title</div>
        <div className="w-[auto] h-[59px] text-white text-xs font-semibold font-sans pr-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vitae nibh purus non dictum turpis
          leo, quis nam. Hac sed lectus est id. Nisi vestibulum, placerat integer nam nam. Blandit sagittis.
        </div>
      </div>
      <div className="flex justify-center items-center">In progress</div>
      <div className="flex justify-center items-center">
        <div className="cursor-pointer hover:opacity-80 ease-in-out">Edit</div>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative">
          <div className="w-8 h-8 font-mono font-bold z-[1] absolute top-[50%] left-[calc(50%_-_-17px)] bg-[#21213E] translate-x-[-50%] translate-y-[-50%] text-[1.1rem] rounded-full border-solid border-2 border-[#F4C927] color-[#F4C927] flex justify-center items-center">
            A
          </div>
          <div className="w-8 h-8 font-mono font-bold z-[1] absolute top-[50%] left-[calc(50%_-_-3px)] bg-[#21213E] translate-x-[-50%] translate-y-[-50%] text-[1.1rem] rounded-full border-solid border-2 border-[#F4C927] color-[#F4C927] flex justify-center items-center">
            A
          </div>
          <div className="w-8 h-8 font-mono font-bold z-[1] absolute top-[50%] left-[calc(50%_-_9px)] bg-[#21213E] translate-x-[-50%] translate-y-[-50%] text-[1.1rem] rounded-full border-solid border-2 border-[#F4C927] color-[#F4C927] flex justify-center items-center">
            A
          </div>
          <div className="w-8 h-8 font-mono font-bold z-[1] absolute top-[50%] left-[calc(50%_-_27px)] bg-[#21213E] translate-x-[-50%] translate-y-[-50%] text-[1.1rem] rounded-full border-solid border-2 border-[#F4C927] color-[#F4C927] flex justify-center items-center">
            A
          </div>
        </div>
      </div>
    </div>
  );
}
