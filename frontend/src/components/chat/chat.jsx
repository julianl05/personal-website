import { useState } from 'react'
import '/chat.css'

function Chat() {
    return (
        <div id="chat">
            <form>
                <h2>Ask Me A Question</h2>
                <input type="text" id="questionInput" placeholder="What would you like to ask?" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}