import ReviewsSlider from "./ReviewsSlider";

const Reviews = () => {
    return(
        <div className="bg-[#02050a] pt-[4rem] md:pt-[4rem]">
            <h1 className="heading">  
                Client <span className="text-yellow-400">Review</span>
            </h1>
            <div className="pt-[5rem] pb-[5rem] w-[80%] mx-auto">
                <ReviewsSlider />
            </div>
        </div>
    )
}

export default Reviews;