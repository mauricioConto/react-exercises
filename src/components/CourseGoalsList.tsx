import type { CourseGoal as CGoal} from "../App";
import CourseGoals from "./CourseGoals";

type CourseGoalsProps = {
    goals: CGoal[];
    onDeleteGoal: (id:number) => void;
}

export default function CourseGoalsList({goals, onDeleteGoal}: CourseGoalsProps){

return (
<div>
<ul className="goals-grid">
    {goals.map(goal => (
      <li key={goal.id}>
        <CourseGoals title={goal.title} onDelete={onDeleteGoal} id={goal.id}>
          {goal.description}
        </CourseGoals>
      </li>
    ))}
  </ul>
  </div>
);
}