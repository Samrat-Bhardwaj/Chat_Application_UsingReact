import { ChatEngine } from 'react-chat-engine';

import './App.css'
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed';
const projectID="f2c0b107-2453-4ecc-94d3-baffd5bc89a1";
const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/> // if not logged in then return loginForm
    return (
        <ChatEngine
            height="100vh"
            projectID="f2c0b107-2453-4ecc-94d3-baffd5bc89a1"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps)=> <ChatFeed {... chatAppProps}/>}  // chat feed se kch kch aya aur humne vo sare comps m update 
                                                                                //krvaya by using (...)-> spread function      
        />
    );
}

export default App;