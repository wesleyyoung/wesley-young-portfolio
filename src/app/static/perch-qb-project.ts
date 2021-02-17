import {Project} from '../interface';

export const perchQbProject: Project = {
    title: 'Perch Query Builder',
    subtitle: 'NestJS-GraphQL Library',
    cardImage: '/assets/imgs/perch-card.png',
    avatarClass: 'perch-icon',
    cardImageAlt: 'Photo of the Perch Query Builder repository',
    description: 'In order to harness the true potential of NestJS, GraphQL, and TypeORM: I wrote a library' +
        ' which can take an incoming GraphQL query and transform it into a TypeORM query, in addition' +
        ' to providing pain-free pagination and searching.',
    links: [
        {
            name: 'Source Code',
            color: 'primary',
            icon: 'source',
            ariaLabel: 'View Perch Query Builder code repository',
            linkTo: 'https://github.com/wesleyyoung/perch-query-builder',
        }
    ]
};
