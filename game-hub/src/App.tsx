import { Center, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGride from "./components/GameGride";
import GenralList from "./components/GenralList";
import { useState } from "react";
import { Genre } from "./Hooks/useGenrel";
import PlatformSelecter from "./components/PlatformSelecter";

function App() {
  const [selectedgenre, setselectedgenre] = useState<Genre | null>(null);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav""main"`,
          lg: `"nav nav""aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={2}>
            <GenralList
              onSelectGenre={(genre) => setselectedgenre(genre)}
              SelectGenre={selectedgenre}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <PlatformSelecter />
          <GameGride selectedGenre={selectedgenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
