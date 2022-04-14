import Formulario from "./Formulario";
import Alerta from "./Alerta";
import useLetras from "../hooks/useLetras";
import Letras from "./Letras";

const AppLetras = () => {
	const {alerta, letra, cargando} = useLetras();

	return (
		<>
			<header>Búsqueda de letras de Caciónes</header>

			<Formulario />

			<main>
				{alerta ? (
					<Alerta>{alerta}</Alerta>
				) : letra ? (
					<Letras />
				) : cargando ? (
					"Cargando"
				) : (
					<p className="text-center">Busca letras de tus artistas favoritos</p>
				)}
			</main>
		</>
	);
};

export default AppLetras;
