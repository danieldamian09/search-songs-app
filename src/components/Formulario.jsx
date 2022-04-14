import {useState} from "react";
import useLetras from "../hooks/useLetras";

const Formulario = () => {
	const [busqueda, setBusqueda] = useState({
		artista: "",
		cancion: "",
	});

	const {setAlerta, busquedaLetra} = useLetras();

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validacion
		if (Object.values(busqueda).includes("")) {
			setAlerta("Coloca nombre de Artista y Canción");
			return;
		}

		busquedaLetra(busqueda);
		setAlerta("")
	};

	return (
		<form onSubmit={handleSubmit}>
			<legend>Busca por artista y canción</legend>
			<div className="form-grid">
				<div>
					<label htmlFor="">Artista</label>
					<input
						type="text"
						value={busqueda.artista}
						name="artista"
						placeholder="Nombre de Artista"
						onChange={(e) =>
							setBusqueda({
								...busqueda,
								[e.target.name]: e.target.value,
							})
						}
					/>
				</div>
				<div>
					<label htmlFor="">Canción</label>
					<input
						type="text"
						value={busqueda.cancion}
						name="cancion"
						placeholder="Nombre de Canción"
						onChange={(e) =>
							setBusqueda({
								...busqueda,
								[e.target.name]: e.target.value,
							})
						}
					/>
				</div>
				<input type="submit" value="Buscar" />
			</div>
		</form>
	);
};

export default Formulario;
