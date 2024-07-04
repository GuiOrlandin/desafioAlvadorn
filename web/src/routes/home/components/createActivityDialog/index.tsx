import * as Dialog from "@radix-ui/react-dialog";
import {
  Close,
  Content,
  CreateActivityDialogContainer,
  Overlay,
} from "../../../../styles/pages/home/components/topBar/styles";

import { ChangeEvent, useState, useEffect } from "react";

import { NameAndDescriptionContainer } from "../../../../styles/pages/activityInfo/styles";
import {
  DescriptionInputContainer,
  NameInputContainer,
  SendActivityEditedInputContainer,
} from "../../../../styles/pages/editActivity/styles";
import {
  ActivityRegisterDetails,
  useCreateActivityMutate,
} from "../../../../hooks/createActivity";

export default function CreateActivityDialog() {
  const [detailsForCreateActivity, setDetailsForCreateActivity] =
    useState<ActivityRegisterDetails>({
      id: "",
      description: "",
      name: "",
    });

  const { mutate, isSuccess } = useCreateActivityMutate();

  function handleSetDetailsForCreateActivity(
    event: ChangeEvent<HTMLInputElement>,
    inputTitle: string
  ) {
    const { value } = event.target;
    setDetailsForCreateActivity((prevDetails) => ({
      ...prevDetails!,
      [inputTitle]: value,
    }));
  }

  function handleCreateActivity() {
    mutate(detailsForCreateActivity);
  }

  useEffect(() => {
    if (isSuccess) {
      window.location.href = "/";
    }
  }, [isSuccess]);

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CreateActivityDialogContainer>
          <Close>X</Close>
          <NameAndDescriptionContainer>
            <NameInputContainer>
              <h2>Nome</h2>
              <input
                type="text"
                onChange={(value) =>
                  handleSetDetailsForCreateActivity(value, "name")
                }
              />
            </NameInputContainer>
            <DescriptionInputContainer>
              <h2>Descrição</h2>
              <input
                type="text"
                onChange={(value) =>
                  handleSetDetailsForCreateActivity(value, "description")
                }
              />
            </DescriptionInputContainer>
          </NameAndDescriptionContainer>
          <SendActivityEditedInputContainer
            onClick={() => handleCreateActivity()}
          >
            Criar
          </SendActivityEditedInputContainer>
        </CreateActivityDialogContainer>
      </Content>
    </Dialog.Portal>
  );
}
