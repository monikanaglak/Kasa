import React,{ useState } from "react"
import data from '../data';
import SingleQuestions from "./Our_value";
export function Accordeon (){
  const [questions,setQuestions] = useState(data) 
  return(
    <main>
      <div>
        <section>
          {questions.map((question)=>{
            return(
              <SingleQuestions key={question.id}{...question}/>
            )
          })}
        </section>
      </div>
    </main>
  )
}