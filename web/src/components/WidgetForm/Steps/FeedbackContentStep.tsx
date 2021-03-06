import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { api } from "../../../lib/api";
import { CloseButton } from "../../CloseButton";
import { Loading } from "../Loading";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequest: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
   feedbackType, 
   onFeedbackRestartRequest,
   onFeedbackSent,
  }: FeedbackContentStepProps) {
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState('');
    const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const feedbackTypeInfo = feedbackTypes[feedbackType]; 

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    setIsSendingFeedback(true);
    // console.log({
    //   screenshot,
    //   comment,
    // })
    
    await api.post("/feedbacks", {
      type: feedbackType,
      comment,
      screenshot,
    });

    setIsSendingFeedback(false);
    onFeedbackSent();
    
  }

  return(
    <>
    <header>
      <button 
        type="button" 
        className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        onClick={onFeedbackRestartRequest}
      >
        <ArrowLeft weight="bold" className="w-4 h-4"/>
      </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img
          src={feedbackTypeInfo.image.source} 
          alt={feedbackTypeInfo.image.alt}
          className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
    </header>
    
    <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
      <textarea
        className="textarea-form"
        placeholder="Conte com detalhes o que está acontecendo"
        onChange={event => setComment(event.target.value)}
        />

      <footer className="flex gap-2 mt-2">
        <ScreenshotButton 
         screenshot={screenshot}
         onScreenshotTook={setScreenshot}
        />

        <button
          type="submit"
          disabled={comment.length === 0 || isSendingFeedback }
          className="button-submit disabled:opacity-50 hover:bg-brand-500"
        >
          {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
        </button>
      </footer>
    </form>
      </>
  )
}