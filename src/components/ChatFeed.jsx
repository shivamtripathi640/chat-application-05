import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';


 
const ChatFeed = (props) => {
    
    //generics
    const { chats, activeChat, userName, messages } = props; 
    
    // To find our Current chat.
    const chat = chats && chats[activeChat];
    
    //this function renderReadreceipts map over the people who read the message..
    const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
            <div 
            key={ 'read_${index}'}
            className="read-receipt"
            style={{
                float: isMyMessage ? 'right' : 'left',
                backgroundImage: person.person.avatar && 'url(${person.person.avatar})' 
            }}

            />
        ));
    

    //create a new functional component which is going to be used for generating messages..
    const renderMessages = () => {
        const keys = Object.keys(messages);
       
           return keys.map((key, index) => {
            const message  = messages[key]; //We are Extracting the meassage from here.
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={ 'mssg_${index}' } style={{ width:'100%' }}>
                   <div className="message-block">
                    {
                        isMyMessage
                        ? <MyMessage message={message} /> //passing 1 prop to MyMessage.
                        : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} /> //Passing 2 props to TheirMessage.
                    }
                   </div>

                   <div className="read-receipts" style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>
                        {renderReadReceipts(message, isMyMessage)}

                   </div>

                </div>
            );
        });
    };
    
    // for check.
    if(!chat) return <div />;
    
    return (
        <div className="chat-feed">
           <div className="chat-title-container">
             <div className="chat-title">{chat?.title} </div>
              
               <div className="chat-subtitle">
                 {chat.people.map((person) => '${person.person.username}' ) }
               </div>
            </div>
            {renderMessages()}
            <div style={{height: '100px'}}/>
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
       
    );
};

export default ChatFeed;