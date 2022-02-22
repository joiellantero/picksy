import Input from "./Input";
import {useRecoilState, useResetRecoilState} from "recoil";
import {winnerMessageState} from "../shared/globalState";

const WinnerMessage = () => {
  const [winnerMessage, setWinnerMessage] = useRecoilState(winnerMessageState);
  const resetWinnerMessage = useResetRecoilState(winnerMessageState);

  return(
    <form>
      <Input
        id={'winnerMessage'}
        label={'Winner Prompt Message'}
        value={winnerMessage}
        onChange={(e) => setWinnerMessage(e)}
        onClear={() => resetWinnerMessage()}
      />
    </form>
  )
}

export default WinnerMessage;