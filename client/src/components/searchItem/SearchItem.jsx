import "./searchItem.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const SearchItem = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Joe Garage</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">1 Elizabeth Street, Melbourne</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Book</Card.Link>
                <Button variant="primary">Daily from $6</Button>
            </Card.Body>
    </Card>
    );
}

export default SearchItem;