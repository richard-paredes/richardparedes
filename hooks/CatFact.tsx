import { useEffect, useState } from 'react';
import { CatFactApiResponse } from '../types/CatFactApiResponse';

export const useCatFact = () => {
  const [isFetching, setFetching] = useState(false);
  const [catFact, setCatFact] = useState('');
  useEffect(() => {
    if (catFact) return;
    setFetching(true);
    fetch('https://cat-fact.herokuapp.com/facts')
      .then(res => res.json())
      .then((data: CatFactApiResponse[]) => {
        const verifiedFact = data.find(fact =>fact.status.verified);
        if (!data) return;
        setCatFact(verifiedFact.text);
      })
      .catch(err => { })
      .finally(() => setFetching(false));
  }, []);
  
  return { isFetching, catFact };
}