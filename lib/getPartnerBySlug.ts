import { supabase } from "@/lib/supabase";
import { Estabelecimento, Categoria, Menu, Disponibilidade } from "@/types";

export async function getPartnerBySlug(
  slugParam: string
): Promise<Estabelecimento | null> {
  const slug = slugParam?.trim().toLowerCase();

  // 🔍 BUSCA PRINCIPAL
  const { data, error } = await supabase
    .from("estabelecimentos")
    .select(`
      id,
      nome,
      slug,
      descricao,
      foto_url,
      whatsapp_link,
      status_aberto,
      is_featured,
      categorias (nome, slug),
      disponibilidade (
        id,
        data_inicio,
        data_fim,
        status
      ),
      menus (
        id,
        nome,
        descricao,
        preco
      )
    `)
    .eq("slug", slug)
    .maybeSingle();

  if (error && Object.keys(error).length > 0) {
    console.error("Erro ao buscar por slug:", error);
  }

  if (data) {
    return normalize(data);
  }

  // 🔁 FALLBACK POR ID
  const { data: fallback, error: fallbackError } = await supabase
    .from("estabelecimentos")
    .select(`
      id,
      nome,
      slug,
      descricao,
      foto_url,
      whatsapp_link,
      status_aberto,
      is_featured,
      categorias:categoria_id (nome, slug),
      disponibilidade (
        id,
        data_inicio,
        data_fim,
        status
      ),
      menus (
        id,
        nome,
        descricao,
        preco
      )
    `)
    .eq("id", slugParam)
    .maybeSingle();

  if (fallbackError && Object.keys(fallbackError).length > 0) {
    console.error("Erro fallback:", fallbackError);
  }

  if (!fallback) {
    console.warn("Nenhum parceiro encontrado para:", slugParam);
    return null;
  }

  return normalize(fallback);
}

//
// 🔥 FUNÇÃO CENTRAL (SEM ANY)
//
function normalize(raw: {
  id: string;
  nome: string;
  slug: string;
  descricao: string;
  foto_url: string;
  whatsapp_link: string;
  status_aberto: boolean;
  is_featured: boolean;
  categorias: Categoria[] | null;
  disponibilidade?: Disponibilidade[];
  menus?: Menu[];
}): Estabelecimento {
  return {
    id: raw.id,
    nome: raw.nome,
    slug: raw.slug,
    descricao: raw.descricao,
    foto_url: raw.foto_url,
    whatsapp_link: raw.whatsapp_link,
    status_aberto: raw.status_aberto,
    is_featured: raw.is_featured,

    // 🔥 CORREÇÃO AQUI (sem any)
    categorias: raw.categorias?.[0] || null,

    // 🔥 BLINDAGEM
    disponibilidade: raw.disponibilidade ?? [],
    menus: raw.menus ?? [],
  };
}