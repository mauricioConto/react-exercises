import type { PropsWithChildren, ReactNode } from 'react';
import './CourseGoals.css';


type CourseGoalProps = PropsWithChildren<{
  id: number
  title:string
  onDelete:(id:number) => void;
}>

export default function CourseGoal({title, id, onDelete, children}: CourseGoalProps) {
  return (
    <article className="goal-card">
      <div className="goal-row">
        <p><h2 className="goal-title">{title}</h2></p>
      </div>
        {children}
      
      <button className="goal-delete" onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}