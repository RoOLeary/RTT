import React, { useEffect, useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

import '../App.css';

import { TicketContextProvider } from '../contexts/TicketContext';
import { Loader } from './icons';
import Tabs from './Tabs';

import '../tailwind.output.css';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
    fill: #e9e9e9;
  }
  50% {
    fill: #c3c3c3;
  }
  100% {
    transform: rotate(360deg);
    fill: #e9e9e9;
  }
`;

const LoaderIcon = styled(Loader)`
  display: block;
  margin: 0 auto;
  width: 48px;
  animation: ${spin} 1s infinite ease-in-out;
`;

const View = styled(motion.div)`
  background: #fff;
  color: #000;
  font-size: 16px;
  line-height: 1.5;

  & strong {
    display: block;
  }

  & * {
    box-sizing: border-box;
  }
`;

const Button = styled.button`
  background: #fff;
  border: 1px solid #000;
  border-radius: 24px;
  padding: 8px 16px;
`;

const animateProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.25 },
};


const endpoint = '//next.local.tnw.dev/next-api/tickets.json';

function App() {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(() => {
      (async () => {
        try {
          setLoading(true)
          const response = await fetch(endpoint);
          const payload = await response.json();
          setData(payload);
          setLoading(false)
          } catch (e) {
          console.warn(e);
          // what errors?
        } 
      })();
    }, [setData, setLoading]);
  
  useEffect(() => fetchData(), [fetchData]);

  return (
    <div className="App">
      {loading ? <LoaderIcon /> :
      <TicketContextProvider data={data} >
          <Tabs color="red" />
      </TicketContextProvider>
      }
    </div>
  );
}

export default App;
