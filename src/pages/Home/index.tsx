import { HandPalm, Play } from "phosphor-react";
import { PlayButtonContainer, StopCountdownButtonContainer, HomeContainer } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod';
import { useContext } from "react";
import { NewCycleForm } from "./NewCycleForm";
import { Countdown } from "./Countdown";
import { FormProvider } from "react-hook-form";
import { CyclesContext } from "../../contexts/CyclesContext";



type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa que você irá realizar'),
  minutesAmount: zod.number().min(5, 'Informe um valor entre 5 e 60').max(60, 'Informe um valor entre 5 e 60')
});

export function Home() {
  const { createNewCycle, interruptCurrentCycle, activeCycle } = useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  });

  const { handleSubmit,  reset,  watch } = newCycleForm;
  
  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }



  const task = watch("task")
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">

        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
        {activeCycle ? (
          <StopCountdownButtonContainer onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButtonContainer>
        ) : (<PlayButtonContainer disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </PlayButtonContainer>)}
      </form>
    </HomeContainer>
  )
}