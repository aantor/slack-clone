import styled from 'styled-components';
import { MdAccessTime, MdSearch, MdHelpOutline } from 'react-icons/md';
import { Avatar } from '@material-ui/core';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 0.625rem 0;
`;

export const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  margin-left: 1.25rem;
  :hover {
    opacity: 0.8;
  }
`;
export const TimeIcon = styled(MdAccessTime)`
  margin-right: 1.875rem;
  color: #fff;
  font-size: 1.5rem;
`;

export const HeaderSearch = styled.div`
  flex: 0.4;
  border: 1px solid gray;
  border-radius: 6px;
  opacity: 1;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #421f44;

  > input {
    outline: none;
    border: none;
    text-align: center;
    min-width: 30vw;
    background-color: transparent;
    color: #fff;
  }
`;

export const SearchIcon = styled(MdSearch)`
  color: gray;
  margin-left: 1.25rem;
`;

export const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
`;

export const HelpIcon = styled(MdHelpOutline)`
  color: #fff;
  margin-right: 1.25rem;
  font-size: 1.5rem;
`;
