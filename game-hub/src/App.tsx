import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGride from "./components/GameGride";
import GenralList from "./components/GenralList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav""main"`,
          lg: `"nav nav""aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>
            <GenralList />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GameGride />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
