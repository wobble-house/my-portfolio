'use client';
import { useState, useEffect } from 'react'
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

export default function Chatbot({interchanges}) {
  const [userQuestion, setUserQuestion] = useState('')
  const [allow, setAllow] = useState(false)
  const [interchange, setInterchange] = useState([])
  
  useEffect(() => {
      const initialBotTyping = async (setInterchange, setAllow) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      let initial = true
      setInterchange([{owner: false, text: ''}])
      setAllow(true)
      setInterchange([{
      owner: false,
      text: tranformInterchanges(interchanges, initial)
   }])
      };
    initialBotTyping(setInterchange, setAllow);
    scrollDown()  
   }, [interchanges])
   const handleSubmit = async (e) => {
    e.preventDefault()
    if(!userQuestion || !allow) return
    const uQ = userQuestion
    const newInterchange = [...interchange, {
      owner: true,
      text: userQuestion
    }]
    setInterchange(newInterchange)
    setUserQuestion('')
    setAllow(false)
    getBotAnswer(interchanges, setInterchange,  uQ, newInterchange, setAllow)
    scrollDown()
  }
  return (
<div className="flex flex-col font-mono items-center justify-center z-80 max-w-sm">
          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col overflow-auto dark:bg-neutral-800 w-full" style={{ height: "60vh", width: "50vw"}}>
            {interchange.map((chat,i) => (
              chat.owner ? 
              <div key={i} className = "user flex flex-row my-2 w-full p-2">
              <span className="w-2/3"/>
              <span className="w-1/3 dark:bg-neutral-800 p-1 rounded">
                <div className="flex-col">
                  <h2 className="text-sm text-neutral-400 dark:text-a2imblue">USERNAME</h2>
                  <ReactMarkdown className="bottext text-xs dark:text-white whitespace-normal relative" remarkPlugins={[remarkGfm]}>{chat.text}</ReactMarkdown>
                </div>
               
              </span>
            </div>
             :   
              <div key={i} className = "bot  dark:bg-neutral-800 w-3/4  p-2 rounded">
                <div className="flex flex-col relative">
                <h2 className="text-sm animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">RossBot</h2>
                <ReactMarkdown className="bottext text-xs dark:text-white whitespace-normal relative" remarkPlugins={[remarkGfm]}>{chat.text}</ReactMarkdown>
                </div>
              </div>
            ))}
            <div id="scrollTo"></div>
            </div>
            <footer className = "flex flex-row justify-between items-center p-1 w-full">
            <div className = "flex flex-row justify-between  w-full">
              <input className = " bg-gray-200 w-2/3 p-2 " placeholder="Type a message" value={userQuestion} onChange={ (e) => { setUserQuestion(e.target.value)}}/>
              <button className = " bg-rosspurple dark:bg-rossdarkpurple p-2 ml-2 w-1/3  text-white" type="submit"> Send</button>
            </div>
            </footer>
          </form>
        </div>
  )
}

const createMarkup = (text) => {
  return {__html: text};
}

export const tranformInterchanges = (interchanges, initial = false) => { 
  let initialText = initial ? `
  Well, well, well.. let's see who we have here 🥰\
  
  I'm RossBot, please tell me what you would like to know: 
  `: ''
  interchanges.map((e, i) => {
      initialText += 
      `
      ${(i+1)}.) ${e.q} \
      `
  })
  return initialText
}

export const searchInterchange = (interchanges, q) => {
  let result = interchanges.find(e => e.q.toLowerCase().includes(q.toLowerCase()))
  console.log(result?.a)
  if(result?.a === undefined ) 
  return`
  Cant seem to understand your question, please try again 😔

  
  Here are the options again:

  ${tranformInterchanges(interchanges)}
  `
  else return result?.a
};

export const showBotTyping = async (setInterchange, prevState, setAllow) => {
  scrollDown()
  await new Promise(resolve => setTimeout(resolve, 700));
  setInterchange([...prevState, {
    owner: false,
    text: 'RossBot is typing.'
  }])
  scrollDown()
  await new Promise(resolve => setTimeout(resolve, 700));
  setInterchange([...prevState, {
    owner: false,
    text: 'RossBot is typing..'
  }])
  scrollDown()
  await new Promise(resolve => setTimeout(resolve, 700));
  setInterchange([...prevState, {
    owner: false,
    text: 'RossBot is typing...'
  }])
  scrollDown()
  await new Promise(resolve => setTimeout(resolve, 700));
  setAllow(true)
  scrollDown()
}


export const getBotAnswer = async (interchanges, setInterchange, q, prevState, setAllow) => {
  await showBotTyping(setInterchange, prevState, setAllow)
  scrollDown()
  setInterchange([...prevState, {
    owner: false,
    text: searchInterchange(interchanges,q)
  }])
  scrollDown()
}

const scrollDown = () => {
  document.getElementById('scrollTo').scrollIntoView({ behavior: "smooth", block: "end"});
}