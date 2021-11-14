import Skeleton from 'react-loading-skeleton';
import { useContext } from 'react';
import LoggedInUserContext from '../context/logged-in-user';
import usePhotos from '../hooks/use-photos';
import Post from './post'

export default function Timeline() {
    const { user } = useContext(LoggedInUserContext);
    const { photos } = usePhotos(user);

    
    return (
        <div className="container col-span-2">
            {!photos ? (
                <Skeleton count={4} width={640} height={400} className="mb-5" />
            ) : (
                photos.map((content) => <Post key={content.docId} content={content} />)
            )}
        </div> 
    );
}