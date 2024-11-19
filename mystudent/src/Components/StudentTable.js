import '../Assets/css/compo.css';
export default function StudentTable(){
    return(
        <div className = "outerDiv">
            <div className = "leftDiv">
                <table>
                    <th>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Course</td>
                            <td>Country</td>
                        </tr>
                    </th>
                </table>
            </div>
        </div>
    )
}