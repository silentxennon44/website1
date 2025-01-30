import Home from "@/pages/home/home";
import images from "@/assets";

import {
  FaSquareXTwitter,
  FaInstagram,
  FaSquareFacebook,
} from "react-icons/fa6";
export type SubMenuItem = {
  title: string; // Title of the menu item
  link: string; // Link to the page.
  component?: React.ReactNode;
  subMenu?: SubMenuItem[] | null; // Recursive type for nested submenus
};

export const navItems: SubMenuItem[] = [
  {
    title: "HOME",
    link: "/home",
    component: <Home />,
  },
  {
    title: "SHOP",
    link: "#",
    subMenu: [
      {
        title: "TOPS",
        link: "#",
        subMenu: [
          {
            title: "Tees & Tanks",
            link: "/apparels/tees",
            component: <Home />,
          },
          { title: "Shirts", link: "/apparels/shirts", component: <Home /> },
          { title: "Jackets", link: "/apparels/jackets", component: <Home /> },
        ],
      },
      {
        title: "BOTTOMS",
        link: "#",
        subMenu: [
          { title: "Pants", link: "/apparels/pants", component: <Home /> },
          { title: "Shorts", link: "/apparels/shorts", component: <Home /> },
        ],
      },
      { title: "HEADWEAR", link: "/apparels/headwear", component: <Home /> },
      { title: "FOOTWEAR", link: "/apparels/footwear", component: <Home /> },
      {
        title: "ACCESSORIES",
        link: "/apparels/accessories",
        component: <Home />,
      },
      { title: "VIEW ALL", link: "/apparels/view-all", component: <Home /> },
    ],
  },
  {
    title: "HIGHLIGHTS",
    link: "#",
    subMenu: [
      {
        title: "SHOWCASE",
        link: "/highlights/showcase",
        component: <Home />,
      },
      { title: "BLOGS", link: "/highlights/blogs", component: <Home /> },
      { title: "EVENTS", link: "/highlights/events", component: <Home /> },
      // {
      //   title: `${process.env.WEBSITE_NAME || "Default"} ON AIR`,
      //   link: `/highlights/${
      //     process.env.WEBSITE_NAME?.toLowerCase().replace(/\s+/g, "-") ||
      //     "Default"
      //   }-on-air`,
      //   component: <Home />,
      // },
    ],
  },
  {
    title: "STORES",
    link: "/stores",
    component: <Home />,
  },
];

const flattenAndFilterNavItems = (
  navItems: SubMenuItem[],
  titlesToFilter: string[]
): { title: string; link: string }[] => {
  const result: { title: string; link: string }[] = [];

  const traverse = (items: SubMenuItem[]) => {
    for (const item of items) {
      if (titlesToFilter.includes(item.title)) {
        result.push({ title: item.title, link: item.link });
      }
      if (item.subMenu) {
        traverse(item.subMenu); // Recursively process subMenu
      }
    }
  };

  traverse(navItems);

  return result;
};

export const footerItems = {
  quickLinks: flattenAndFilterNavItems(navItems, [
    "HOME",
    "STORES",
    "VIEW ALL",
    "BLOGS",
    "EVENTS",
  ]),
  support: [
    { title: "FAQ", link: "/pages/faq", component: <Home /> },
    {
      title: "Shipping and Returns",
      link: "/pages/shipping-returns",
      component: <Home />,
    },
    {
      title: "Privacy Policy",
      link: "/pages/privacy-policy",
      component: <Home />,
    },
    {
      title: "Usage Policy",
      link: "/pages/Usage Policy",
      component: <Home />,
    },
  ],
  links: {
    socials: [
      ["facebook", "https://www.facebook.com/janrambosx", <FaSquareFacebook />],
      ["instagram", "https://www.instagram.com/janadrianq", <FaInstagram />],
      ["twitter", "https://x.com/janadrianq", <FaSquareXTwitter />],
    ],
    email: "silentxennon44@gmail.com",
  },
  copyright: `Copyright © ${new Date().getFullYear()} | ${
    process.env.WEBSITE_NAME
  } | All rights reserved.`,
};

