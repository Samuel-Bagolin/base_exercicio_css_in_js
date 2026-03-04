import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: #f9f5e7;
  color: #a7727d;
  text-align: center;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

const Logo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`

const Header = () => (
  <HeaderContainer>
    <Logo
      src="https://picsum.photos/seed/jobs/200/200"
      alt="EBAC Jobs Logo"
      referrerPolicy="no-referrer"
    />
    <h1>EBAC Jobs</h1>
  </HeaderContainer>
)

export default Header
