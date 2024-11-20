import { useState } from 'react'
import './chat.css'

function Chat() {
    const [messages, setMessages] = useState([])
    const [userInput, setUserInput] = useState('')

    async function getResponse() {
        try {
            if (!userInput) return
            const response = await fetch ('http://localhost:4000', {
                method: 'POST',
                heads: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({userInput})
            })
            if (!response.ok) {
                throw new Error('Oops, something went wrong!')
            }
            const { message } = await response.json()
            setMessages([...messages, userInput, message])
        } catch (error) {
            console.error(error)
            return 'Oops, something went wrong!'
        }
    }

    return (
        <div id="chat">
            <form onSubmit={(e) => e.preventDefault()}>
                <h2>Ask Me A Question</h2>
                <input type="text" id="questionInput" 
                placeholder="What would you like to ask?" 
                onChange={e => setUserInput(e.target.value)}/>
                <button type="submit" onClick={getResponse}>Submit</button>
            </form>
            {
                messages.map((text, index) => {
                    <div key={index} className="chatbox">
                        <p className={index %2 == 0 ? "user-message" : "chatbot-response"}>{text}</p>
                    </div>
                })
            }
        </div>
    )
}
export default Chat