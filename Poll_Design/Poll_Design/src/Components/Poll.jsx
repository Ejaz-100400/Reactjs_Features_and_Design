import React from "react"
import { Button, Card } from 'react-bootstrap';

export default function Poll(){
    const options = ['Option A', 'Option B', 'Option C', 'Option D']
    const [votes,setVotes]=React.useState(Array(options.length).fill(0))

    const handleVote=(index)=>{
        const newVotes = [...votes];
        newVotes[index]++;
        setVotes(newVotes);
    }

    return(
        <Card style={{width:'300px',margin:'20px'}}>
            <Card.Body>
                <Card.Title>React Poll Application</Card.Title>
                <ul>
                    {options.map((option, index) => (
                    <li key={index} className="list-unstyled">
                        {option}: {votes[index]}
                        <Button variant="primary" onClick={() => handleVote(index)}>
                            Vote
                        </Button>
                    </li>
                    ))}
                </ul>
            </Card.Body>
        </Card>
    )
}