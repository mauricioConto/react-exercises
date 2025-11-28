import type { PropsWithChildren, ReactNode } from 'react';
import './CourseGoals.css';


type CourseGoalProps = PropsWithChildren<{title:string}>

export default function CourseGoal({title, children}: CourseGoalProps) {
  return (
    <article className="goal-card">
      <h2 className="goal-title">{title}</h2>
      <p className="goal-description">{children}</p>
      <button className="goal-delete">Delete</button>
    </article>
  );
}