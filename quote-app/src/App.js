import React ,{ useState } from 'react';

const quotes = [
  " Code is like humor. When you have to explain it, it's bad."  ,
 " If you think good architecture is expensive, try bad architecture.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." ,
  "Software is a great combination between artistry and engineering.", 
  "The best error message is the one that never shows up." ,
  "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors." ,
  "Programming is not about typing, it's about thinking.", 
  "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.", 
  "The sooner you start to code, the longer the program will take." ,
  "First, solve the problem. Then, write the code."
]


export default function App() {
  
  const [quote , setQuote] = useState(quotes[0])

function randomquote() {
const rmg = quotes[Math.floor(Math.random() * quotes.length)]
  setQuote(rmg)
}
  
  
  
  return (
    <>
  <div>{quote}</div>
  <button onClick={randomquote}>click !</button>
  </>
  )
}
