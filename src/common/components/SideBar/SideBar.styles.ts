import styled from 'styled-components';

export const SideBarWrapper = styled.div`
  position: absolute;
  left: 0rem;
  top: 0rem;
  bottom: 0rem;
  width: 300px;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.tertiary};
  text-transform: uppercase;
`;

export const LogoWrapper = styled.div`
  margin-top: 10%;
  width: 90%;
  height: 25%;
  text-align: center;
`;

export const LogoImage = styled.img`
  height: auto;
  width: 90%;
  color: ${({ theme }) => theme.colors.primary};
`;

export const MenuWrapper = styled.div`
  width: 100%;
  height: 75%;
`;

export const MenuNavigationItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: white;
  font-weight: 700;

  li {
    margin: 2rem;
  }
  a {
    color: white;
    text-decoration: underline transparent;
    transition: text-decoration 0.5s ease-out;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const MenuNavigationItem = styled.li`
  color: white;
`;

export const MenuNavigationItemActive = styled.li`
  font-weight: 700;

  &:after {
    position: absolute;
    content: '';
    right: 0;
    border-style: solid;
    border-width: 12px 25px 12px 0;
    border-color: transparent ${({ theme }) => theme.colors.primary} transparent transparent;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
`;
