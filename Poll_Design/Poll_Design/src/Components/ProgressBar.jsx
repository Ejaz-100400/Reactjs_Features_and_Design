// src/components/ProgressComponent.js
import React, { useState } from 'react';
import { ProgressBar, Button } from 'react-bootstrap';

const ProgressComponent = () => {
  const [progress, setProgress] = useState(0);

  const handleButtonClick = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };

  return (
    <div>
      <ProgressBar now={progress} label={`${progress}%`} />
      <Button variant="primary" onClick={handleButtonClick}>
        Increase Progress
      </Button>
    </div>
  );
};

export default ProgressComponent;
