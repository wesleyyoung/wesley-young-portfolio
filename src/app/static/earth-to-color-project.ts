import {Project} from '../interface';

export const earthToColorProject: Project = {
    title: 'Earth To Color',
    subtitle: 'Android App',
    cardImage: '/assets/imgs/earth2color.png',
    avatarClass: 'e2c-icon',
    cardImageAlt: 'Photo of the Earth to Color in the app store',
    description: 'Earth To Color is an Android application I wrote which ' +
        'allows users to get the hex code and estimated name of any color they point their phone at. ' +
        'It also calculates the complimentary, split complimentary, and triadic colors of the color ' +
        'that they capture.',
    links: [
        {
            name: 'Google Play Store',
            color: 'google-play',
            ariaLabel: 'View app on Google Play',
            linkTo: 'https://play.google.com/store/apps/details?id=com.welsey.photopalette',
        }
    ],
};
