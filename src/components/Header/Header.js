import { useAuthState } from 'react-firebase-hooks/auth';
import { useDocument } from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../../features/appSlice';
import { auth, db } from '../../firebase';
import { HeaderAvatar, HeaderLeft, HeaderRight, HeaderSearch, HeaderWrapper, HelpIcon, SearchIcon, TimeIcon } from './Header.styles';

const Header = () => {
  const [user] = useAuthState(auth);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  );
  
  return (
    <>
      <HeaderWrapper>
        <HeaderLeft>
          <HeaderAvatar
            src={user?.photoURL}
            alt={user?.displayName}
            onClick={() => auth.signOut()}
          ></HeaderAvatar>
          <TimeIcon />
        </HeaderLeft>
        <HeaderSearch>
          <SearchIcon />
          <input
            placeholder={`Search ${
              roomId && roomDetails ? roomDetails?.data().name : 'channel'
            }`}
          />
        </HeaderSearch>
        <HeaderRight>
          <HelpIcon />
        </HeaderRight>
      </HeaderWrapper>
    </>
  );
};

export default Header;
