import { useState, useEffect } from 'react';
import { getPhotos } from '../services/firebase';

export default function usePhotos(user) {
    const [photos, setPhotos] = useState(null);
    

    useEffect(() => {
        async function getTimelinePhotos() {
            // czy uzutkownik na pewno kogos obserwuje?
            if (user?.following?.length > 0) {
                const followedUserPhotos = await getPhotos(user.userId, user.following);

                // sortuj wyswietlanie zdjec po dacie dodania
                followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
                setPhotos(followedUserPhotos);
            }
        }

        getTimelinePhotos();
    }, [user?.userId, user?.following]);

    return { photos };
}