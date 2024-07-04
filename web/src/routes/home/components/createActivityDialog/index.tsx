import * as Dialog from "@radix-ui/react-dialog";
import {
  Close,
  Content,
  CreateActivityDialogContainer,
  Overlay,
} from "../../../../styles/pages/home/components/topBar/styles";

export default function CreateActivityDialog() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CreateActivityDialogContainer>
          <Close>X</Close>
        </CreateActivityDialogContainer>
      </Content>
    </Dialog.Portal>
  );
}
