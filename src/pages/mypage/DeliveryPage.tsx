import { BSTypeState, bottomSheetState } from '@/store/challengeState';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import DeliveryList from '@/components/challenge/delivery/DeliveryList';
import Background from '@/components/Background';
import { useNavigate } from 'react-router-dom';

const DeliveryPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useRecoilState(bottomSheetState);
  const [valueBSType, setValueBSType] = useRecoilState(BSTypeState);

  useEffect(() => {
    setValueBSType('DeliveryList');
    setIsOpen(true);
    // console.log('11', valueBSType);
  }, []);
  useEffect(() => {
    // console.log('22', valueBSType);
    if (isOpen && valueBSType == 'DeliveryBS') {
      setIsOpen(false);
      navigate('/mypage');
    }
  }, [valueBSType]);
  return (
    <div>
      <Background>
        <DeliveryList />
      </Background>
    </div>
  );
};

export default DeliveryPage;
