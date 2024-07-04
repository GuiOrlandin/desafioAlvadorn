import * as Dialog from "@radix-ui/react-dialog";
import {
  ButtonOnBarContainer,
  ButtonsOnBarContainer,
  RedirectButtonsOnBarContainer,
  TopBarContainer,
} from "../../../../styles/pages/home/components/topBar/styles";
import CreateActivityDialog from "../createActivityDialog";

import { useNavigate } from "react-router-dom";

interface TopBarProps {
  page: string;
}

export default function TopBar({ page }: TopBarProps) {
  const navigate = useNavigate();
  return (
    <TopBarContainer>
      {page === "home" ? (
        <ButtonsOnBarContainer>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <ButtonOnBarContainer>Criar Atividade</ButtonOnBarContainer>
            </Dialog.Trigger>
            <CreateActivityDialog />
          </Dialog.Root>
        </ButtonsOnBarContainer>
      ) : (
        <ButtonsOnBarContainer>
          <RedirectButtonsOnBarContainer onClick={() => navigate("/")}>
            Home
          </RedirectButtonsOnBarContainer>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <ButtonOnBarContainer>Criar Atividade</ButtonOnBarContainer>
            </Dialog.Trigger>
            <CreateActivityDialog />
          </Dialog.Root>
        </ButtonsOnBarContainer>
      )}
    </TopBarContainer>
  );
}
