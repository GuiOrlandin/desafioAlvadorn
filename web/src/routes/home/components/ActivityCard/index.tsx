import {
  ActivityCardContainer,
  NameAndEditButtonActivityContainer,
} from "../../../../styles/pages/home/components/activityCard/styles";

import { CiEdit } from "react-icons/ci";

export interface Activity {
  description?: string;
  name: string;
  id: string;
}
interface ActivityCardProps {
  activity: Activity;
  isLoading?: boolean;
}

export default function ActivityCard({
  activity,
  isLoading,
}: ActivityCardProps) {
  function handleEditClick() {
    window.location.href = `/activityUpdate/${activity.id}`;
  }

  return (
    <ActivityCardContainer>
      <NameAndEditButtonActivityContainer>
        <h1>{activity.name}</h1>

        <CiEdit size={20} />
      </NameAndEditButtonActivityContainer>
      <p>{activity.description}</p>
    </ActivityCardContainer>
  );
}
