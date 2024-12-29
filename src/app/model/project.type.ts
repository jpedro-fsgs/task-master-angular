export type ProjectJson = {
    id: number;
    nome: string;
    descricao: string;
    link: string;
    criacao: string; // example: "2024-07-02T16:15:47.725993Z"
    prazo: string; // example: "2050-07-02"
    is_concluido: boolean;
    usuario: string;
    usuario_id: number;
};

export class Project {
    id: number;
    nome: string;
    descricao: string;
    link: string;
    criacao: Date;
    prazo: Date;
    is_concluido: boolean;
    usuario: string;
    usuario_id: number;

    constructor(data: ProjectJson) {
        this.id = data.id;
        this.nome = data.nome;
        this.descricao = data.descricao;
        this.link = data.link;
        this.criacao = new Date(data.criacao);
        this.prazo = new Date(data.prazo);
        this.is_concluido = data.is_concluido;
        this.usuario = data.usuario;
        this.usuario_id = data.usuario_id;
    }
}