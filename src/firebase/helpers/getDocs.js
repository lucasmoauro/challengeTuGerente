import {
	collection,
	getDocs,
	limit,
	orderBy,
	query,
	startAfter,
} from "firebase/firestore";
import { db } from "../firebase";

let lastDocument = null;

export const getAllDocs = async (fieldSelected) => {
	const querySearch = query(
		collection(db, "persona"),
		limit(20),
		orderBy(fieldSelected),
		startAfter(lastDocument)
	);

	const querySnapshot = await getDocs(querySearch);

	const arr = [];

	querySnapshot.forEach((doc) => {
		arr.push(doc.data());
	});

	lastDocument = querySnapshot.docs[querySnapshot.docs.length - 1];

	return arr;
};

export const nextDocuments = async (fieldSelected) => {
	try {
		const nextPagination = await query(
			collection(db, "persona"),
			orderBy(fieldSelected),
			startAfter(lastDocument),
			limit(20)
		);

		const querySnapshot = await getDocs(nextPagination);

		const arr = [];

		querySnapshot.forEach((doc) => {
			arr.push(doc.data());
		});

		lastDocument = querySnapshot.docs[querySnapshot.docs.length - 1];

		return arr;
	} catch (error) {
		return;
	}
};
