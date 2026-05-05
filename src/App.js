import { useEffect } from 'react';
import SCard from './components/styled-only/Card.styled';
import SMainContainer from './components/styled-only/MainContainer.styled';
import ProfileContainer from './components/ProfileContainer';
import LinkIconGroup from './components/LinkIconGroup';
import Watermark from './components/Watermark';
import config from './config.json'

function App() {
  useEffect(() => {
    document.title = config.title + (config.subtitle ? ` - ${config.subtitle}` : '');
  }, []);

  return (
    <SMainContainer>
      <SCard>
        <ProfileContainer />
        <LinkIconGroup />
      </SCard>
      <Watermark />
    </SMainContainer>
  );
}

export default App;
