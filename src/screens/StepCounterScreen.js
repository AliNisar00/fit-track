import { useEffect, useState } from 'react';
import { StepCounter } from 'react-native-sensors';

const useStepCounter = () => {
  const [stepCount, setStepCount] = useState(0);

  useEffect(() => {
    const subscription = new StepCounter({
      updateInterval: 1000, // Set the update interval as needed
    });

    subscription.start();

    const subscriptionHandler = subscription.subscribe(({ steps }) => {
      setStepCount(steps);
    });

    return () => {
      subscriptionHandler.unsubscribe();
      subscription.stop();
    };
  }, []);

  return stepCount;
};

export default useStepCounter;
