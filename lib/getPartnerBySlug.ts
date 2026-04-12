import { supabase } from "@/lib/supabase";
import { Estabelecimento } from "@/types";

export async function getPartnerBySlug(
  slugParam: string
): Promise<Estabelecimento | null> {
  // 🔧 normaliza slug vindo da URL
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

  // ⚠️ log apenas se erro real existir
  if (error && Object.keys(error).length > 0) {
    console.error("Erro ao buscar por slug:", error);
  }

  // ✅ SE ENCONTROU, RETORNA
  if (data) {
    return {
      ...data,
      categorias: data.categorias?.[0] || null,
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

  // ⚠️ log apenas se erro real existir
  if (fallbackError && Object.keys(fallbackError).length > 0) {
    console.error("Erro no fallback por ID:", fallbackError);
  }

  // ❌ NÃO ENCONTROU NADA
  if (!fallback) {
    console.warn("Nenhum parceiro encontrado para:", slugParam);
    return null;
  }

  // ✅ RETORNO FINAL NORMALIZADO
  return {
    ...fallback,
    categorias: fallback.categorias?.[0] || null,
  };
}