import { useQuery } from "@tanstack/react-query";
import {
  ActivityCardsContainer,
  HomeContainer,
} from "../../styles/pages/home/styles";
import ActivityCard from "./components/ActivityCard";
import TopBar from "./components/topBar";
import axios from "axios";

export interface ActivityResponse {
  name: string;
  description: string;
  id: string;
}

export default function Home() {
  const {
    data: activities,
    refetch,
    isLoading,
  } = useQuery<ActivityResponse[]>({
    queryKey: ["posts-info"],

    queryFn: async () => {
      return axios
        .get(`http://localhost:3333/activity`)
        .then((response) => response.data);
    },
  });

  return (
    <HomeContainer>
      {isLoading ? (
        <>
          <p>Carregando..</p>
        </>
      ) : (
        <>
          <TopBar page="home" />
          <ActivityCardsContainer>
            {activities?.map((activity) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                isLoading={isLoading}
              />
            ))}
          </ActivityCardsContainer>
        </>
      )}
    </HomeContainer>
  );
}
