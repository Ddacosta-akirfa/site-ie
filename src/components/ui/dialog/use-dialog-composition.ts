// @/components/ui/dialog/use-dialog-composition.ts
export const useDialogComposition = () => {
  const justEndedComposing = () => {
    // sua lógica aqui
    return false;
  };

  return {
    justEndedComposing,
    // outras funções...
  };
};