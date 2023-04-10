import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getThunk } from '../../../modules/getDataReducer';
import AdmPrdAmountSetMini from './AdmPrdAmountSetMini';

const AdmPrdAmountSet = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getThunk())
  },[dispatch])
  let width=window.innerWidth;
  return (
    <div className='DataDiv'>
      {width<1024?<pre>모바일 환경에서는 수량을 설정할 수 없습니다.</pre>:null}
      <AdmPrdAmountSetMini/>
    </div>
  );
};

export default AdmPrdAmountSet;