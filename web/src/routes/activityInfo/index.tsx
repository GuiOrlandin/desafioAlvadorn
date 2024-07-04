import {
  ActivityInfoContainer,
  ActivityInfoContentContainer,
  DeleteButtonContainer,
  EditAndDeleteButtonContainer,
  EditButtonContainer,
  NameAndDescriptionContainer,
} from "../../styles/pages/activityInfo/styles";

import TopBar from "../home/components/topBar";

export default function ActivityInfo() {
  return (
    <ActivityInfoContainer>
      <TopBar page="ActivityInfo" />
      <ActivityInfoContentContainer>
        <NameAndDescriptionContainer>
          <h1>Name</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </NameAndDescriptionContainer>
        <EditAndDeleteButtonContainer>
          <DeleteButtonContainer>Deletar</DeleteButtonContainer>
          <EditButtonContainer>Editar</EditButtonContainer>
        </EditAndDeleteButtonContainer>
      </ActivityInfoContentContainer>
    </ActivityInfoContainer>
  );
}
