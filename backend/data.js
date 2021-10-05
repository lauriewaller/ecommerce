import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Laurie Waller",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Echeveria "Azulita"',
      category: "succulents",
      image: "/images/echeveria-azulita.jpeg",
      price: 10,
      countInStock: 15,
      brand: "BestBiz",
      rating: 4.5,
      numReviews: 14,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: 'Echeveria "Ramillette"',
      category: "succulents",
      image: "/images/echeveria-ramillette.jpeg",
      price: 10,
      countInStock: 15,
      brand: "BestBiz",
      rating: 4.5,
      numReviews: 14,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: 'Graptoveria "Opalina"',
      category: "succulents",
      image: "/images/graptoveria-opalina.jpeg",
      price: 5,
      countInStock: 15,
      brand: "BestBiz",
      rating: 4.5,
      numReviews: 14,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: 'Echeveria "Esther"',
      category: "succulents",
      image: "/images/echeveria-esther.jpeg",
      price: 7,
      countInStock: 25,
      brand: "Harmony",
      rating: 4.5,
      numReviews: 14,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: 'Echeveria "Chroma"',
      category: "succulents",
      image: "/images/echeveria-chroma.jpeg",
      price: 7,
      countInStock: 25,
      brand: "Harmony",
      rating: 5,
      numReviews: 14,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Sedum pachyphyllum",
      category: "succulents",
      image: "/images/sedum-pachyphyllum.jpeg",
      price: 5,
      countInStock: 7,
      brand: "Harmony",
      rating: 5,
      numReviews: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Rebutia krainziana",
      category: "cacti",
      image: "/images/rebutia-krainziana.jpeg",
      price: 9,
      countInStock: 7,
      brand: "Harmony",
      rating: 5,
      numReviews: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Apple cactus",
      category: "cacti",
      image: "/images/apple-cactus.jpeg",
      price: 9,
      countInStock: 7,
      brand: "Harmony",
      rating: 5,
      numReviews: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Bishop's cap",
      category: "cacti",
      image: "/images/bishops-cap.jpeg",
      price: 9,
      countInStock: 5,
      brand: "Harmony",
      rating: 5,
      numReviews: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Mammillaria schwarzii",
      category: "cacti",
      image: "/images/mammillaria-schwarzii.jpeg",
      price: 9,
      countInStock: 5,
      brand: "Harmony",
      rating: 5,
      numReviews: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Thimble Cactus",
      category: "cacti",
      image: "/images/mammillaria-thimble-cactus.jpeg",
      price: 9,
      countInStock: 5,
      brand: "Harmony",
      rating: 5,
      numReviews: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Rose Quartz",
      category: "cacti",
      image: "/images/echinopsis-rose-quartz.jpeg",
      price: 9,
      countInStock: 5,
      brand: "Harmony",
      rating: 5,
      numReviews: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Watch Chain",
      category: "succulents",
      image: "/images/crassula-muscosa-watch-chain.jpeg",
      price: 9,
      countInStock: 5,
      brand: "Harmony",
      rating: 5,
      numReviews: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Majesty Palm",
      category: "houseplants",
      image: "/images/majesty-palm.jpeg",
      price: 15,
      countInStock: 5,
      brand: "Harmony",
      rating: 5,
      numReviews: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Pilea PEPEROMIOIDES",
      category: "houseplants",
      image: "/images/pilea.jpeg",
      price: 15,
      countInStock: 5,
      brand: "Harmony",
      rating: 5,
      numReviews: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Swiss Cheese",
      category: "houseplants",
      image: "/images/swiss-cheese.jpeg",
      price: 15,
      countInStock: 5,
      brand: "Harmony",
      rating: 5,
      numReviews: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Money Tree",
      category: "houseplants",
      image: "/images/money-tree.jpeg",
      price: 20,
      countInStock: 5,
      brand: "Harmony",
      rating: 5,
      numReviews: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Yucca Cane",
      category: "houseplants",
      image: "/images/yucca-cane.jpeg",
      price: 30,
      countInStock: 5,
      brand: "Harmony",
      rating: 5,
      numReviews: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Fiddle Leaf Fig",
      category: "houseplants",
      image: "/images/fiddle-leaf.jpeg",
      price: 25,
      countInStock: 5,
      brand: "Harmony",
      rating: 5,
      numReviews: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Mass Cane",
      category: "houseplants",
      image: "/images/mass-cane.jpeg",
      price: 35,
      countInStock: 5,
      brand: "Harmony",
      rating: 5,
      numReviews: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
  ],
};
export default data;
