import logo from './logo.svg';
import './App.css';
import StudentTable from './Components/StudentTable';
import { students } from './data/StudentsDb';

function App() {
  return (
    <div className="App">
     <h1>Student Information Portal</h1>
     <table>
      <tBody>
        <th>
          <tr>
            <td>
              <StudentTable students = {students}/>
            </td>
          </tr>
        </th>
      </tBody>
     </table>
        
    </div>
  );
}

export default App;
