import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled";
import Card from "./components/Card";
import Container from "./components/styles/Container.styled";
import Footer from "./components/Footer";
import Footers from "./components/styles/Footer.styled";
const style = {
  colors: {
    header: "#fff",
    body: "#fff",
    footer: "#8A1C4A",
  },
  margins: {},
  responsive: "768px",
};
const App = () => {
  return (
    <>
      <ThemeProvider theme={style}>
        <div>
          <Container>
            <GlobalStyles />
            <Header />
            <Card />
          </Container>
        </div>
      </ThemeProvider>
      <Footers>
        <Container>
          <Footer />
        </Container>
      </Footers>
    </>
  );
};

export default App;
