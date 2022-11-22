import { useState } from "react";
import SearchBar from "../components/SearchBar";
import HomeContainer from "../containers/HomeContainer";

const Home = () => {
  const [text, setText] = useState("");

  return (
    <>
      <SearchBar setText={setText} />
      <HomeContainer text={text} />
    </>
  );
};

export default Home;
