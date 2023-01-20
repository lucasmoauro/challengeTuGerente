import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const createDoc = async ({
	nombre,
	razon_social,
	nit,
	telefono,
	codigo,
}) => {
	const newDoc = {
		nombre,
		razon_social,
		nit,
		telefono,
		codigo,
	};

	const response = await setDoc(doc(db, "persona"), newDoc);

	return response;
};
