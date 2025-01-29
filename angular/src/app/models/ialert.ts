export interface IAlert {
    title: string;
    message: string;
    type: 'success' | 'error' | 'info' | 'warning' | 'white';
    duration?: number;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}