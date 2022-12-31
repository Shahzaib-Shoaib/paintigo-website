import { USFlag } from "@components/icons/USFlag";
import { DEFlag } from "@components/icons/DEFlag";
import { ESFlag } from "@components/icons/ESFlag";
import { FRFlag } from "@components/icons/FRFlag";
import { ITFlag } from "@components/icons/ITFlag";
export const siteSettings = {
  name: "Paintigo",
  description:
    "Paintigo is dedicated to giving you the very best of Art Supplies, with a focus on quality, pigment, color vibrancy, and long-lasting painting results.",
  author: {
    name: "Fester",
    websiteUrl: "https://fester-924622.netlify.app/",
    address: "",
  },
  logo: {
    url: "/assets/images/logo.avif",
    alt: "Paintigo",
    href: "/",
    width: 95,
    height: 10,
  },
  defaultLanguage: "en",
  currencyCode: "USD",
  site_header: {
    menu: [
      {
        id: 1,
        path: "/",
        // label: 'Best Sellers',
        label: "text-best-sellers",
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: "/",
                // label: 'View All Best Sellers',
                label: "text-view-all-best-sellers",
                columnItemItems: [
                  {
                    id: 1,
                    path: "",
                    // label: 'Amazon Best Sellers',
                    label: "text-amazon-best-sellers",
                  },
                  {
                    id: 2,
                    path: "",
                    // label: 'Artistro Recommends',
                    label: "text-artistro-recommends",
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: "",
                // label: 'New Arrivals',
                label: "text-new-arrivals",
                columnItemItems: [
                  {
                    id: 1,
                    path: "",
                    // label: '5 Jumbo Black Markers',
                    label: "text-5-jumbo-black-markers",
                  },
                  {
                    id: 2,
                    path: "",
                    // label: '10 Jumbo Colored Markers',
                    label: "text-10-jumbo-colored-markers",
                  },
                  {
                    id: 3,
                    path: "",
                    // label: 'Watercolor Brush Pens',
                    label: "text-watercolor-brush-pens",
                  },
                  {
                    id: 4,
                    path: "",
                    // label: '16 Gold & Silver Metallic Outline Markers',
                    label: "text-16-gold-&-silver-metallic-outline-markers",
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: "",
                // label: 'Trending Colors',
                label: "text-trending-colors",
                columnItemItems: [
                  {
                    id: 1,
                    path: "",
                    img: [
                      {
                        imgSrc: "/assets/images/mega-menu/1.webp",
                        imgWidth: 300,
                        imgHeight: 220,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 4,
            columnItems: [
              {
                id: 1,
                path: "",
                // label: 'Water Color Paint Set',
                label: "text-water-color-paint-set",
                columnItemItems: [
                  {
                    id: 1,
                    path: "",
                    img: [
                      {
                        imgSrc: "/assets/images/mega-menu/2.webp",
                        imgWidth: 300,
                        imgHeight: 220,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        id: 2,
        path: "",
        // label: 'Paint Pens',
        label: "text-paint-pens",
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: "",
                // label: 'Ink Base',
                label: "text-ink-base",
                columnItemItems: [
                  {
                    id: 1,
                    path: "",
                    // label: 'Acrylic Paint Pens',
                    label: "text-acrylic-paint-pens",
                  },
                  {
                    id: 2,
                    path: "",
                    // label: 'Oil Paint Pens',
                    label: "text-oil-paint-pens",
                  },
                  {
                    id: 3,
                    path: "",
                    // label: 'All Marker Paint Pens',
                    label: "text-all-marker-paint-pens",
                  },
                  {
                    id: 4,
                    path: "",
                    // label: 'View all Artistro products',
                    label: "text-view-all-artistro-products",
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: "/",
                // label: 'Tip Size',
                label: "text-tip-size",
                columnItemItems: [
                  {
                    id: 1,
                    path: "",
                    // label: 'Extra Fine',
                    label: "text-extra-fine",
                  },
                  {
                    id: 2,
                    path: "",
                    // label: 'Fine',
                    label: "text-fine",
                  },
                  {
                    id: 3,
                    path: "",
                    // label: 'Medium',
                    label: "text-medium",
                  },
                  {
                    id: 4,
                    path: "",
                    // label: 'Brush Tip',
                    label: "text-brush-tip",
                  },
                  {
                    id: 5,
                    path: "",
                    // label: 'Jumbo Felt',
                    label: "text-jumbo-felt",
                  },
                  {
                    id: 6,
                    path: "",
                    // label: 'All Marker Pens',
                    label: "text-all-marker-pens",
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: "",
                // label: 'Ink Color',
                label: "text-ink-color",
                columnItemItems: [
                  {
                    id: 1,
                    path: "",
                    // label: 'Black & White',
                    label: "text-black-&-white",
                  },
                  {
                    id: 2,
                    path: "",
                    // label: 'Gold & Silver',
                    label: "text-gold-&-silver",
                  },
                  {
                    id: 3,
                    path: "",
                    // label: 'Metallic & Glitter',
                    label: "text-metallic-&-glitter",
                  },
                  {
                    id: 4,
                    path: "",
                    // label: 'Multicolor',
                    label: "text-multicolor",
                  },
                  {
                    id: 5,
                    path: "",
                    // label: 'View All',
                    label: "text-view-all",
                  },
                ],
              },
            ],
          },
          {
            id: 4,
            columnItems: [
              {
                id: 1,
                path: "",
                // label: 'How To Choose Pens ?',
                label: "text-how-to-choose-pens",
                columnItemItems: [
                  {
                    id: 1,
                    path: "",
                    img: [
                      {
                        imgSrc: "/assets/images/mega-menu/3.avif",
                        imgWidth: 300,
                        imgHeight: 220,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        path: "",
        // label: 'Paint',
        label: "text-paint",
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: "",
                // label: 'Paint Type',
                label: "text-paint-type",
                columnItemItems: [
                  {
                    id: 1,
                    path: "",
                    // label: 'Acrylic',
                    label: "text-acrylic",
                  },
                  {
                    id: 2,
                    path: "",
                    // label: 'Watercolor',
                    label: "text-watercolor",
                  },
                  {
                    id: 3,
                    path: "",
                    // label: 'View All',
                    label: "text-view-all",
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: "/",
                // label: 'Water Color Tutorial',
                label: "text-water-color-tutorial",
                columnItemItems: [
                  {
                    id: 1,
                    path: "",
                    img: [
                      {
                        imgSrc: "/assets/images/mega-menu/4.jpg",
                        imgWidth: 300,
                        imgHeight: 220,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: "/",
                // label: 'Acrylic Tutorial',
                label: "text-acrylic-tutorial",
                columnItemItems: [
                  {
                    id: 1,
                    path: "",
                    img: [
                      {
                        imgSrc: "/assets/images/mega-menu/4.jpg",
                        imgWidth: 300,
                        imgHeight: 220,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        path: "",
        // label: 'Surfaces',
        label: "text-surfaces",
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: "",
                // label: 'Painting Surfaces',
                label: "text-painting-surfaces",
                columnItemItems: [
                  {
                    id: 1,
                    path: "",
                    // label: 'Rocks',
                    label: "text-rocks",
                  },
                  {
                    id: 2,
                    path: "",
                    // label: 'Wood Slices',
                    label: "text-wood-slices",
                  },
                  {
                    id: 3,
                    path: "",
                    // label: 'View All',
                    label: "text-view-all",
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: "/",
                // label: 'Wood Painting',
                label: "text-wood-painting",
                columnItemItems: [
                  {
                    id: 1,
                    path: "",
                    img: [
                      {
                        imgSrc: "/assets/images/mega-menu/5.avif",
                        imgWidth: 300,
                        imgHeight: 220,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: "/",
                // label: 'Rock Painting',
                label: "text-rock-painting",
                columnItemItems: [
                  {
                    id: 1,
                    path: "",
                    img: [
                      {
                        imgSrc: "/assets/images/mega-menu/6.avif",
                        imgWidth: 300,
                        imgHeight: 220,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        path: "",
        // label: 'Bundles',
        label: "text-bundles",
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: "",
                // label: 'View All Bundles',
                label: "text-view-all-bundles",
                columnItemItems: [
                  {
                    id: 1,
                    path: "",
                    // label: 'Pen Bundles',
                    label: "text-pen-bundles",
                  },
                  {
                    id: 2,
                    path: "",
                    // label: 'Pen & Surfaces',
                    label: "text-pen-&-surfaces",
                  },
                  {
                    id: 3,
                    path: "",
                    // label: 'Paint & Surfaces',
                    label: "text-paint-&-surfaces",
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: "/",
                // label: 'Save 10%',
                label: "text-save-10%",
                columnItemItems: [
                  {
                    id: 1,
                    path: "",
                    img: [
                      {
                        imgSrc: "/assets/images/mega-menu/7.jpg",
                        imgWidth: 300,
                        imgHeight: 220,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: "/",
                // label: 'Save 11%',
                label: "text-save-11%",
                columnItemItems: [
                  {
                    id: 1,
                    path: "",
                    img: [
                      {
                        imgSrc: "/assets/images/mega-menu/8.jpg",
                        imgWidth: 300,
                        imgHeight: 220,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 6,
        path: "",
        // label: 'Gifts',
        label: "text-gifts",
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: "/",
                label: "",
                columnItemItems: [],
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: "",
                // label: 'By Interest & Recipients',
                label: "text-by-interest",
                columnItemItems: [
                  {
                    id: 1,
                    path: "",
                    // label: 'Gifts For Kids & Teens',
                    label: "text-gifts-for-kids-&-teens",
                  },
                  {
                    id: 2,
                    path: "",
                    // label: 'Gifts For Rock Painters',
                    label: "text-gift-for-rock-painters",
                  },
                  {
                    id: 3,
                    path: "",
                    // label: 'Gifts For Watercolor Artists',
                    label: "text-gifts-for-watercolor-artists",
                  },
                  {
                    id: 4,
                    path: "",
                    // label: 'Gifts for Illustrators',
                    label: "text-gifts-for-illustrators",
                  },
                  {
                    id: 5,
                    path: "",
                    // label: 'Gift Packaging',
                    label: "text-gift-packaging",
                  },
                  {
                    id: 6,
                    path: "",
                    // label: 'View All',
                    label: "text-view-all",
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: "/",
                // label: 'Paint On Any Surface',
                label: "text-paint-on-any-surface",
                columnItemItems: [
                  {
                    id: 1,
                    path: "",

                    img: [
                      {
                        imgSrc: "/assets/images/mega-menu/9.avif",
                        imgWidth: 300,
                        imgHeight: 220,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 7,
        path: "",
        // label: 'Resources',
        label: "text-resources",
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: "",
                // label: 'All Resources',
                label: "text-all-resources",
                columnItemItems: [
                  {
                    id: 1,
                    path: "",
                    // label: 'Blog & Tutorials',
                    label: "text-blog-&-tutorials",
                  },
                  {
                    id: 2,
                    path: "",
                    // label: 'Coloring Pages',
                    label: "text-coloring-pages",
                  },
                  {
                    id: 3,
                    path: "",
                    // label: 'Stencils',
                    label: "text-stencils",
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: "/",
                // label: '125+ Easy Things To Draw',
                label: "text-125+-easy-things-to-draw",
                columnItemItems: [
                  {
                    id: 1,
                    path: "",
                    img: [
                      {
                        imgSrc: "/assets/images/mega-menu/10.jpg",
                        imgWidth: 300,
                        imgHeight: 220,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: "/",
                // label: 'Beginners Drawing Guide',
                label: "text-beginners-drawing-guide",
                columnItemItems: [
                  {
                    id: 1,
                    path: "",
                    img: [
                      {
                        imgSrc: "/assets/images/mega-menu/11.jpg",
                        imgWidth: 300,
                        imgHeight: 220,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      ,
      {
        id: 8,
        path: "/products",
        label: "text-products",
      },
    ],
    mobileMenu: [
      {
        id: 1,
        path: "/",
        // label: 'Best Sellers',
        label: "text-best-sellers",
        subMenu: [
          {
            id: 1,
            path: "",
            // label: 'View All Best Sellers',
            label: "text-view-all-best-sellers",
          },
          {
            id: 2,
            path: "",
            // label: ' New arrival',
            label: "text-new-arrivals",
          },
          {
            id: 3,
            path: "",
            // label: 'Amazon Best Sellers',
            label: "text-amazon-best-sellers",
          },
          {
            id: 4,
            path: "",
            // label: 'Artistro Recommends',
            label: "text-artistro-recommends",
          },
        ],
      },
      {
        id: 2,
        path: "",
        // label: 'Marker Paint Pens',
        label: "text-marker-paint-pens",
        subMenu: [
          {
            id: 1,
            path: "",
            // label: 'Acrylic Paint Pens',
            label: "text-acrylic-paint-pens",
          },
          {
            id: 2,
            path: "",
            // label: 'Oil Paint Pens',
            label: "text-oil-paint-pens",
          },
          {
            id: 3,
            path: "",
            // label: 'All Marker Pens',
            label: "text-all-marker-pens",
          },
        ],
      },
      {
        id: 3,
        path: "",
        // label: 'Paint',
        label: "text-paint",
        subMenu: [
          {
            id: 1,
            path: "",
            // label: 'Watercolor Paint',
            label: "text-watercolor-paint",
          },
          {
            id: 2,
            path: "",
            // label: 'Acrylic Paint',
            label: "text-acrylic-paint",
          },
          {
            id: 3,
            path: "",
            // label: 'View All',
            label: "text-view-all",
          },
        ],
      },
      {
        id: 4,
        path: "",
        // label: 'Surfaces',
        label: "text-surfaces",
        subMenu: [
          {
            id: 1,
            path: "",
            // label: 'Rocks',
            label: "text-rocks",
          },
          {
            id: 2,
            path: "",
            // label: 'Wood Slices',
            label: "text-wood-slices",
          },
          {
            id: 3,
            path: "",
            // label: 'View All',
            label: "text-view-all",
          },
        ],
      },
      {
        id: 5,
        path: "",
        // label: 'Bundles',
        label: "text-bundles",
        subMenu: [
          {
            id: 1,
            path: "",
            // label: 'Pens Bundles',
            label: "text-pens-bundles",
          },
          {
            id: 2,
            path: "",
            // label: 'Pens & Surfaces',
            label: "text-pens-&-surfaces",
          },
          {
            id: 3,
            path: "",
            // label: 'Paint & Surfaces',
            label: "text-paint-&-surfaces",
          },
          {
            id: 4,
            path: "",
            // label: 'View All Bundles',
            label: "text-view-all-bundles",
          },
        ],
      },
    ],
    languageMenu: [
      {
        id: "en",
        name: "English - EN",
        value: "en",
        icon: <USFlag width="20px" height="15px" />,
      },
      {
        id: "de",
        name: "Deutsch - DE",
        value: "de",
        icon: <DEFlag width="20px" height="15px" />,
      },
      {
        id: "es",
        name: "Español - ES",
        value: "es",
        icon: <ESFlag width="20px" height="15px" />,
      },
      {
        id: "fr",
        name: "Français - FR",
        value: "fr",
        icon: <FRFlag width="20px" height="15px" />,
      },
      {
        id: "it",
        name: "Italiano - IT",
        value: "it",
        icon: <ITFlag width="20px" height="15px" />,
      },
    ],
  },
};

// English
// Français
// Deutsch
// Italiano
// Español
