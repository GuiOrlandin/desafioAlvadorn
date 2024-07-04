import * as Dialog from "@radix-ui/react-dialog";
import {
  ButtonOnBarContainer,
  ButtonsOnBarContainer,
  RedirectButtonsOnBarContainer,
  TopBarContainer,
} from "../../../../styles/pages/home/components/topBar/styles";
import CreateActivityDialog from "../createActivityDialog";

interface TopBarProps {
  page: string;
}

export default function TopBar({ page }: TopBarProps) {
  return (
    <TopBarContainer>
      {page === "home" ? (
        <ButtonsOnBarContainer>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <ButtonOnBarContainer>Criar</ButtonOnBarContainer>
            </Dialog.Trigger>
            <CreateActivityDialog />
          </Dialog.Root>
        </ButtonsOnBarContainer>
      ) : (
        <ButtonsOnBarContainer>
          <RedirectButtonsOnBarContainer>
            <a href="/news">Home</a>
          </RedirectButtonsOnBarContainer>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <ButtonOnBarContainer>Criar</ButtonOnBarContainer>
            </Dialog.Trigger>
            <CreateActivityDialog />
          </Dialog.Root>
        </ButtonsOnBarContainer>
      )}
    </TopBarContainer>
  );
}
