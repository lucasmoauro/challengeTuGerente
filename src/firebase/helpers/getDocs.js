import {
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	where,
} from "firebase/firestore";
import { db } from "../firebase";

export const getAllDocs = async ({ fieldSelected, dropdownInput }) => {
	const querySearch = query(
		collection(db, "persona"),
		where(fieldSelected, "==", dropdownInput)
	);

	const querySnapshot = await getDocs(querySearch);

	const arr = [];

	querySnapshot.forEach((doc) => arr.push(doc.data()));

	return arr;
};

export const getQueryDoc = async (query) => {
	const docRef = doc(db, "persona", query.nombre);

	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		console.log(docSnap.data());
	} else {
		console.log("no data");
	}
};
