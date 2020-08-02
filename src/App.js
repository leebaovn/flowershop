import React from 'react';
import './App.css';
import './index.css';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
import Head from './components/Header'

const Container = styled('div', {
  width: "100%",
  maxWidth: "1200px",
  margin: "auto"
})

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Container>
          <Head>

          </Head>
        </Container>
      </BaseProvider>
    </StyletronProvider>)
}

export default App;
