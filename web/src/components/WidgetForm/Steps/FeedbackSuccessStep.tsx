import { CloseButton } from "../../CloseButton";
import success from "../../../assets/success.svg"

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequest: () => void;
}

export function FeedbackSuccessStep({ onFeedbackRestartRequest }: FeedbackSuccessStepProps ){
  return(
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[340px]">
        <img src={success} alt="Icone verde indicando sucesso" />
        <span className="text-xl mt-2">
          Agradecemos o feedback!
        </span>

        <button
          type="button"
          onClick={onFeedbackRestartRequest}
          className="button-feedback"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  )
}