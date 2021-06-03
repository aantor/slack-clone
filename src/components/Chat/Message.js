import { MessageWrapper,MessageInfo } from "./Message.styles";

function Message({ message, timestamp, user, userImage }) {
  return (
    <MessageWrapper>
      <img src={userImage} alt='' />
      <MessageInfo>
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageWrapper>
  );
}

export default Message;



