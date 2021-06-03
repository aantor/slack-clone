import {
  MdFiberManualRecord,
  MdCreate,
  MdInsertComment,
  MdInbox,
  MdDrafts,
  MdBookmarkBorder,
  MdApps,
  MdPeople,
  MdExpandLess,
  MdExpandMore,
  MdAdd,
} from 'react-icons/md';
import { IoMdCopy } from 'react-icons/io';
import SidebarOption from '../SidebarOption/SidebarOption';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../../firebase';
import { SidebarHeader, SidebarWrapper } from './SidebarStyles';
import { useAuthState } from 'react-firebase-hooks/auth';

const Sidebar = () => {
  const [channels, loading, error] = useCollection(db.collection('rooms'));
    const [user] = useAuthState(auth);

  return (
    <SidebarWrapper>
      <SidebarHeader>
        <div>
          <h2>Antor's Club</h2>
          <h3>
            <MdFiberManualRecord />
            {user.displayName}
          </h3>
        </div>
        <MdCreate />
      </SidebarHeader>
      <SidebarOption Icon={MdInsertComment} title='Threads' />
      <SidebarOption Icon={MdInbox} title='Mentions' />
      <SidebarOption Icon={MdDrafts} title='Saved items' />
      <SidebarOption Icon={MdBookmarkBorder} title='Channel browser' />
      <SidebarOption Icon={MdPeople} title='People' />
      <SidebarOption Icon={MdApps} title='Apps' />
      <SidebarOption Icon={IoMdCopy} title='File browser' />
      <SidebarOption Icon={MdExpandLess} title='Show less' />
      <hr />
      <SidebarOption Icon={MdExpandMore} title='Show more' />
      <hr />
      <SidebarOption Icon={MdAdd} title='Add Channel' addChannelOption />
      {channels?.docs.map((doc) => (
        <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarWrapper>
  );     
};

export default Sidebar;