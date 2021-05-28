import React, { useEffect, useState } from 'react';
import { CatFactApiResponse } from '../types/CatFactApiResponse';

export const CatFact: React.FC = () => {
  const [fetching, setFetching] = useState(false);
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
  
  if (fetching) return <div className="w-4 h-4 animate-pulse rounded-full bg-grayscaled"></div>;
  return catFact ? <p className="my-2 text-xs">pssst did you know: {catFact}</p> : null;
}