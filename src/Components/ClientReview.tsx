import { StarIcon } from "@heroicons/react/20/solid";

interface Props {
    name: string;
    role: string;
    image: string;
}


const ClientReview = ({name,role,image}: Props) => {
    return(
        <div className="flex flex-col text-center justify-center">
            <img src={image} alt={name} width={100} height={100} className="mx-auto mb-[2rem] rounded-full"/>
            <div className="flex items-center mx-auto">
                <StarIcon className="w-[2rem] h-[2rem] text-yellow-500"/>
                <StarIcon className="w-[2rem] h-[2rem] text-yellow-500"/>
                <StarIcon className="w-[2rem] h-[2rem] text-yellow-500"/>
                <StarIcon className="w-[2rem] h-[2rem] text-yellow-500"/>
                <StarIcon className="w-[2rem] h-[2rem] text-yellow-500"/>
            </div>
            <h1 className="text-[25px] text-white mt-[2rem]">{name}</h1>
            <p className="text-[18px] text-white opacity-80 mt-[0.5rem] mb-[1.4rem]">{role}</p>
            <p className="text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit excepturi distinctio molestias adipisci dignissimos similique corporis reiciendis magni commodi quisquam quos asperiores labore, a modi perferendis repellendus culpa iure accusamus!
            </p>
        </div>
    )
}

export default ClientReview;