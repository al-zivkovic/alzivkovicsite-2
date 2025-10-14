import { experience } from "../constants";

const ExperienceCard = ({ company, position, startDate, endDate, location }) => {
    return (
        <div className="bg-tertiary p-5 rounded-2xl">
            <h3 className="text-white font-bold text-[24px]">{company}</h3>
            <p className="text-white text-[14px]">{position}</p>
            <p className="text-white text-[14px]">{startDate} - {endDate}</p>
            <p className="text-white text-[14px]">{location}</p>
        </div>
    )
}

const Experience = () => {
    return (
        <>
            <h1 className="text-5xl" id="experience">Experience</h1>
            {experience.map((experience, index) => (
                <ExperienceCard key={index} {...experience} />
            ))}
        </>
    )
}

export default Experience