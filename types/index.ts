export interface Categoria {
  nome: string;
  slug: string;
}

export interface Disponibilidade {
  id: string;
  data_inicio: string;
  data_fim: string;
  status: string;
}

export interface Menu {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
}

export interface Estabelecimento {
  id: string;
  nome: string;
  descricao: string;
  foto_url: string;
  whatsapp_link: string;
  is_featured: boolean;
  slug: string;

  categorias: Categoria | null;
  disponibilidade?: Disponibilidade[];
  menus?: Menu[];
}