export interface Categoria {
  nome: string;
  slug: string;
}

export interface Estabelecimento {
  id: string;
  nome: string;
  descricao?: string;
  foto_url?: string;
  whatsapp_link?: string;
  status_aberto: boolean;
  is_featured?: boolean;
  categorias?: Categoria;
}