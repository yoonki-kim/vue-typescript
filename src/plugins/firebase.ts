import { initializeApp } from 'firebase/app'
import firebaseConfig from '../../firebaseConfig'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getAuth, connectAuthEmulator } from 'firebase/auth'

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
connectFirestoreEmulator(db, 'localhost', 5002)

export const auth = getAuth()
connectAuthEmulator(auth, 'http://localhost:9099')
