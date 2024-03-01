export function createRoot(htmlElementTemp : HTMLElement) {
    return htmlElementTemp;
}

export interface HTMLElement {
    render(application: Object): void;
}