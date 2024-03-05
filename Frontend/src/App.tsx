import { useState } from "react";

import Input from "./components/Input";
import Button from "./components/Button";

interface ISubmission {
  firstName: string,
  lastName: string,
  email: string,
  count: number,
}

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submissions, setSubmissions] = useState([]);
  const [tableElements, setTableElements] = useState([])
  
  function handleSubmit() {
    let submission = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      count: 1,
    }


    setSubmissions((prevState) => {
      return [ ...prevState, submission ];
    });

    console.log(submissions);
  }

  return (
  <>
    <div className="flex flex-col min-h-screen min-h-screen bg-slate-900 justify-center item-center px-20 gap-2" >
      <div className="flex flex-row justify-center items-center gap-2">
        <Input type="text" placeholder="First Name" onChange={(e : any) => setFirstName(e.target.value)} value={firstName} />
        <Input type="text" placeholder="Last Name" onChange={(e : any) => setLastName(e.target.value)} value={lastName} />
      </div>
      <div className="flex justify-center items-center">
        <Input type="email" placeholder="Email" onChange={(e : any) => setEmail(e.target.value)} value={email} />
      </div>
      <Button type="button" onClick={handleSubmit} text="Submit" /> 
    </div>

    {
      /*for(let i = 0; i < submissions.length; i++) {
        setTableElements((prevState) => {
          return(
            <p>{submissions[i].firstName}</p>
            <p>{submissions[i].lastName}</p>
            <p>{submissions[i].Email}</p>
            <p>{submissions[i].Count}</p>
          )
        })*/

      // submissions.map((submission: ISubmission, index: number) => (
      //   <div key={index}>
      //     <p>First Name: {submission.firstName}</p>
      //     <p>Last Name: {submission.lastName}</p>
      //     <p>Email: {submission.email}</p>
      //     <p>Count: {submission.count}</p>
      //   </div>
      // ))
    }
      
    </>
  )
}

export default App
