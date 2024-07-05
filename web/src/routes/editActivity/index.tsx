import { useState, ChangeEvent, useEffect } from "react";

import TopBar from "../home/components/topBar";

import { useNavigate, useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import {
  DescriptionInputContainer,
  EditActivityContainer,
  EditActivityContentContainer,
  NameInputContainer,
  SendActivityEditedInputContainer,
} from "../../styles/pages/editActivity/styles";
import { ActivityResponse } from "../home";
import axios from "axios";
import {
  EditActivityDetails,
  useEditActivityMutate,
} from "../../hooks/editActivity";

export default function EditActivity() {
  const { activityId } = useParams();
  const navigate = useNavigate();
  const { mutate, isSuccess: EditIsSuccess } = useEditActivityMutate();

  const {
    data: activity,
    isLoading,
    isSuccess,
  } = useQuery<ActivityResponse>({
    queryKey: ["activity-info"],

    queryFn: async () => {
      return axios
        .get(`http://localhost:3333/activity/${activityId}`)
        .then((response) => response.data);
    },
  });

  const [detailsForActivityToUpdate, setDetailsForActivityToUpdate] =
    useState<EditActivityDetails>({
      id: "",
      description: "",
      name: "",
    });

  function handleSetDetailsForActivityToUpdate(
    event: ChangeEvent<HTMLInputElement>,
    inputTitle: string
  ) {
    const { value } = event.target;
    setDetailsForActivityToUpdate((prevDetails) => ({
      ...prevDetails!,
      [inputTitle]: value,
    }));
  }

  function handleEditActivity() {
    mutate(detailsForActivityToUpdate!);
  }

  useEffect(() => {
    if (isSuccess && activity) {
      setDetailsForActivityToUpdate({
        id: activity.id,
        description: activity.description,
        name: activity.name,
      });
    }

    if (EditIsSuccess) {
      navigate(`/`);
    }
  }, [isSuccess, activity, EditIsSuccess]);

  return (
    <EditActivityContainer>
      <TopBar page="editActivity" />
      {isLoading ? (
        <h2>Carregando..</h2>
      ) : (
        <EditActivityContentContainer>
          <NameInputContainer>
            <h2>Nome</h2>
            <input
              type="text"
              value={detailsForActivityToUpdate.name}
              onChange={(value) =>
                handleSetDetailsForActivityToUpdate(value, "name")
              }
            />
          </NameInputContainer>
          <DescriptionInputContainer>
            <h2>Descrição</h2>
            <input
              type="text"
              value={detailsForActivityToUpdate.description}
              onChange={(value) =>
                handleSetDetailsForActivityToUpdate(value, "description")
              }
            />
          </DescriptionInputContainer>
          <SendActivityEditedInputContainer
            onClick={() => handleEditActivity()}
          >
            Enviar
          </SendActivityEditedInputContainer>
        </EditActivityContentContainer>
      )}
    </EditActivityContainer>
  );
}
