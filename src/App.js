import logo from "./logo.svg";
import "./App.css";
import Button from "./components/atoms/buttons/Button";
import Image from "./components/atoms/image/Image";
import Input from "./components/atoms/input/Input";
import Link from "./components/atoms/navLink/Link";
import SearchBar from "./components/molecules/searchBar/SearchBar";
import NavLinks from "./components/molecules/navLinks/NavLinks";
import Search from "./components/molecules/search/Search";
import CorouselInfo from "./components/molecules/corouselInfo/CorouselInfo";
import Header from "./components/organisms/header/Header";
import Corousel from "./components/organisms/corousel/Corousel";

function App() {
  const linkData = ["Home", "Explore", "Shorts", "MindBlown", "Premium"];
  const carouselData = [
    {
      textContentHeader: "Mission Frontline",
      textContentSubHeader:
        "Superstar Rana Daggubati spends time with India's finest of the Border Security Force at an outpost in Jaisalmer, Rajasthan in this discovery+ original.",
      tag1: "Must Try",
      tag2: "Trending",
      image: "mission.jpeg",
    },
    {
      textContentHeader: "Secrets Of Sinauli",
      textContentSubHeader:
        "Uncover Indian secrets buried for over 4000 years in this historical thriller that follows one of the greatest finds of the century. Neeraj Pandey's Secrets Of Sinauli is a discovery+ India original, presented by Manoj Bajpayee.",
      tag1: "New",
      tag2: "Don't Miss",
      image: "secrets.jpeg",
    },
    {
      textContentHeader: "Gold Rush",
      textContentSubHeader:
        "Hard-working gold miners risk their lives for a chance at striking it rich.",
      tag1: "Binge Now",
      tag2: "Fan Fave",
      image: "gold-rush.jpeg",
    },
    {
      textContentHeader: "2 Nations 1 Obsession",
      textContentSubHeader:
        "The rivalry between the Australian and Indian cricket teams is explored.",
      tag1: "Must Try",
      tag2: "Trending",
      image: "two-nations.jpeg",
    },
  ];
  return (
    <div className="App">
      {/* <Button type="button" bgColor="primary" btnName="Sign In"></Button> */}
      {/* <Image source="discovery-logo.png" height="50" width="150"></Image> */}
      {/* <Input
        placeHolder="Search for a Show, episodes, shorts etc."
        classType="search"
      ></Input> */}
      {/* <Link
        style={{ width: "50px", height: "50px" }}
        classType="link"
        linkName="Home"
        location="/"
      ></Link> */}
      {/* <SearchBar></SearchBar> */}
      {/* <NavLinks linkData={linkData}></NavLinks> */}
      {/* <Search></Search> */}
      {/* <CorouselInfo
        tag1="Must Try"
        textContentHeader="Mission Frontline"
        textContentSubHeader="Superstar Rana Daggubati spends time with India's finest of the Border Security Force at an outpost in Jaisalmer, Rajasthan in this discovery+ original."
      ></CorouselInfo> */}
      <Header></Header>
      <Corousel corouselData={carouselData}></Corousel>
    </div>
  );
}

export default App;
