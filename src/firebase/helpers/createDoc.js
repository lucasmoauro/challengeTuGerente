import { doc, setDoc } from "firebase/firestore";
import { uid } from "uid";
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

	const response = await setDoc(doc(db, "persona", uid(16)), newDoc);

	return response;
};
