import CustomButton from "../../customElems/CustomButton"

const LookBookCard = ({ title, tagline, imageUrl, btnText }) => {
  return (
    <div style={{ background: `url(${imageUrl})`, backgroundSize:"cover", backgroundPosition: "center" }} className="w-45 md:w-60 h-full bg-gray-200 rounded-lg overflow-hidden shadow-lg flex flex-col justify-end">
      <div className="flex w-full px-4 pt-2 pb-4 flex-col items-start gap-[7px] bg-[rgba(255,251,251,0.20)] shadow-[0_-3px_4px_0_rgba(0,0,0,0.25),-2px_2px_4px_0_rgba(0,0,0,0.25)_inset] backdrop-blur-[6.35px]">
        <h1 className="text-xl inter-base font-semibold text-white">{title}</h1>
        <p className="text-md w-full text-gray-300">
          {tagline}
        </p>
        <CustomButton title={btnText} className={"py-3 text-white"}/>
      </div>
    </div>
  )
}

export default LookBookCard