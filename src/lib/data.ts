export type Category = {
  id: string;
  title: string;
  description: string;
  count: string;
  image: string;
};

export const categories: Category[] = [
  {
    id: "coffee",
    title: "Coffee",
    description: "Single-origin beans from Gayo to Toraja, roasted by hand.",
    count: "3,200+ products",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "food",
    title: "Food",
    description: "Recipes carried down through generations, jarred with care.",
    count: "8,900+ products",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "fashion",
    title: "Fashion",
    description: "Woven ikat and hand-stamped batik, cut for modern life.",
    count: "5,400+ products",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "craft",
    title: "Craft",
    description: "Rattan, teak, and bamboo shaped by hands that know wood.",
    count: "4,100+ products",
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "organic",
    title: "Organic",
    description: "Small-batch spices and oils grown without shortcuts.",
    count: "2,700+ products",
    image:
      "https://images.unsplash.com/photo-1466941939654-2a6fd5211fee?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "souvenir",
    title: "Souvenir",
    description: "Small keepsakes that carry the memory of a place.",
    count: "1,950+ products",
    image:
      "https://images.unsplash.com/photo-1596496181848-3091d4878b24?q=80&w=1400&auto=format&fit=crop",
  },
];

export type Product = {
  id: string;
  name: string;
  store: string;
  price: string;
  rating: number;
  image: string;
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Gayo Arabica, Washed Process 250g",
    store: "Kopi Ketiara",
    price: "Rp 98.000",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p2",
    name: "Hand-stamped Batik Tulis Scarf",
    store: "Rumah Batik Lasem",
    price: "Rp 420.000",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p3",
    name: "Woven Rattan Table Lamp",
    store: "Karya Rotan Cirebon",
    price: "Rp 650.000",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p4",
    name: "Cold-pressed Virgin Coconut Oil",
    store: "Tani Kelapa Sumba",
    price: "Rp 75.000",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p5",
    name: "Carved Teak Serving Board",
    store: "Kayu Jepara Asli",
    price: "Rp 285.000",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p6",
    name: "Sambal Roa, Small Batch 150g",
    store: "Dapur Manado",
    price: "Rp 52.000",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
  },
];

export type Maker = {
  id: string;
  name: string;
  role: string;
  city: string;
  bio: string;
  image: string;
};

export const makers: Maker[] = [
  {
    id: "m1",
    name: "Pak Ahmad",
    role: "Coffee Farmer",
    city: "Temanggung, Central Java",
    bio: "Three generations of his family have farmed the slopes of Sindoro. Pak Ahmad still hand-picks every cherry at peak ripeness before sun-drying it on raised beds.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "m2",
    name: "Bu Sari",
    role: "Batik Artisan",
    city: "Lasem, Central Java",
    bio: "Bu Sari learned the canting from her grandmother at age nine. Each cloth she makes takes up to six weeks, layered in dye drawn from mahogany bark.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "m3",
    name: "Pak Wayan",
    role: "Wood Carver",
    city: "Ubud, Bali",
    bio: "Pak Wayan carves teak the way his father taught him — by hand, no power tools, letting the grain of the wood decide the final form of every piece.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
];

export type Province = {
  id: string;
  name: string;
  umkm: string;
  popular: string;
  x: number;
  y: number;
};

export const provinces: Province[] = [
  { id: "aceh", name: "Aceh", umkm: "12,400", popular: "Coffee, Spices", x: 60, y: 90 },
  { id: "sumut", name: "North Sumatra", umkm: "18,900", popular: "Coffee, Textiles", x: 110, y: 150 },
  { id: "sumbar", name: "West Sumatra", umkm: "14,200", popular: "Food, Craft", x: 100, y: 220 },
  { id: "jakarta", name: "Jakarta", umkm: "44,700", popular: "Fashion, Souvenir", x: 300, y: 340 },
  { id: "jabar", name: "West Java", umkm: "38,500", popular: "Craft, Fashion", x: 330, y: 350 },
  { id: "jateng", name: "Central Java", umkm: "41,100", popular: "Batik, Coffee", x: 380, y: 360 },
  { id: "jatim", name: "East Java", umkm: "36,800", popular: "Craft, Organic", x: 440, y: 360 },
  { id: "bali", name: "Bali", umkm: "22,300", popular: "Craft, Souvenir", x: 490, y: 380 },
  { id: "kalsel", name: "South Kalimantan", umkm: "9,600", popular: "Craft, Organic", x: 400, y: 250 },
  { id: "sulsel", name: "South Sulawesi", umkm: "13,100", popular: "Coffee, Food", x: 560, y: 260 },
  { id: "papua", name: "Papua", umkm: "5,200", popular: "Craft, Souvenir", x: 780, y: 260 },
];

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  quote: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Dinda Pratiwi",
    location: "Jakarta",
    quote:
      "Every package feels personal. I can tell exactly whose hands made what I bought, and that changes how I see the price tag entirely.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "t2",
    name: "Reza Firmansyah",
    location: "Bandung",
    quote:
      "I found a coffee roaster in Flores I never would have discovered otherwise. The story behind the beans made the first cup taste different.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "t3",
    name: "Amelia Wijaya",
    location: "Surabaya",
    quote:
      "It doesn't feel like a marketplace. It feels like being handed a letter of introduction to someone who's spent a lifetime on their craft.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop",
  },
];

export const stats = [
  { id: "products", value: 2000000, suffix: "+", label: "Products Listed" },
  { id: "umkm", value: 500000, suffix: "+", label: "UMKM Onboard" },
  { id: "provinces", value: 38, suffix: "", label: "Provinces Reached" },
  { id: "satisfaction", value: 98, suffix: "%", label: "Customer Satisfaction" },
];
