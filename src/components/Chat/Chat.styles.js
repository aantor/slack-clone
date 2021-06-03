import styled from 'styled-components';
import { MdInfoOutline,MdStarBorder } from 'react-icons/md';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid lightgray;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
  }
`;

export const StartIcon = styled(MdStarBorder)`
   margin-left: 10px;
    font-size: 18px;
`;

export const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

`;

export const InfoIcon = styled(MdInfoOutline)`
  margin-right: 8px;
  font-size: 16px;
`;

export const ChatWrapper = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  /* margin-top: 10px; */

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ChatMessages = styled.div``;

export const ChatBottom = styled.div`
  padding-bottom: 200px;
`;