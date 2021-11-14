import {useEffect} from 'react';
import Header from '../components/header';

export default function NotFoiund() {
    useEffect(() =>{
        document.title = 'Page Not Found';
    }, []);
    

    return (
        <div className="bg-gray-background">
            <Header />
            <div className="flex flex-col justify-center  mx-auto max-w-screen-xl">
                <p className="text-center text-2xl mt-8 text-green-medium">Ooops... looks like we got lost trying to find route 404..</p>
                <div className="flex justify-center w-full">
                    <img src="/panic-404-not-found.gif" alt="cute panicking bears running around" />
                </div>
            </div>
        </div>
    );
}