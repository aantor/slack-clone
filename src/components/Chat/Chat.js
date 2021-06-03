import { useSelector } from 'react-redux';
import { selectRoomId } from '../../features/appSlice';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import ChatInput from './ChatInput';
import {
    ChatBottom,
    ChatMessages,
  ChatWrapper,
  Header,
  HeaderLeft,
  HeaderRight,
  InfoIcon,
  StartIcon,
} from './Chat.styles';
import { useEffect, useRef } from 'react';
import { db } from '../../firebase';
import Message from './Message';

const Chat = () => {
  const roomId = useSelector(selectRoomId);
  const chatRef = useRef(null);

  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  );

  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
  );

    useEffect(() => {
      chatRef?.current?.scrollIntoView({
        behavior: 'smooth',
      });
    }, [roomId, loading]);
  
  return (
    <ChatWrapper>
      <Header>
        <HeaderLeft>
          <h4>
            <strong>#{roomDetails?.data().name}</strong>
            <StartIcon />
          </h4>
        </HeaderLeft>
        <HeaderRight>
          <p>
            <InfoIcon /> Details
          </p>
        </HeaderRight>
      </Header>
      <ChatMessages>
        {roomMessages?.docs.map((doc) => {
          const { message, timestamp, user, userImage } = doc.data();

          return (
            <Message
              key={doc.id}
              message={message}
              timestamp={timestamp}
              user={user}
              userImage={userImage}
            />
          );
        })}
        <ChatBottom ref={chatRef} />
      </ChatMessages>

      <ChatInput
        channelName={roomDetails?.data().name}
        channelId={roomId}
        chatRef={chatRef}
      />
    </ChatWrapper>
  );
};

export default Chat;