export const tempClothingData: ClothingCategory[] = [
  {
    category: "Tops",
    items: [
      {
        name: "Basic White Tee",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu sapien, ullamcorper ut augue nec, gravida volutpat sapien. Curabitur hendrerit, nulla ac scelerisque hendrerit, turpis odio accumsan urna, vel imperdiet magna nunc eu ex. Duis dictum porttitor luctus. Sed viverra feugiat ultrices. In blandit ut risus sit amet volutpat. Maecenas in vestibulum quam. Aenean porttitor euismod ex.",

        price: 15.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["White"],
        material: "100% Cotton",
        gender: "Unisex",
        stock: 200,
        brand: "Everyday Wear",
        discount: 5,
        isOnSale: true,
        tags: ["Casual", "Basic"],
        images: [
          images.merch.imperium.imp_design_1_back.src,
          images.merch.imperium.imp_design_2.src,
          images.merch.homieside.homieside_design_2_black.src,
          images.merch.imperium.imp_design_1_front.src,
          images.merch.homieside.homieside_design_2_white.src,
        ],
        thumbnail: images.merch.homieside.homieside_design_2_black.src,
      },
      {
        name: "Graphic Printed Tank",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu sapien, ullamcorper ut augue nec, gravida volutpat sapien. Curabitur hendrerit, nulla ac scelerisque hendrerit, turpis odio accumsan urna, vel imperdiet magna nunc eu ex. Duis dictum porttitor luctus. Sed viverra feugiat ultrices. In blandit ut risus sit amet volutpat. Maecenas in vestibulum quam. Aenean porttitor euismod ex.",

        price: 19.99,
        sizes: ["S", "M", "L"],
        colors: ["Black", "Grey", "Red"],
        material: "Cotton Blend",
        gender: "Men",
        stock: 100,
        brand: "Street Wear",
        discount: 10,
        isOnSale: true,
        tags: ["Summer", "Graphic"],
        images: [
          images.merch.homieside.homieside_design_0.src,
          images.merch.homieside.homieside_design_1.src,
          images.merch.homieside.homieside_design_2_white.src,
          images.merch.homieside.homieside_design_2_black.src,
          images.merch.imperium.imp_design_1_back.src,
          images.merch.imperium.imp_design_1_front.src,
        ],
        thumbnail: images.merch.homieside.homieside_design_1.src,
      },
      {
        name: "Sleeveless Athletic Tee",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu sapien, ullamcorper ut augue nec, gravida volutpat sapien. Curabitur hendrerit, nulla ac scelerisque hendrerit, turpis odio accumsan urna, vel imperdiet magna nunc eu ex. Duis dictum porttitor luctus. Sed viverra feugiat ultrices. In blandit ut risus sit amet volutpat. Maecenas in vestibulum quam. Aenean porttitor euismod ex.",

        price: 22.99,
        sizes: ["M", "L", "XL"],
        colors: ["Blue", "White", "Grey"],
        material: "Polyester",
        gender: "Men",
        stock: 150,
        brand: "Athletic Fit",
        discount: 0,
        isOnSale: false,
        tags: ["Sports", "Activewear"],
        images: [
          images.merch.imperium.imp_design_1_front.src,
          images.merch.homieside.homieside_design_2_white.src,
          images.merch.homieside.homieside_design_1.src,
          images.merch.imperium.imp_design_1_back.src,
          images.merch.homieside.homieside_design_0.src,
          images.merch.homieside.homieside_design_2_black.src,
        ],
        thumbnail: images.merch.homieside.homieside_design_1.src,
      },
    ],
  },
  {
    category: "Shirts",
    items: [
      {
        name: "Classic Plaid Flannel",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu sapien, ullamcorper ut augue nec, gravida volutpat sapien. Curabitur hendrerit, nulla ac scelerisque hendrerit, turpis odio accumsan urna, vel imperdiet magna nunc eu ex. Duis dictum porttitor luctus. Sed viverra feugiat ultrices. In blandit ut risus sit amet volutpat. Maecenas in vestibulum quam. Aenean porttitor euismod ex.",

        price: 34.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Red Plaid", "Blue Plaid", "Green Plaid"],
        material: "Cotton Flannel",
        gender: "Men",
        stock: 75,
        brand: "Plaid Life",
        discount: 15,
        isOnSale: true,
        tags: ["Casual", "Flannel"],
        images: [
          images.merch.imperium.imp_design_1_front.src,
          images.merch.homieside.homieside_design_1.src,
          images.merch.homieside.homieside_design_0.src,
          images.merch.homieside.homieside_design_2_white.src,
          images.merch.imperium.imp_design_1_back.src,
        ],
        thumbnail: images.merch.imperium.imp_design_2.src,
      },
      {
        name: "Formal Button-Up",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu sapien, ullamcorper ut augue nec, gravida volutpat sapien. Curabitur hendrerit, nulla ac scelerisque hendrerit, turpis odio accumsan urna, vel imperdiet magna nunc eu ex. Duis dictum porttitor luctus. Sed viverra feugiat ultrices. In blandit ut risus sit amet volutpat. Maecenas in vestibulum quam. Aenean porttitor euismod ex.",

        price: 45,
        sizes: ["M", "L", "XL"],
        colors: ["White", "Black", "Navy"],
        material: "Cotton",
        gender: "Men",
        stock: 50,
        brand: "Elegance",
        discount: 0,
        isOnSale: false,
        tags: ["Formal", "Business"],
        images: [
          images.merch.imperium.imp_design_2.src,
          images.merch.homieside.homieside_design_2_black.src,
          images.merch.homieside.homieside_design_2_white.src,
          images.merch.imperium.imp_design_1_front.src,
          images.merch.imperium.imp_design_1_back.src,
          images.merch.homieside.homieside_design_1.src,
        ],
        thumbnail: images.merch.imperium.imp_design_1_back.src,
      },
      {
        name: "Casual Chambray Shirt",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu sapien, ullamcorper ut augue nec, gravida volutpat sapien. Curabitur hendrerit, nulla ac scelerisque hendrerit, turpis odio accumsan urna, vel imperdiet magna nunc eu ex. Duis dictum porttitor luctus. Sed viverra feugiat ultrices. In blandit ut risus sit amet volutpat. Maecenas in vestibulum quam. Aenean porttitor euismod ex.",

        price: 32,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Light Blue", "Dark Blue"],
        material: "Chambray Cotton",
        gender: "Unisex",
        stock: 120,
        brand: "Denim Co.",
        discount: 10,
        isOnSale: true,
        tags: ["Casual", "Chambray"],
        images: [images.merch.homieside.homieside_design_2_black.src],
        thumbnail: images.merch.imperium.imp_design_2.src,
      },
    ],
  },
  {
    category: "Jackets",
    items: [
      {
        name: "Quilted Bomber Jacket",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu sapien, ullamcorper ut augue nec, gravida volutpat sapien. Curabitur hendrerit, nulla ac scelerisque hendrerit, turpis odio accumsan urna, vel imperdiet magna nunc eu ex. Duis dictum porttitor luctus. Sed viverra feugiat ultrices. In blandit ut risus sit amet volutpat. Maecenas in vestibulum quam. Aenean porttitor euismod ex.",

        price: 79.99,
        sizes: ["M", "L", "XL"],
        colors: ["Black", "Olive"],
        material: "Polyester",
        gender: "Men",
        stock: 60,
        brand: "Outerwear Pro",
        discount: 20,
        isOnSale: true,
        tags: ["Bomber", "Winter"],
        images: [
          images.merch.homieside.homieside_design_2_black.src,
          images.merch.homieside.homieside_design_0.src,
          images.merch.imperium.imp_design_1_back.src,
        ],
        thumbnail: images.merch.homieside.homieside_design_1.src,
      },
      {
        name: "Hooded Windbreaker",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu sapien, ullamcorper ut augue nec, gravida volutpat sapien. Curabitur hendrerit, nulla ac scelerisque hendrerit, turpis odio accumsan urna, vel imperdiet magna nunc eu ex. Duis dictum porttitor luctus. Sed viverra feugiat ultrices. In blandit ut risus sit amet volutpat. Maecenas in vestibulum quam. Aenean porttitor euismod ex.",

        price: 59.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Navy", "Grey"],
        material: "Windproof Fabric",
        gender: "Unisex",
        stock: 150,
        brand: "Active Gear",
        discount: 5,
        isOnSale: false,
        tags: ["Outdoor", "Lightweight"],
        images: [
          images.merch.imperium.imp_design_1_back.src,
          images.merch.imperium.imp_design_2.src,
          images.merch.imperium.imp_design_1_front.src,
          images.merch.homieside.homieside_design_2_black.src,
          images.merch.homieside.homieside_design_0.src,
          images.merch.homieside.homieside_design_1.src,
        ],
        thumbnail: images.merch.imperium.imp_design_2.src,
      },
      {
        name: "Oversized Denim Jacket",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu sapien, ullamcorper ut augue nec, gravida volutpat sapien. Curabitur hendrerit, nulla ac scelerisque hendrerit, turpis odio accumsan urna, vel imperdiet magna nunc eu ex. Duis dictum porttitor luctus. Sed viverra feugiat ultrices. In blandit ut risus sit amet volutpat. Maecenas in vestibulum quam. Aenean porttitor euismod ex.",

        price: 89.99,
        sizes: ["M", "L", "XL"],
        colors: ["Light Denim", "Dark Denim"],
        material: "Denim",
        gender: "Unisex",
        stock: 80,
        brand: "Classic Style",
        discount: 10,
        isOnSale: true,
        tags: ["Denim", "Casual"],
        images: [
          images.merch.homieside.homieside_design_0.src,
          images.merch.homieside.homieside_design_2_black.src,
          images.merch.imperium.imp_design_1_back.src,
          images.merch.imperium.imp_design_1_front.src,
          images.merch.homieside.homieside_design_1.src,
        ],
        thumbnail: images.merch.homieside.homieside_design_2_black.src,
      },
    ],
  },
  {
    category: "Bottoms",
    items: [
      {
        name: "Slim-Fit Chinos",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu sapien, ullamcorper ut augue nec, gravida volutpat sapien. Curabitur hendrerit, nulla ac scelerisque hendrerit, turpis odio accumsan urna, vel imperdiet magna nunc eu ex. Duis dictum porttitor luctus. Sed viverra feugiat ultrices. In blandit ut risus sit amet volutpat. Maecenas in vestibulum quam. Aenean porttitor euismod ex.",

        price: 39.99,
        sizes: ["30", "32", "34", "36"],
        colors: ["Khaki", "Navy", "Black"],
        material: "Cotton Blend",
        gender: "Men",
        stock: 200,
        brand: "Chino Chic",
        discount: 10,
        isOnSale: true,
        tags: ["Casual", "Chinos"],
        images: [
          images.merch.imperium.imp_design_2.src,
          images.merch.homieside.homieside_design_0.src,
          images.merch.homieside.homieside_design_1.src,
        ],
        thumbnail: images.merch.homieside.homieside_design_0.src,
      },
      {
        name: "Distressed Skinny Jeans",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu sapien, ullamcorper ut augue nec, gravida volutpat sapien. Curabitur hendrerit, nulla ac scelerisque hendrerit, turpis odio accumsan urna, vel imperdiet magna nunc eu ex. Duis dictum porttitor luctus. Sed viverra feugiat ultrices. In blandit ut risus sit amet volutpat. Maecenas in vestibulum quam. Aenean porttitor euismod ex.",

        price: 49.99,
        sizes: ["30", "32", "34", "36"],
        colors: ["Blue", "Black"],
        material: "Denim",
        gender: "Women",
        stock: 100,
        brand: "Denim X",
        discount: 5,
        isOnSale: true,
        tags: ["Distressed", "Casual"],
        images: [images.merch.homieside.homieside_design_2_black.src],
        thumbnail: images.merch.imperium.imp_design_1_back.src,
      },
      {
        name: "Relaxed Cargo Pants",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu sapien, ullamcorper ut augue nec, gravida volutpat sapien. Curabitur hendrerit, nulla ac scelerisque hendrerit, turpis odio accumsan urna, vel imperdiet magna nunc eu ex. Duis dictum porttitor luctus. Sed viverra feugiat ultrices. In blandit ut risus sit amet volutpat. Maecenas in vestibulum quam. Aenean porttitor euismod ex.",

        price: 45,
        sizes: ["30", "32", "34", "36"],
        colors: ["Olive", "Black"],
        material: "Cotton",
        gender: "Men",
        stock: 80,
        brand: "Outdoor Gear",
        discount: 15,
        isOnSale: false,
        tags: ["Cargo", "Relaxed Fit"],
        images: [
          images.merch.homieside.homieside_design_2_black.src,
          images.merch.imperium.imp_design_2.src,
          images.merch.homieside.homieside_design_1.src,
        ],
        thumbnail: images.merch.imperium.imp_design_2.src,
      },
    ],
  },
  {
    category: "Shorts",
    items: [
      {
        name: "Cotton Drawstring Shorts",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu sapien, ullamcorper ut augue nec, gravida volutpat sapien. Curabitur hendrerit, nulla ac scelerisque hendrerit, turpis odio accumsan urna, vel imperdiet magna nunc eu ex. Duis dictum porttitor luctus. Sed viverra feugiat ultrices. In blandit ut risus sit amet volutpat. Maecenas in vestibulum quam. Aenean porttitor euismod ex.",

        price: 24.99,
        sizes: ["S", "M", "L"],
        colors: ["Grey", "Blue", "Green"],
        material: "100% Cotton",
        gender: "Unisex",
        stock: 120,
        brand: "SummerVibe",
        discount: 0,
        isOnSale: true,
        tags: ["Casual", "Comfort"],
        images: [
          images.merch.homieside.homieside_design_0.src,
          images.merch.homieside.homieside_design_2_black.src,
        ],
        thumbnail: images.merch.imperium.imp_design_2.src,
      },
      {
        name: "Classic Khaki Shorts",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu sapien, ullamcorper ut augue nec, gravida volutpat sapien. Curabitur hendrerit, nulla ac scelerisque hendrerit, turpis odio accumsan urna, vel imperdiet magna nunc eu ex. Duis dictum porttitor luctus. Sed viverra feugiat ultrices. In blandit ut risus sit amet volutpat. Maecenas in vestibulum quam. Aenean porttitor euismod ex.",

        price: 29.99,
        sizes: ["M", "L", "XL"],
        colors: ["Khaki", "Navy"],
        material: "Cotton",
        gender: "Men",
        stock: 150,
        brand: "Outfitters",
        discount: 5,
        isOnSale: true,
        tags: ["Casual", "Khaki"],
        images: [images.merch.homieside.homieside_design_0.src],
        thumbnail: images.merch.homieside.homieside_design_2_black.src,
      },
      {
        name: "Patterned Board Shorts",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu sapien, ullamcorper ut augue nec, gravida volutpat sapien. Curabitur hendrerit, nulla ac scelerisque hendrerit, turpis odio accumsan urna, vel imperdiet magna nunc eu ex. Duis dictum porttitor luctus. Sed viverra feugiat ultrices. In blandit ut risus sit amet volutpat. Maecenas in vestibulum quam. Aenean porttitor euismod ex.",

        price: 34.99,
        sizes: ["M", "L", "XL"],
        colors: ["Red", "Blue", "Green"],
        material: "Polyester",
        gender: "Men",
        stock: 90,
        brand: "Beachwear",
        discount: 0,
        isOnSale: false,
        tags: ["Beach", "Board Shorts"],
        images: [
          images.merch.imperium.imp_design_2.src,
          images.merch.imperium.imp_design_1_front.src,
          images.merch.imperium.imp_design_1_back.src,
          images.merch.homieside.homieside_design_2_black.src,
        ],
        thumbnail: images.merch.homieside.homieside_design_2_white.src,
      },
    ],
  },
  {
    category: "Headwear",
    items: [
      {
        name: "Woolen Beanie",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu sapien, ullamcorper ut augue nec, gravida volutpat sapien. Curabitur hendrerit, nulla ac scelerisque hendrerit, turpis odio accumsan urna, vel imperdiet magna nunc eu ex. Duis dictum porttitor luctus. Sed viverra feugiat ultrices. In blandit ut risus sit amet volutpat. Maecenas in vestibulum quam. Aenean porttitor euismod ex.",

        price: 19.99,
        sizes: ["One Size"],
        colors: ["Black", "Grey", "Red"],
        material: "Wool",
        gender: "Unisex",
        stock: 200,
        brand: "WarmStyle",
        discount: 10,
        isOnSale: true,
        tags: ["Winter", "Beanie"],
        images: [
          images.merch.homieside.homieside_design_2_black.src,
          images.merch.homieside.homieside_design_0.src,
          images.merch.imperium.imp_design_1_front.src,
          images.merch.homieside.homieside_design_1.src,
          images.merch.imperium.imp_design_2.src,
          images.merch.homieside.homieside_design_2_white.src,
        ],
        thumbnail: images.merch.homieside.homieside_design_1.src,
      },
      {
        name: "Flat Brim Cap",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu sapien, ullamcorper ut augue nec, gravida volutpat sapien. Curabitur hendrerit, nulla ac scelerisque hendrerit, turpis odio accumsan urna, vel imperdiet magna nunc eu ex. Duis dictum porttitor luctus. Sed viverra feugiat ultrices. In blandit ut risus sit amet volutpat. Maecenas in vestibulum quam. Aenean porttitor euismod ex.",

        price: 25,
        sizes: ["One Size"],
        colors: ["Black", "Navy", "Grey"],
        material: "Cotton",
        gender: "Unisex",
        stock: 150,
        brand: "Snapback Gear",
        discount: 5,
        isOnSale: false,
        tags: ["Streetwear", "Cap"],
        images: [
          images.merch.homieside.homieside_design_0.src,
          images.merch.homieside.homieside_design_1.src,
          images.merch.imperium.imp_design_1_front.src,
          images.merch.imperium.imp_design_2.src,
          images.merch.imperium.imp_design_1_back.src,
          images.merch.homieside.homieside_design_2_black.src,
          images.merch.homieside.homieside_design_2_white.src,
        ],
        thumbnail: images.merch.homieside.homieside_design_0.src,
      },
      {
        name: "Classic Baseball Hat",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu sapien, ullamcorper ut augue nec, gravida volutpat sapien. Curabitur hendrerit, nulla ac scelerisque hendrerit, turpis odio accumsan urna, vel imperdiet magna nunc eu ex. Duis dictum porttitor luctus. Sed viverra feugiat ultrices. In blandit ut risus sit amet volutpat. Maecenas in vestibulum quam. Aenean porttitor euismod ex.",

        price: 19.99,
        sizes: ["One Size"],
        colors: ["Red", "White", "Blue"],
        material: "Cotton",
        gender: "Unisex",
        stock: 180,
        brand: "Baseball Co.",
        discount: 0,
        isOnSale: true,
        tags: ["Sports", "Cap"],
        images: [
          images.merch.homieside.homieside_design_1.src,
          images.merch.imperium.imp_design_1_back.src,
          images.merch.homieside.homieside_design_2_black.src,
          images.merch.homieside.homieside_design_2_white.src,
          images.merch.imperium.imp_design_1_front.src,
          images.merch.imperium.imp_design_2.src,
        ],
        thumbnail: images.merch.imperium.imp_design_2.src,
      },
    ],
  },
  {
    category: "Footwear",
    items: [
      {
        name: "High-Top Sneakers",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu sapien, ullamcorper ut augue nec, gravida volutpat sapien. Curabitur hendrerit, nulla ac scelerisque hendrerit, turpis odio accumsan urna, vel imperdiet magna nunc eu ex. Duis dictum porttitor luctus. Sed viverra feugiat ultrices. In blandit ut risus sit amet volutpat. Maecenas in vestibulum quam. Aenean porttitor euismod ex.",

        price: 69.99,
        sizes: ["7", "8", "9", "10", "11"],
        colors: ["White", "Black", "Red"],
        material: "Canvas",
        gender: "Unisex",
        stock: 120,
        brand: "SneakerLab",
        discount: 10,
        isOnSale: true,
        tags: ["Sports", "Casual"],
        images: [
          images.merch.homieside.homieside_design_1.src,
          images.merch.homieside.homieside_design_2_white.src,
          images.merch.homieside.homieside_design_2_black.src,
          images.merch.imperium.imp_design_2.src,
        ],
        thumbnail: images.merch.homieside.homieside_design_0.src,
      },
      {
        name: "Leather Chelsea Boots",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu sapien, ullamcorper ut augue nec, gravida volutpat sapien. Curabitur hendrerit, nulla ac scelerisque hendrerit, turpis odio accumsan urna, vel imperdiet magna nunc eu ex. Duis dictum porttitor luctus. Sed viverra feugiat ultrices. In blandit ut risus sit amet volutpat. Maecenas in vestibulum quam. Aenean porttitor euismod ex.",

        price: 99.99,
        sizes: ["8", "9", "10", "11", "12"],
        colors: ["Brown", "Black"],
        material: "Leather",
        gender: "Men",
        stock: 60,
        brand: "BootMasters",
        discount: 0,
        isOnSale: false,
        tags: ["Formal", "Boots"],
        images: [
          images.merch.homieside.homieside_design_2_white.src,
          images.merch.homieside.homieside_design_1.src,
        ],
        thumbnail: images.merch.homieside.homieside_design_2_black.src,
      },
      {
        name: "Casual Flip-Flops",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu sapien, ullamcorper ut augue nec, gravida volutpat sapien. Curabitur hendrerit, nulla ac scelerisque hendrerit, turpis odio accumsan urna, vel imperdiet magna nunc eu ex. Duis dictum porttitor luctus. Sed viverra feugiat ultrices. In blandit ut risus sit amet volutpat. Maecenas in vestibulum quam. Aenean porttitor euismod ex.",

        price: 14.99,
        sizes: ["S", "M", "L"],
        colors: ["Blue", "Green", "Black"],
        material: "Rubber",
        gender: "Unisex",
        stock: 300,
        brand: "Beachwear",
        discount: 5,
        isOnSale: true,
        tags: ["Summer", "Casual"],
        images: [
          images.merch.homieside.homieside_design_2_black.src,
          images.merch.homieside.homieside_design_2_white.src,
          images.merch.imperium.imp_design_1_front.src,
          images.merch.imperium.imp_design_1_back.src,
          images.merch.homieside.homieside_design_1.src,
          images.merch.imperium.imp_design_2.src,
        ],
        thumbnail: images.merch.imperium.imp_design_2.src,
      },
    ],
  },
  {
    category: "Accessories",
    items: [
      {
        name: "Minimalist Leather Wallet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu sapien, ullamcorper ut augue nec, gravida volutpat sapien. Curabitur hendrerit, nulla ac scelerisque hendrerit, turpis odio accumsan urna, vel imperdiet magna nunc eu ex. Duis dictum porttitor luctus. Sed viverra feugiat ultrices. In blandit ut risus sit amet volutpat. Maecenas in vestibulum quam. Aenean porttitor euismod ex.",

        price: 29.99,
        sizes: ["One Size"],
        colors: ["Black", "Brown"],
        material: "Leather",
        gender: "Unisex",
        stock: 100,
        brand: "LeatherCo",
        discount: 0,
        isOnSale: false,
        tags: ["Wallet", "Leather"],
        images: [
          images.merch.imperium.imp_design_1_back.src,
          images.merch.imperium.imp_design_2.src,
          images.merch.homieside.homieside_design_1.src,
          images.merch.imperium.imp_design_1_front.src,
          images.merch.homieside.homieside_design_0.src,
        ],
        thumbnail: images.merch.homieside.homieside_design_2_black.src,
      },
      {
        name: "Polarized Sunglasses",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu sapien, ullamcorper ut augue nec, gravida volutpat sapien. Curabitur hendrerit, nulla ac scelerisque hendrerit, turpis odio accumsan urna, vel imperdiet magna nunc eu ex. Duis dictum porttitor luctus. Sed viverra feugiat ultrices. In blandit ut risus sit amet volutpat. Maecenas in vestibulum quam. Aenean porttitor euismod ex.",

        price: 49.99,
        sizes: ["One Size"],
        colors: ["Black", "Grey", "Blue"],
        material: "Plastic",
        gender: "Unisex",
        stock: 200,
        brand: "Sunwear",
        discount: 15,
        isOnSale: true,
        tags: ["Summer", "Sunglasses"],
        images: [
          images.merch.homieside.homieside_design_2_white.src,
          images.merch.homieside.homieside_design_1.src,
          images.merch.imperium.imp_design_2.src,
          images.merch.homieside.homieside_design_0.src,
          images.merch.homieside.homieside_design_2_black.src,
        ],
        thumbnail: images.merch.imperium.imp_design_1_front.src,
      },
      {
        name: "Gold Chain Necklace",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu sapien, ullamcorper ut augue nec, gravida volutpat sapien. Curabitur hendrerit, nulla ac scelerisque hendrerit, turpis odio accumsan urna, vel imperdiet magna nunc eu ex. Duis dictum porttitor luctus. Sed viverra feugiat ultrices. In blandit ut risus sit amet volutpat. Maecenas in vestibulum quam. Aenean porttitor euismod ex.",

        price: 79.99,
        sizes: ["One Size"],
        colors: ["Gold"],
        material: "Gold",
        gender: "Unisex",
        stock: 50,
        brand: "Jewels",
        discount: 0,
        isOnSale: false,
        tags: ["Accessories", "Gold"],
        images: [
          images.merch.imperium.imp_design_1_front.src,
          images.merch.homieside.homieside_design_0.src,
        ],
        thumbnail: images.merch.homieside.homieside_design_1.src,
      },
    ],
  },
];

// export const screenBreakpoints = [576, 768, 992, 1200];

/**
 * An object representing the screen breakpoints for responsive design.
 * Each key represents a breakpoint size with its corresponding pixel value.
 */
export const screenBreakpoints = {
  // Extra small devices (portrait phones)
  xs: 0,
  // Small devices (landscape phones)
  sm: 576,
  // Medium devices (tablets)
  md: 768,
  // Large devices (desktops)
  lg: 992,
  // Extra large devices (large desktops)
  xl: 1200,
  // Extra extra large devices (larger desktops)
  xxl: 1400,
  // Extra extra extra large devices (very large desktops)
  // added 50px to compensate for teh default 50px padding on each side
  xxxl: 1650,
};
