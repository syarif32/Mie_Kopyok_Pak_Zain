import type { DatabaseMenu, MenuCategory } from "@/components/featured-products";

// Katalog company profile, terpisah dari stok dan status aktif POS.
// Edit nama, harga (rupiah), deskripsi, dan gambar langsung di file ini.
// image_url: gunakan path seperti "/images/ko.png"; null memakai gambar bawaan.
// Samakan slug menu_categories dengan slug kategori saat menambah menu.
export const menuCategories: MenuCategory[] = [
  {
    "id": "makanan",
    "name": "Makanan",
    "slug": "makanan"
  },
  {
    "id": "minuman",
    "name": "Minuman",
    "slug": "minuman"
  },
  {
    "id": "camilan",
    "name": "Camilan",
    "slug": "camilan"
  },
  {
    "id": "tambahan",
    "name": "Tambahan",
    "slug": "tambahan"
  }
];

export const menus: DatabaseMenu[] = [
  {
    "id": "mie-kopyok",
    "name": "Mie Kopyok",
    "current_price": 10000,
    "image_url": "/images/ko.png",
    "description": "Mie kopyok khas Semarang dengan lontong, tahu, tauge, dan kerupuk gendar, disiram kuah bawang yang gurih.",
    "menu_categories": {
      "name": "Makanan",
      "slug": "makanan"
    }
  },
  {
    "id": "bakso-ikan",
    "name": "Bakso Ikan",
    "current_price": 14000,
    "image_url": null,
    "description": "Bakso ikan dengan cita rasa gurih khas ikan. Pilihan sajian untuk menikmati variasi menu selain mie kopyok.",
    "menu_categories": {
      "name": "Makanan",
      "slug": "makanan"
    }
  },
  {
    "id": "snack-kecil",
    "name": "Snack Kecil",
    "current_price": 3000,
    "image_url": null,
    "description": "Camilan dalam kemasan kecil untuk menemani waktu santai atau melengkapi hidangan. Tanyakan pilihan yang tersedia kepada kami.",
    "menu_categories": {
      "name": "Camilan",
      "slug": "camilan"
    }
  },
  {
    "id": "kacang",
    "name": "Kacang",
    "current_price": 2000,
    "image_url": null,
    "description": "Camilan kacang untuk dinikmati sambil berbincang atau menunggu sajian utama. Pelengkap sederhana untuk waktu santai Anda.",
    "menu_categories": {
      "name": "Camilan",
      "slug": "camilan"
    }
  },
  {
    "id": "snack-besar",
    "name": "Snack Besar",
    "current_price": 7000,
    "image_url": null,
    "description": "Camilan dalam kemasan besar untuk dinikmati sendiri maupun bersama teman. Tanyakan pilihan yang tersedia kepada kami.",
    "menu_categories": {
      "name": "Camilan",
      "slug": "camilan"
    }
  },
  {
    "id": "jeruk",
    "name": "Jeruk (Es/Panas)",
    "current_price": 5000,
    "image_url": null,
    "description": "Minuman jeruk dengan cita rasa manis dan asam yang menyegarkan. Nikmati hangat atau dengan es sesuai selera.",
    "menu_categories": {
      "name": "Minuman",
      "slug": "minuman"
    }
  },
   {
    "id": "jeruk-tawar",
    "name": "Jeruk Tawar (Es/Panas)",
    "current_price": 4000,
    "image_url": null,
    "description": "Minuman jeruk tawar dengan cita rasa manis dan asam yang menyegarkan. Nikmati hangat atau dengan es sesuai selera.",
    "menu_categories": {
      "name": "Minuman",
      "slug": "minuman"
    }
  },
  {
    "id": "air-mineral",
    "name": "Air Mineral",
    "current_price": 4000,
    "image_url": null,
    "description": "Air mineral untuk melepas dahaga dan menemani hidangan pilihan Anda. Pilihan minuman tanpa tambahan rasa manis.",
    "menu_categories": {
      "name": "Minuman",
      "slug": "minuman"
    }
  },
  {
    "id": "teh-tawar",
    "name": "Teh Tawar (Hot/Ice)",
    "current_price": 2000,
    "image_url": null,
    "description": "Teh tanpa tambahan gula untuk menikmati cita rasa teh apa adanya. Tersedia hangat atau dengan es.",
    "menu_categories": {
      "name": "Minuman",
      "slug": "minuman"
    }
  },
  {
    "id": "teh-manis",
    "name": "Teh Manis (Hot/Ice)",
    "current_price": 3000,
    "image_url": null,
    "description": "Teh dengan rasa manis yang cocok menemani semangkuk mie kopyok. Pilih sajian hangat atau dengan es sesuai selera.",
    "menu_categories": {
      "name": "Minuman",
      "slug": "minuman"
    }
  },
  {
    "id": "kerupuk-gendar",
    "name": "Kerupuk Gendar",
    "current_price": 1500,
    "image_url": null,
    "description": "Tambahan kerupuk gendar yang renyah untuk melengkapi mie kopyok. Nikmati sebagai camilan atau padukan dengan kuah gurihnya.",
    "menu_categories": {
      "name": "Tambahan",
      "slug": "tambahan"
    }
  },
  {
    "id": "mie-kopyok-jumbo",
    "name": "Mie kopyok Jumbo",
    "current_price": 12000,
    "image_url": "/images/ko.png",
    "description": "Mie kopyok khas Semarang dalam porsi lebih besar, dengan lontong, tahu, tauge, kerupuk gendar, dan kuah bawang gurih. Pilihan untuk makan lebih puas.",
    "menu_categories": {
      "name": "Makanan",
      "slug": "makanan"
    }
  },
  {
    "id": "es-gempol",
    "name": "Es Gempol",
    "current_price": 10000,
    "image_url": null,
    "description": "Minuman tradisional dengan gempol bertekstur lembut dan sajian es yang menyegarkan. Cocok dinikmati setelah menyantap hidangan hangat.",
    "menu_categories": {
      "name": "Minuman",
      "slug": "minuman"
    }
  },
  {
    "id": "air-putih",
    "name": "Air Putih",
    "current_price": 1000,
    "image_url": null,
    "description": "Air putih sebagai pendamping sederhana untuk setiap hidangan, tanpa tambahan gula maupun perisa.",
    "menu_categories": {
      "name": "Minuman",
      "slug": "minuman"
    }
  },
  {
    "id": "lontong",
    "name": "Lontong",
    "current_price": 3000,
    "image_url": null,
    "description": "Tambahan lontong untuk melengkapi porsi makan Anda. Padukan dengan kuah mie kopyok agar lebih mengenyangkan.",
    "menu_categories": {
      "name": "Tambahan",
      "slug": "tambahan"
    }
  },
  {
    "id": "thinwall-sendok-plastik",
    "name": "Thinwall + Sendok Plastik",
    "current_price": 2000,
    "image_url": null,
    "description": "Wadah makan thinwall beserta sendok plastik untuk melengkapi pesanan yang dibawa pulang agar lebih praktis dinikmati.",
    "menu_categories": {
      "name": "Tambahan",
      "slug": "tambahan"
    }
  }
];
