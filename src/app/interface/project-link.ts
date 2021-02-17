export interface ProjectLink {
    name: string;
    linkTo: string;
    color: 'primary' | 'accent' | 'google-play';
    icon?: string;
    ariaLabel: string;
}
