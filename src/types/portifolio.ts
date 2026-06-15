
// items do projeto
export interface ProjectItem {
    title: string;
    category: string;
    tools: string[];
    type: string;
    images: number;
    accent: string;
    description?: string;
    details?: string;
}

// items do timeline
export interface TimeLineProjectItem {
    period: string;
    cargo: string;
    empresa: string;
    descricao?: string;
    destaque?: boolean;
}

// items do viewer3d
export interface Viewer3dItem {
    name: string;
    color: number;
    wallColor: number;
    floorColor: number;
    width: number;
    depth: number;
    height: number;
    description: string;
    modelUrl?: string; // Opcional: Caminho para o arquivo 3D (.gltf/.glb) vindo do Revit/SketchUp
}