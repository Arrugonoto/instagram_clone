import { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/firebase';

export default function useAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
        // jesli uzytkownik jest zalogowany lub nie podejmij akcje
      if (authUser) {
        // zalogowany uzytkownik, dane moga byc przechowywane lokalnie na temat zalogowanego uzytkownika
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        // brak zalogowanego uzytkownika na podstawie identyfikatora, wyczysc pamiec lokalna na temat zalogowanego uzytkownika
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => listener();
  }, [firebase]);

  return { user };
}