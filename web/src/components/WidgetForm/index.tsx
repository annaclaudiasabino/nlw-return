import { useState } from "react";
import { CloseButton } from "../CloseButton";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";


export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lampada',
    },
  },
  OTHER: {
   title: 'Outro',
   image: {
    source: thoughtImageUrl,
    alt: 'Imagem de um balão de pensamento',
  },
  },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [ feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [ feedbackSent, setFeedbackSent ] = useState(false);


  function handleRestartFeedback(){
    setFeedbackSent(false);
    setFeedbackType(null);
  }


  return(
    <div className='box-form'>
      

      { feedbackSent ? (
          <FeedbackSuccessStep onFeedbackRestartRequest={handleRestartFeedback} />
        ) : (
          <>
          {! feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep 
          feedbackType={feedbackType}
          onFeedbackRestartRequest={handleRestartFeedback}
          onFeedbackSent={() => setFeedbackSent(true)}
        />
      )} 
          </>
        )
      }

      <footer className="text-xs text-stone-400">
        Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a> 
      </footer>
    </div>
  )
}