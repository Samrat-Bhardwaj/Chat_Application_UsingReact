import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) =>{
    const { chats, activeChat, userName, messages } = props; // props jo aaye, usme se ye ye nikal liya

    const chat= chats && chats[activeChat];// -> if chats exist then find active chat in chats
    const renderReadReceipts = (message, isMyMessage)=>{
       return chat.people.map((person, index) => person.last_read === message.id && (
            <div
                key={`read_${index}`}
                className="read-receipt"
                style={{
                    float : isMyMessage ? 'right' : 'left',
                    backgroundImage: person.person.avatar &&`url(${person.person.avatar})`,
                }}
            />
        ));
    };
    const renderMessages = () => {
        const keys= Object.keys(messages) // take keys from our messages n put it in this var
        // keys are nothing but just the ids of our random messages
        return keys.map((key, index)=>{
            const message = messages[key]; // key k hisab se sare message aaye(apne h ya kisi aur k, idk yet)
            const lastMessageKey = index === 0 ? null : keys[index-1]; // last message h to null vrna message
            const isMyMessage = userName === message.sender.username; // to check ye mera message h ya kisi aur ka

            return (
                <div key={`msg_${index}`} style={{width:'100%'}} >
                    <div className="message-block">
                    {
                        isMyMessage // if else loop 
                        ? <MyMessage message={message}/> // rendering 
                        : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/> 
                    }
                    </div>
                    <div className="read-receipts" style ={{marginRight : isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>   
                        {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            );
        });
    };

    // renderMessages();

    if(!chat) return <div/>;
    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => ` ${person.person.username}`)} 
                </div>
            </div>
            {renderMessages()}
            <div style={{height: '100px'}}/>
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat}/>
            </div>
        </div>
    );
};

export default ChatFeed;