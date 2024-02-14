import Button from 'react-bootstrap/Button';


function Card(props) {
    const { heder, Des, Fotter } = props;
    return <div className="cardMain">
        <h2 className="CardHadder">{heder}</h2>
        <p className="CardDescription">{Des}</p>
        <h4 className="CardFotter">{Fotter}</h4>
        <Button variant="danger">Danger</Button>{' '}
    </div>
}
export default Card;