import {
  ActivityCardsContainer,
  HomeContainer,
} from "../../styles/pages/home/styles";
import ActivityCard from "./components/ActivityCard";
import TopBar from "./components/topBar";

export default function Home() {
  return (
    <HomeContainer>
      <TopBar page="home" />
      <ActivityCardsContainer>
        <ActivityCard />
      </ActivityCardsContainer>
    </HomeContainer>
  );
}
