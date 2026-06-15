
// items do projeto
export interface ProjectItem {
    title: string;
    category: string;
    tools: string[];
    type: string;
    images: number;
    accent: string;
}

// items do timeline
export interface TimeLineProjectItem {
    period: string;
    cargo: string;
    empresa: string;
    descricao?: string;
    destaque?: boolean;
}