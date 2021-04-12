import React from "react";

function list(props) {



  return (
    <table className="table">
      {<ul>}
      {props.results.map(result => (
        <table>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          <tr>
          </tr>
            <td>Ricardo</td >
            <td>Matamoros</td>
            <td>100</td>
          </tr>
        </table>
        <li>
        </li>
      ))}
      {</ul>}
    </table>
  );



}

export default list;
