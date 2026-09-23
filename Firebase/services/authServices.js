import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../config/firebase';


export async function Cadastrar(email, senha) {
    return await createUserWithEmailAndPassword(
        auth, email, senha
    );
}

export async function Login(email, senha) {
    return await signInWithEmailAndPassword(
        auth, email, senha
    );
}

export async function sair() {
    return await signOut(auth);
    
}