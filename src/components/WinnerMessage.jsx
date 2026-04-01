import TextField from "./Input/TextField";
import {useAtom} from "jotai";
import {winnerMessageState} from "../shared/globalState";

const WinnerMessage = () => {
  const [winnerMessage, setWinnerMessage] = useAtom(winnerMessageState);
  const resetWinnerMessage = () => setWinnerMessage([]);

  return (
    <form>
      <TextField
        id='winnerMessage'
        label='Winner Prompt'
        placeholder='e.g. 🎉 And the winner is...'
        value={winnerMessage}
        onChange={(e) => setWinnerMessage(e)}
        onClear={() => resetWinnerMessage()}
      />
    </form>
  );
};

export default WinnerMessage;
