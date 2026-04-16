import { supabase } from "@/lib/supabase";

export async function getPartners() {
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
        categorias (nome, slug)
      `)
    .eq("status_aberto", true)
    .order("is_featured", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return (data || []).map((item) => ({
    ...item,
    categorias: item.categorias?.[0] || null,
  }));
}