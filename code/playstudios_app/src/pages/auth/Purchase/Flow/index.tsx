//Create page component panel purchase with props children
//Compare this snippet from code\playstudios_app\src\pages\auth\Purchase\Flow\index.tsx:

import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH_AUTH } from 'src/router/paths';
import AditionalInformationFlow from './aditional-information';
import InitPurchaseFlow from './initial';


//component props callback close 
export default function PurchaseFlow({ onClose }: { onClose?: () => void }) {
    //define state with useState
    const [conditions, setConditions] = useState(false);
    const [step, setStep] = useState(1);

    //navigate react router dom
    const navigate = useNavigate();

    //useCallback function buttons ok and cancel
    const handleStep1Ok = useCallback(() => {
        setStep(2)
    }, []);

    const handleStep1Cancel = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const handleStep2Ok = useCallback(() => {
        navigate(PATH_AUTH.purchaseSuccess);
    }, []);

    const handleStep2Cancel = useCallback(() => {
        setStep(1)
    }, []);

    const handleClose = useCallback(() => {
        //if onClose is true call onClose
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    return (
        <>
            {step === 1 && <InitPurchaseFlow onOk={() => handleStep1Ok()} onCancel={() => handleStep1Cancel()} onClose={() => handleClose()} />}
            {step === 2 && <AditionalInformationFlow onOk={() => handleStep2Ok()} onCancel={() => handleStep2Cancel()} onClose={() => handleClose()} />}
        </>
    )
}