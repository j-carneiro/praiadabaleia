export interface Estabelecimento {
  id: string;
  nome: string;
  descricao: string | null;
  foto_url: string | null;
  whatsapp_link: string | null;
  endereco: string | null;
  status_aberto: boolean | null;
  categorias?: { nome: string } | null;
}