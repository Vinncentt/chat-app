import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'


const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '087f4915-7c78-461a-aec9-9cf31b5dcb03', 
        props.user.username, 
        props.user.secret
        );
    return <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%'}} />
    </div>
}

export default ChatsPage