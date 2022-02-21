import Input from "./Input";
import {useRecoilState, useResetRecoilState} from "recoil";
import {winnerMessageState} from "../shared/globalState";
import ButtonSecondary from "./Buttons/ButtonsSecondary";

const WinnerMessage = () => {
  const [winnerMessage, setWinnerMessage] = useRecoilState(winnerMessageState);
  const resetWinnerMessage = useResetRecoilState(winnerMessageState);

  return(
    <>
      <Input
        id={'winnerMessage'}
        label={'Winner Prompt Message'}
        value={winnerMessage}
        onChange={(e) => setWinnerMessage(e)}
      />
      <ButtonSecondary
        onClick={() => resetWinnerMessage()}
        value={'Clear Message'}
      />
    </>
  )
}

export default WinnerMessage;