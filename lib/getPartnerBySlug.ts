import { supabase } from "@/lib/supabase";
import { Estabelecimento } from "@/types";

export async function getPartnerBySlug(
  slugParam: string
): Promise<Estabelecimento | null> {
  const slug = slugParam?.trim().toLowerCase();

  // 🔍 BUSCA PRINCIPAL (POR SLUG)
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
    console.error("Erro ao buscar por slug:", error.message);
  }

  // ✅ SE ENCONTROU
  if (data) {
    return {
      ...data,
      categorias: Array.isArray(data.categorias)
        ? data.categorias[0] || null
        : data.categorias || null,
    };
  }

  // 🔁 FALLBACK (BUSCA POR ID)
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

  if (fallbackError) {
    console.error("Erro no fallback por ID:", fallbackError.message);
  }

  if (!fallback) {
    console.warn("Nenhum parceiro encontrado para:", slugParam);
    return null;
  }

  // ✅ RETORNO FINAL NORMALIZADO
  return {
    ...fallback,
    categorias: Array.isArray(fallback.categorias)
      ? fallback.categorias[0] || null
      : fallback.categorias || null,
  };
}