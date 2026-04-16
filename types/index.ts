// 🔥 MENU (único)
export interface Menu {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
}

// 🔥 CATEGORIA
export interface Categoria {
  nome: string;
  slug: string;
}

// 🔥 DISPONIBILIDADE
export interface Disponibilidade {
  id: string;
  data_inicio: string;
  data_fim: string;
  status: string;
}

// 🔥 ESTABELECIMENTO (modelo principal)
export interface Estabelecimento {
  id: string;
  nome: string;
  descricao: string;
  foto_url: string;
  whatsapp_link: string;
  is_featured: boolean;
  slug: string;
  status_aberto: boolean;
  categorias: Categoria | null;

  // 🔥 ARRAYS OPCIONAIS VINDOS DO BACKEND
  disponibilidade?: Disponibilidade[];
  menus?: Menu[];
}