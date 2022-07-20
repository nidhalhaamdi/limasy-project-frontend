import { useMemo } from 'react';
import Chart from '../components/chart/chart';
import { Appear, Paragraph } from "arwes";

const Current = ({ entered, currents }) => {
  const data = useMemo(() => {
    return currents;
  }, [currents]);

  return <Appear id="current" animate show={entered}>
    <Paragraph>This is the current value that we get from our STM32-NUCLEO device.</Paragraph>
    <Paragraph>It's automatically generated everytime we click on this button :</Paragraph>
    <Chart title="Last 20 current values" aspect={2 / 1} data={data} />
  </Appear>
};

export default Current;