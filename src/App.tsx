import CourseGoals from './components/CourseGoals.tsx';
import goalsImg from './assets/goals.png'
import Header from './components/Header.tsx';
export default function App() {
  return (
    <main style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "60px",
      width: "100%",
      minHeight: "100vh",
      background: "#f7f9fa",
      
    }}>
      
      <CourseGoals title="Learn React + TS"><p><Header image={{src:goalsImg, alt:'A list of goals'}}>
        <h1>Your course goals</h1>
      </Header>Learn it with udemy</p></CourseGoals> 
    </main>
  );
}