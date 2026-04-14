import SCard from './components/styled-only/Card.styled';
import SMainContainer from './components/styled-only/MainContainer.styled';
import ProfileContainer from './components/ProfileContainer';

function App() {
  return (
    <SMainContainer>
      <SCard>
        <ProfileContainer />
      </SCard>
    </SMainContainer>
  );
}

export default App;
