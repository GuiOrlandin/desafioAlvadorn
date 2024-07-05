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
  const { data: activities, isLoading } = useQuery<ActivityResponse[]>({
    queryKey: ["posts-info"],

    queryFn: async () => {
      return axios
        .get(`http://localhost:3333/activity`)
        .then((response) => response.data);
    },
  });

  return (
    <HomeContainer>
      <TopBar page="home" />

      {isLoading ? (
        <>
          <p>Carregando..</p>
        </>
      ) : (
        <ActivityCardsContainer>
          {activities && activities?.length > 0 ? (
            Array.isArray(activities) &&
            activities?.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))
          ) : (
            <p>Não contém atividades cadastradas.</p>
          )}
        </ActivityCardsContainer>
      )}
    </HomeContainer>
  );
}
