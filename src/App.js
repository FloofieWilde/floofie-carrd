import SCard from './components/styled-only/Card.styled';
import SMainContainer from './components/styled-only/MainContainer.styled';
import ProfileContainer from './components/ProfileContainer';
import LinkIconGroup from './components/LinkIconGroup';

function App() {
  return (
    <SMainContainer>
      <SCard>
        <ProfileContainer />
        <LinkIconGroup />
      </SCard>
    </SMainContainer>
  );
}

export default App;
