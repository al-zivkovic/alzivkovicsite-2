import { experience } from "../constants";

const ExperienceCard = ({ company, position, startDate, endDate, location, descriptionPoints, image }) => {
    return (
        <div className="border border-white/10 p-5 rounded-2xl w-full flex flex-col gap-5">
            <div className="flex flex-row justify-between gap-2">
                <img src={image} alt={company} className="w-10 h-10 rounded-md" />
                <div className="flex flex-col">
                    <h3 className="text-white font-bold text-lg">{position}</h3>
                    <p className="text-white text-[14px]">{company} - {location}</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-white text-[14px]">{startDate} - {endDate}</p>
                </div>
            </div>
            <ul className="list-disc list-outside text-white text-[14px] pl-5 space-y-2">
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
            <h2 className="text-4xl" id="experience">Work Experience</h2>
            <div className="flex flex-col gap-5 mt-5">
                {experience.map((experience, index) => (
                    <ExperienceCard key={index} {...experience} />
                ))}
            </div>
        </>
    )
}

export default Experience