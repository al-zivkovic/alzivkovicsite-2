import { experience } from "../constants";

const ExperienceCard = ({ company, position, startDate, endDate, location, descriptionPoints, image }) => {
    return (
        <div className="border border-white/10 p-4 sm:p-5 rounded-2xl w-full flex flex-col gap-4 sm:gap-5">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-2">
                <div className="flex flex-row gap-3">
                    <img src={image} alt={company} className="w-8 h-8 sm:w-10 sm:h-10 rounded-md flex-shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="text-white font-bold text-base sm:text-lg">{position}</h3>
                        <p className="text-white text-xs sm:text-[14px]">{company} - {location}</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-blue-400 text-xs sm:text-[14px] font-semibold bg-blue-400/10 px-2 py-1 rounded-md text-center">{startDate} - {endDate}</p>
                </div>
            </div>
            <ul className="list-disc list-outside text-white text-xs sm:text-[14px] pl-4 sm:pl-5 space-y-1 sm:space-y-2">
                {descriptionPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    )
}

const Experience = () => {
    return (
        <>
            <h2 className="text-2xl sm:text-4xl pb-6 sm:pb-10" id="experience">Work Experience</h2>
            <div className="flex flex-col gap-5">
                {experience.map((experience, index) => (
                    <ExperienceCard key={index} {...experience} />
                ))}
            </div>
        </>
    )
}

export default Experience