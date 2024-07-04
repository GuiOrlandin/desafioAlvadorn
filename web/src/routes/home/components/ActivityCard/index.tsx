import {
  ActivityCardContainer,
  NameAndEditButtonActivityContainer,
} from "../../../../styles/pages/home/components/activityCard/styles";

import { useNavigate } from "react-router-dom";

export interface Activity {
  description?: string;
  name: string;
  id: string;
}
interface ActivityCardProps {
  activity: Activity;
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  const navigate = useNavigate();

  function handleActivityInfo() {
    navigate(`/activityInfo/${activity.id}`);
  }

  return (
    <ActivityCardContainer onClick={() => handleActivityInfo()}>
      <NameAndEditButtonActivityContainer>
        <h1>{activity.name}</h1>
      </NameAndEditButtonActivityContainer>
      <p>{activity.description}</p>
    </ActivityCardContainer>
  );
}
