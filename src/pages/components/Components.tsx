import AlertMessage from "../../components/AlertMessage/AlertMessage";
import ButtonColorPick from "../../components/ButtonColorPick/ButtonColorPick";
import DangerInput from "../../components/DangerInput/DangerInput";

const Components: React.FC = () => (
    <div>
      <DangerInput />
      <AlertMessage />
      <ButtonColorPick />
    </div>
  );
  
  export default Components;