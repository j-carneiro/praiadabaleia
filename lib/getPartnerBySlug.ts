import { supabase } from "@/lib/supabase";
import { Estabelecimento } from "@/types";

export async function getPartnerBySlug(
  slugParam: string
): Promise<Estabelecimento | null> {
  const slug = slugParam?.trim().toLowerCase();

  // 🔍 BUSCA POR SLUG
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
      categoria_id,
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
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error("Erro slug:", error.message);
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
      categoria_id,
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

  if (fallbackError) {
    console.error("Erro fallback:", fallbackError.message);
  }

  if (!fallback) return null;

  return normalize(fallback);
}

function normalize(data: any): Estabelecimento {
  return {
    id: data.id,
    nome: data.nome,
    slug: data.slug,
    descricao: data.descricao,
    foto_url: data.foto_url,
    whatsapp_link: data.whatsapp_link,
    status_aberto: data.status_aberto,
    is_featured: data.is_featured,

    // 🔥 NORMALIZAÇÃO CRÍTICA
    categorias: Array.isArray(data.categorias)
      ? data.categorias[0] || null
      : data.categorias || null,

    disponibilidade: data.disponibilidade || [],
    menus: data.menus || [],
  };
}