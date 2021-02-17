import {ProjectLink} from './project-link';

export interface Project {
    title: string;
    subtitle: string;
    avatarClass: string;
    cardImage: string;
    cardImageAlt: string;
    description: string;
    links: ProjectLink[];
}
