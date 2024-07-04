import {
  ActivityInfoContainer,
  ActivityInfoContentContainer,
  ButtonsOfDialogContainer,
  CancelButton,
  ConfirmButton,
  Content,
  DeleteButtonContainer,
  DialogDeleteCommentContainer,
  DialogTitle,
  DialogTrigger,
  EditAndDeleteButtonContainer,
  EditButtonContainer,
  NameAndDescriptionContainer,
} from "../../styles/pages/activityInfo/styles";

import { useQuery } from "@tanstack/react-query";

import * as Dialog from "@radix-ui/react-dialog";

import { useNavigate, useParams } from "react-router-dom";

import TopBar from "../home/components/topBar";
import { Overlay } from "../../styles/pages/home/components/topBar/styles";
import { ActivityResponse } from "../home";
import axios from "axios";
import { useDeleteActivityMutate } from "../../hooks/deleteActivity";
import { useEffect } from "react";

export default function ActivityInfo() {
  const navigate = useNavigate();
  const { activityId } = useParams();
  const { mutate, isSuccess } = useDeleteActivityMutate();

  const { data: activity, isLoading } = useQuery<ActivityResponse>({
    queryKey: ["activity-info"],

    queryFn: async () => {
      return axios
        .get(`http://localhost:3333/activity/${activityId}`)
        .then((response) => response.data);
    },
  });

  function handleEditActivity(activityId: string) {
    navigate(`/editActivity/${activityId}`);
  }

  function handleDeleteActivity(activityId: string) {
    mutate(activityId);
  }

  useEffect(() => {
    if (isSuccess) {
      navigate(`/`);
    }
  }, [isSuccess]);

  return (
    <ActivityInfoContainer>
      {isLoading ? (
        <>
          <h1>Carregando...</h1>
        </>
      ) : (
        <>
          <TopBar page="ActivityInfo" />
          <ActivityInfoContentContainer>
            <NameAndDescriptionContainer>
              <h1>{activity!.name}</h1>
              <p>{activity!.description}</p>
            </NameAndDescriptionContainer>
            <EditAndDeleteButtonContainer>
              <Dialog.Root>
                <DialogTrigger asChild>
                  <DeleteButtonContainer>Deletar</DeleteButtonContainer>
                </DialogTrigger>
                <Dialog.Portal>
                  <Overlay />
                  <Content>
                    <DialogTitle>Você deseja deletar o comentário?</DialogTitle>
                    <DialogDeleteCommentContainer>
                      <ButtonsOfDialogContainer>
                        <ConfirmButton
                          onClick={() => handleDeleteActivity(activity!.id)}
                        >
                          Confirmar
                        </ConfirmButton>
                        <CancelButton>Cancelar</CancelButton>
                      </ButtonsOfDialogContainer>
                    </DialogDeleteCommentContainer>
                  </Content>
                </Dialog.Portal>
                <EditButtonContainer
                  onClick={() => handleEditActivity(activity!.id)}
                >
                  Editar
                </EditButtonContainer>
              </Dialog.Root>
            </EditAndDeleteButtonContainer>
          </ActivityInfoContentContainer>
        </>
      )}
    </ActivityInfoContainer>
  );
}
