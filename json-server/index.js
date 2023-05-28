const { faker } = require('@faker-js/faker');

function generatePlaceholder() {
  const todoListColumns =  {
    toDo: {
      name: 'To Do',
      items: [
        {
          id: 1,
          title: "planning meeting for the second version of the app",
          categories: ["app", "planning"],
          status: "toDo",
          responsible: [
            {
              name: faker.name.fullName(),
              avatar: faker.image.avatar(),
              position: "Project manager"
            }
          ]
        },
        {
          id: 2,
          title: "Second design concept",
          description: "Let's do the extract opposite of the first concept. Light theme, minimalism and lightness",
          categories: ["website", "design"],
          status: "toDo",
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
          id: 5,
          title: "Landing page revision",
          categories: ["design"],
          status: "toDo",
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
          id: 7,
          title: "Home page bugs fixes",
          description: "I found several mistakes. Made a list, attached it below",
          categories: ["website", "frontend"],
          status: "toDo",
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
      ]
    },
    inProgress: {
      name: 'In Progress',
      items: [
        {
          id: 0,
          title: "Pages \"About\" and \"Careers\"",
          description: "All the details are in the file, I'm sure it will turn out cool!",
          categories: ["website", "design"],
          status: "inProgress",
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
          id: 4,
          title: "Secret Marketing Page",
          description: "We need to make a page for a special offer for the most loyal customers",
          categories: ["website", "design"],
          status: "inProgress",
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
          id: 6,
          title: "Modal error",
          description: "Error on close modal window",
          categories: ["frontend"],
          status: "inProgress",
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
          id: 8,
          title: "First design concept",
          description: "Let's try a dark theme and bright colors for accents.",
          categories: ["design", "frontend"],
          status: "inProgress",
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
    },
    completed: {
      name: 'Completed',
      items: [
        {
          id: 3,
          title: "Presentation",
          description: "approved the design of the iOS app, let's make a presentation",
          categories: ["management", "design"],
          status: "completed",
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
      ]
    },
  }

  const responsibleList = [
    {
      name: faker.name.fullName(),
      avatar: faker.image.avatar(),
      position: "Designer"
    },
    {
      name: faker.name.fullName(),
      avatar: faker.image.avatar(),
      position: "Full stack"
    },
    {
      name: faker.name.fullName(),
      avatar: faker.image.avatar(),
      position: "Full stack"
    },
    {
      name: faker.name.fullName(),
      avatar: faker.image.avatar(),
      position: "Frontend"
    },
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
    {
      name: faker.name.fullName(),
      avatar: faker.image.avatar(),
      position: "Project manager"
    },
    {
      name: faker.name.fullName(),
      avatar: faker.image.avatar(),
      position: "Designer"
    }
  ]
  return { "todoListColumns": todoListColumns, "responsibleList": responsibleList }
}

module.exports = generatePlaceholder