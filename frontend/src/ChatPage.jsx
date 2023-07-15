import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatPage = (props) => {
  return (
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow
        projectId="PROJECT_ID" //change with your project_id from chatengine.io
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%' }}
      />
    </div>
  )
}

export default ChatPage;