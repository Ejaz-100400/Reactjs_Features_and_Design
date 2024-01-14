// src/components/PollRadio.js
import React, { useState } from 'react';
import { Card, Form, Button, ProgressBar } from 'react-bootstrap';

const PollRadio = () => {
  const options = ['HTML', 'CSS', 'JS','Python'];
  const [selectedOption, setSelectedOption] = useState(null);
  const [votes, setVotes] = useState(Array(options.length).fill(0));

  const handleVote = (e) => {
    e.preventDefault();
    if (selectedOption !== null) {
      const newVotes = [...votes];
      newVotes[selectedOption]++;
      setVotes(newVotes);
      setSelectedOption(null);
    } else {
      console.log('Please select an option before voting.');
    }
  };

  const calculatePercentage = (index) => {
    const totalVotes = votes.reduce((total, vote) => total + vote, 0);
    return totalVotes === 0 ? 0 : ((votes[index] / totalVotes) * 100).toFixed(2);
  };

  return (
    <Card style={{ margin: '20px', width: '400px' }}>
      <Card.Body>
        <Card.Title style={{ fontWeight: '700' }}>Poll UI Design</Card.Title>
        <Form className='mt-1'>
          {options.map((option, index) => (
            <div
              className={`poll-item p-2 mt-3 ${selectedOption === index ? 'selected' : ''}`}
              key={index}
              onClick={() => setSelectedOption(index)}
            >
              <div className='d-flex justify-content-between'>
                <Form.Check
                  type="radio"
                  label={option}
                  name="pollOption"
                  id={`option-${index}`}
                  onChange={() => setSelectedOption(index)}
                  checked={selectedOption === index}
                />
                <span>{`${calculatePercentage(index)}%`}</span>
              </div>
              <div key={index}>
                <ProgressBar now={calculatePercentage(index)} />
              </div>
            </div>
          ))}
        </Form>
        <Button variant="" onClick={handleVote}>
          Vote
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PollRadio;
