
interface Props {
    title: string;
    year: string;
    skill1: string;
    skill2: string;
    skill3: string;
    skill4: string;
}

const SkillsItem = ({title,year,skill1,skill2,skill3,skill4}: Props)  => {
    return(
        <div className="mb-[4rem] md:mb-[8rem]">
            <span className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[19px] border-[2px] border-[#55e6a5]">
                {year}
            </span>
            <h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white">
                {title}
            </h1>
            <p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80">
                {skill1}
            </p>
            <p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80">
                {skill2}
            </p>
            <p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80">
                {skill3}
            </p>
            <p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80">
                {skill4}
            </p>
        </div>
    )
}

export default SkillsItem;