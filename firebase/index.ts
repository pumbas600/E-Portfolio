import { initializeApp } from 'firebase/app';
import { collection, getCountFromServer, getFirestore, query, where } from 'firebase/firestore';

const app = initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREABSE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

const db = getFirestore(app);

const OneWeekMs = 7 * 24 * 60 * 60 * 1000;
const OneWeekAgo = new Date(Date.now() - OneWeekMs);

export async function getTotalApiCalls(): Promise<number> {
	const totalCallsQuery = collection(db, 'github_contribution_metrics');
	const response = await getCountFromServer(totalCallsQuery);
	return response.data().count;
}

export async function getPastWeekApiCalls(): Promise<number> {
	const pastWeekCallsQuery = query(collection(db, 'github_contribution_metrics'), where('date', '>=', OneWeekAgo));
	const response = await getCountFromServer(pastWeekCallsQuery);
	return response.data().count;
}
