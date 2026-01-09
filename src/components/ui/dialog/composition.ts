import * as React from "react";

interface DialogCompositionContextType {
  isComposing: () => boolean;
  setComposing: (composing: boolean) => void;
  justEndedComposing: () => boolean;
  markCompositionEnd: () => void;
}

export const DialogCompositionContext = 
  React.createContext<DialogCompositionContextType | null>(null);

export const useDialogComposition = () => {
  const context = React.useContext(DialogCompositionContext);
  if (!context) {
    throw new Error(
      "useDialogComposition must be used within a Dialog component"
    );
  }
  return context;
};