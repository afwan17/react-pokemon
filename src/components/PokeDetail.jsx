import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../styles/pokedetail.css'

export default function PokeDetail() {
    const params = useParams();
    const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
    const [pokeDetail, setPokeDetail] = useState([])
    const {id, type, name} = pokeDetail;

    useEffect(() => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
        .then((res) => {
            setLoading(false)
            setPokeDetail(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            setLoading(false);
            console.log(err);
            setError(true);
        });
    },[params.id])

    const imgP = pokeDetail.sprites ? pokeDetail.sprites.front_default : ''
    const abilities = pokeDetail.abilities? pokeDetail.abilities.map((a,i) => {
        return (
            <>
                <ul key={i}>
                    <li style={{listStyle: 'none'}}>{a.ability.name} ➡ {a.slot}</li>
                </ul>
            </>
        )
    }): ''
    // const abilities = pokeDetail.abilities

    console.log(abilities)
    return(
        <>
            <section>
            {!loading && error && <p>error</p>}
            {loading && (
						<h3>Loading...</h3>
					)}
            {!loading && !error && pokeDetail && (
                <div className="card-wrapper">
                <div className='card-detail'>
                    <h1>Pokemon Detail</h1>
                    <img src={imgP} alt={name} title={name} />
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Ability:</strong> {abilities}</p>
                    <Link to={`/`}>Back</Link>
                </div>
                </div>
            )}
            </section>
        </>
    )
}