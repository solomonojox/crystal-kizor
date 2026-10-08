// All copy, links and imagery live here. Replace `href: "#"` with real URLs
// and set `image` to a path in /public (e.g. "/images/coka.jpg") when assets arrive.
export type Brand = {
  id: string;
  name: string;
  role: string;
  blurb: string;
  cta: string;
  href: string;
  ratio: string;
  image?: string;
  imageLabel: string;
};

export type Group = { id: string; title: string; line: string; brands: Brand[] };

export const groups: Group[] = [
  {
    id: "build",
    title: "Build",
    line: "Buildings, interiors and objects made for their climate and context.",
    brands: [
      {
        id: "coka",
        name: "Studio COKA",
        role: "Architecture, interior design and construction",
        blurb: "A studio focused on thoughtful, climate-responsive design, from first sketch to finished building.",
        cta: "Start a project",
        href: "#",
        ratio: "4/3",
        imageLabel: "Project image",
      },
      {
        id: "elevated",
        name: "ELEvated",
        role: "Furniture and product design",
        blurb: "Functional, well-designed products rooted in African context, materials and ideas.",
        cta: "See the collection",
        href: "#",
        ratio: "4/3",
        imageLabel: "Product image",
      },
    ],
  },
  {
    id: "teach",
    title: "Teach",
    line: "Sharing what building a practice has taught her.",
    brands: [
      {
        id: "tea",
        name: "The Effective Architect",
        role: "Architecture education and media",
        blurb: "Helps architects and built-environment professionals learn, grow and build better careers.",
        cta: "Start learning",
        href: "#",
        ratio: "4/3",
        imageLabel: "TEA image",
      },
      {
        id: "speaking",
        name: "Speaking",
        role: "Talks and conversations",
        blurb: "Architecture, climate-responsive design, African cities, entrepreneurship and the built environment.",
        cta: "Invite Crystal to speak",
        href: "#",
        ratio: "4/3",
        imageLabel: "Stage photo",
      },
    ],
  },
  {
    id: "serve",
    title: "Serve",
    line: "Investing in children and young people.",
    brands: [
      {
        id: "ako",
        name: "AKO Alliance",
        role: "Education access and opportunity",
        blurb: "Expanding access to education and creating opportunities for children and young people.",
        cta: "Get involved",
        href: "#",
        ratio: "4/3",
        imageLabel: "AKO image",
      },
      {
        id: "alive",
        name: "Alive and Free",
        role: "Christian youth movement",
        blurb: "Helping young people walk in truth, healing, freedom, identity, purpose and life in Christ.",
        cta: "Join the movement",
        href: "#",
        ratio: "4/3",
        imageLabel: "Movement image",
      },
    ],
  },
  {
    id: "think",
    title: "Think",
    line: "The research and writing that feeds everything else.",
    brands: [
      {
        id: "writing",
        name: "Research and writing",
        role: "Ideas, authorship and media",
        blurb: "Architecture, research, writing and media published directly under the Crystal Kizor name.",
        cta: "Read the latest",
        href: "#",
        ratio: "4/3",
        imageLabel: "Editorial image",
      },
    ],
  },
];

export const allBrands: Brand[] = groups.flatMap((g) => g.brands);

// Each visitor type points to exactly one next step.
export const paths: { label: string; brandId: string }[] = [
  { label: "I'm planning a building or interior", brandId: "coka" },
  { label: "I'm looking for furniture or products", brandId: "elevated" },
  { label: "I'm an architect growing my career", brandId: "tea" },
  { label: "I'm organising an event", brandId: "speaking" },
  { label: "I want to help children learn", brandId: "ako" },
  { label: "I'm a young person looking for purpose", brandId: "alive" },
  { label: "I'm here for the ideas", brandId: "writing" },
];
