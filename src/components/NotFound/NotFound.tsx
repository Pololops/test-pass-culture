import { Link } from 'react-router-dom';

export default function composant() {
	return (
		<>
			<p>Erreur 404 : page introuvable</p>
			<Link to="/">Retournez à l'accueil</Link>
		</>
	);
}
