import type { ReactNode } from "react";
import type { CourseGoal as CGoal} from "../App";
import CourseGoals from "./CourseGoals";
import InfoBox from "./InfoBox";

type CourseGoalsProps = {
    goals: CGoal[];
    onDeleteGoal: (id:number) => void;
}

export default function CourseGoalsList({goals, onDeleteGoal}: CourseGoalsProps){

if (goals.length === 0){
  return (
  <InfoBox mode = "hint">You have no course goals yet. Start adding some!</InfoBox>
);
}

let warningBox: ReactNode;

if (goals.length >=4){
  warningBox = (<InfoBox mode="warning" severity="medium"> You're collecting a lot of goals. Don't put too much on your plate!</InfoBox>);
}

return (
  <>
  {warningBox}
  <ul>
    {goals.map(goal => (
      <li key={goal.id}>
        <CourseGoals title={goal.title} onDelete={onDeleteGoal} id={goal.id}>
          {goal.description}
        </CourseGoals>
      </li>
    ))}
  </ul>
  </>
);
}