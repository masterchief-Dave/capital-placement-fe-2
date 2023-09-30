import { candidates } from "../../globals/candidates"
import { Candidate } from "../Candidate"

export const CandidateList = () => {
  return (
    <div className="pt-[0.4rem] pb-[0.8rem] rounded-[1.6rem] px-[1.6rem] bg-white">
      <section className="flex items-center justify-between py-[1.6rem]">
        <div className="flex items-center gap-x-[3.2rem]">
          <input type="checkbox" />
          <h4 className="text-[#1D4ED8] text-[1.4rem] font-semibold">247 Candidates</h4>
        </div>
        <div className="px-4 divide-x flex items-center">
          <h4 className="px-[1.6rem] text-[1.4rem] font-medium text-[#1D4EDB]">Qualified</h4>
          <div className="flex items-center gap-x-[1.4rem] px-[1.6rem]">
            <p className="text-[1.4rem]">Task</p>
            <span className="h-[2.5rem] w-[2.5rem] text-[1rem] rounded-[4rem] flex items-center justify-center bg-[#F7F8FD] text-[#22215B]">75</span>
          </div>
          <div className="flex items-center gap-x-[1.4rem] px-[1.6rem]">
            <p className="text-[1.4rem]">Disqualified</p>
            <span className="h-[2.5rem] text-[1rem] w-[2.5rem] rounded-[4rem] flex items-center justify-center bg-[#F7F8FD] text-[#22215B]">75</span>
          </div>
        </div>
      </section>
      {candidates.map((candidate) => {
        return (
          <Candidate
            key={candidate.id}
            id={candidate.id}
            fullName={candidate.fullName}
            country={candidate.country}
            degree={candidate.degree}
            pill={candidate.pill}
            tags={candidate.tags}
          />
        )
      })}
    </div>
  )
}
