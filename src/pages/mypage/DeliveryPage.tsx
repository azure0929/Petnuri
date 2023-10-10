import { BSTypeState, bottomSheetState } from "@/store/challengeState";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import DeliveryReg from "@/components/challenge/delivery/DeliveryReg";
import Background from "@/components/Background";
import { useNavigate } from "react-router-dom";
import DeliveryList from "@/components/challenge/delivery/DeliveryList";
import DeliveryUpdate from "@/components/challenge/delivery/DeliveryUpdate";
import { useRecoilValue } from "recoil";

const DeliveryPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useRecoilState(bottomSheetState);
  const [valueBSType, setValueBSType] = useRecoilState(BSTypeState);
  const BSType = useRecoilValue(BSTypeState);

  useEffect(() => {
    setValueBSType("DeliveryList");
    setIsOpen(true);
  }, []);
  useEffect(() => {
    if (isOpen && valueBSType == "DeliveryBS") {
      setIsOpen(false);
      navigate("/mypage");
    }
  }, [valueBSType]);

  return (
    <div>
      <Background>
        {BSType === "DeliveryReg" && <DeliveryReg />}
        {BSType === "DeliveryList" && <DeliveryList />}
        {BSType === "DeliveryUpdate" && <DeliveryUpdate />}
      </Background>
    </div>
  );
};

export default DeliveryPage;
