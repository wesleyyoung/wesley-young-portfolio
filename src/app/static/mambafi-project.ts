import {Project} from '../interface';

export const mambafiProject: Project = {
    title: 'MambaFi',
    subtitle: 'Windows Application',
    cardImage: '/assets/imgs/mambafi-card.png',
    avatarClass: 'mambafi-icon',
    cardImageAlt: 'Photo of the Mambafi Application',
    description: 'MambaFi is an Electron application I wrote which' +
        ' allows users to manage their wireless network profiles in Windows 10 without needing to open' +
        ' the command prompt. Its UI is written in Angular 8 using Angular Material.',
    links: [
        {
            name: 'Website',
            color: 'accent',
            icon: 'language',
            ariaLabel: 'View MambaFi website',
            linkTo: 'https://mambafi.com/',
        }, {
            name: 'Source Code',
            color: 'primary',
            icon: 'source',
            ariaLabel: 'View MambaFi code repository',
            linkTo: 'https://github.com/wesleyyoung/MambaFi',
        }
    ],
};
