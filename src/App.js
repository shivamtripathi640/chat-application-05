import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import LogoutForm from './components/LogoutForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const projectID = '166c953d-fa9c-4327-96ea-cbd504379c02'
const App = () => {
    //it is saying that if there is no usernameu can not logged in 
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <div className="app-container">
          
        
        <ChatEngine
           height="100vh"
           projectID={projectID}
           userName={localStorage.getItem('username')}
           userSecret={localStorage.getItem('password')}
           renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}
           onNewMessage={ () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
        <div className='log-out-form-but'>
         < LogoutForm />
         </div>
        </div>
    );
};

export default App;