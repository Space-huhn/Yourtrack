// import { faker } from '@faker-js/faker';
const { faker } = require('@faker-js/faker');

function generatePlaceholder() {
  const todoList =  [
  {
    title: "Pages \"About\" and \"Careers\"",
    description: "All the details are in the file, I'm sure it will turn out cool!",
    categories: ["website", "design"],
    responsible: [
      {
        name: faker.name.fullName(),
        avatar: faker.image.avatar(),
        position: "Designer"
      },
      {
        name: faker.name.fullName(),
        avatar: faker.image.avatar(),
        position: "Full stack"
      }
    ]
  },
  {
    title: "planning meeting for the second version of the app",
    categories: ["app", "planning"],
    responsible: [
      {
        name: faker.name.fullName(),
        avatar: faker.image.avatar(),
        position: "Project manager"
      }
    ]
  },
  {
    title: "Second design concept",
    description: "Let's do the extract opposite of the first concept. Light theme, minimalism and lightness",
    categories: ["website", "design"],
    responsible: [
      {
        name: faker.name.fullName(),
        avatar: faker.image.avatar(),
        position: "Frontend"
      },
      {
        name: faker.name.fullName(),
        avatar: faker.image.avatar(),
        position: "Designer"
      },
    ]
  },
  {
    title: "Presentation",
    description: "approved the design of the iOS app, let's make a presentation",
    categories: ["project management", "design"],
    responsible: [
      {
        name: faker.name.fullName(),
        avatar: faker.image.avatar(),
        position: "Frontend"
      },
      {
        name: faker.name.fullName(),
        avatar: faker.image.avatar(),
        position: "Designer"
      },
    ]
  },
  {
    title: "Secret Marketing Page",
    description: "We need to make a page for a special offer for the most loyal customers",
    categories: ["website", "design"],
    responsible: [
      {
        name: faker.name.fullName(),
        avatar: faker.image.avatar(),
        position: "Product manager"
      },
      {
        name: faker.name.fullName(),
        avatar: faker.image.avatar(),
        position: "Designer"
      },
    ]
  },
  {
    title: "Landing page revision",
    categories: ["design"],
    responsible: [
      {
        name: faker.name.fullName(),
        avatar: faker.image.avatar(),
        position: "Product manager"
      },
      {
        name: faker.name.fullName(),
        avatar: faker.image.avatar(),
        position: "Designer"
      },
    ]
  },
  {
    title: "Modal error",
    description: "Error on close modal window",
    categories: ["frontend"],
    responsible: [
      {
        name: faker.name.fullName(),
        avatar: faker.image.avatar(),
        position: "Frontend"
      },
      {
        name: faker.name.fullName(),
        avatar: faker.image.avatar(),
        position: "Backend"
      },
    ]
  },
  {
    title: "Home page bugs fixes",
    description: "I found several mistakes. Made a list, attached it below",
    categories: ["website", "frontend"],
    responsible: [
      {
        name: faker.name.fullName(),
        avatar: faker.image.avatar(),
        position: "Product manager"
      },
      {
        name: faker.name.fullName(),
        avatar: faker.image.avatar(),
        position: "Frontend"
      },
    ]
  },
  {
    title: "First design concept",
    description: "Let's try a dark theme and bright colors for accents.",
    categories: ["design", "frontend"],
    responsible: [
      {
        name: faker.name.fullName(),
        avatar: faker.image.avatar(),
        position: "Designer"
      },
      {
        name: faker.name.fullName(),
        avatar: faker.image.avatar(),
        position: "Frontend"
      },
    ]
  }
]
  return { "todoList": todoList }
}

module.exports = generatePlaceholder