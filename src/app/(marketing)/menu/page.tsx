import { createClient } from '@supabase/supabase-js';
import { MenuGrid, type DatabaseMenu, type MenuCategory } from "@/components/featured-products";
import { MagicCursor } from "@/components/ui/cursor";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function getMenuData() {
  // Mengambil daftar kategori yang aktif
  const { data: categories } = await supabase
    .from('menu_categories')
    .select('id, name, slug')
    .eq('is_active', true)
    .order('name');

  const { data: menus } = await supabase
    .from('menus')
    .select(`
      id, 
      name, 
      current_price, 
      image_url, 
      description,
      menu_categories (
        name,
        slug
      )
    `)
    .eq('is_active', true);

  return { 
    menus: (menus as unknown as DatabaseMenu[]) || [], 
    categories: (categories as MenuCategory[]) || [] 
  };
}

export default async function MenuPage() {
  const { menus, categories } = await getMenuData();

  return (
    <main className="relative min-h-screen bg-[var(--color-cream)] text-[var(--color-dark)] flex flex-col">
      <MagicCursor colors={["139 107 77", "166 98 31"]} />
      <Navbar />
      
      <div className="pt-20" /> 

      <MenuGrid menus={menus} categories={categories} />

      <div className="mt-auto w-full">
        <Footer />
      </div>
    </main>
  );
}