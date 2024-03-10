# CS Capstone workshop - Frontend web dev with React

In this workshop, we will build out a frontend app with React, which will allow users to create Todo items with due dates, and set their status to complete / incomplete. Users will be able to filter the todos by name, and their status will show as "overdue" if they are incomplete and past their due date.

The concepts we will learn today are:

1. Creating a new React app with the Vite build tool
2. The development process
3. Creating your first edits
4. React components & component-based design
5. Props, & passing data "down" and "up"
6. State, & how to properly mutate
7. Data input
8. Styling

This will be a "follow-along"-style coding tutorial. We will stop at regular points to make sure that people can follow along ok.

An example of what this app will look like when complete is given here (depending on how you style the app):

![](./spec/Todo%20list%20complete%20example.png)

## Steps

We will follow this general series of steps today:

### Step 0: Creating your first React app

Firstly, we'll use a _different_ project - one that you will create yourself using `npm create vite@latest`. Here we will show you how to:

- Create a new React app from scratch using Vite.
- Install dependencies.
- Start your dev environment.
- Make your first edits, demonstrating Hot module reloading.
- Explain the folder structure of the Vite+React project.

After this step, we will move onto the actual Todo-list project.

### Step 1: Starting the Todo list

In this step you will:

- Get your own template project repo setup from GitHub Classroom.
- Get you up and running with development in this new project.
- Make your first edits.
- Create an actual list! (`<ul> <li>` etc).

### Step 2: Components

In this step, you will:

- Learn about components and component-based design.
- Create a `TodoList` to display a list of todos.
- Create a `TodoListItem` component to display a single todo in the list.

### Step 3: Props and loops

In this step, you will:

- Use _props_ to pass data to child components.
- Use the JavaScript array `map()` function to render lists of components.
- Use `dayjs` to render temporal data "nicely".

### Step 4: Conditionals

In this step, you will:

- Learn how to render different content _conditionally_ using _ternary_ operators.
- Learn about more of `dayjs`'s capability, to compare dates.
- Display a todo's complete / pending / overdue status using this knowledge.

### Step 5: State and events

In this step, you will:

- Use the `useState()` hook to define your todo list as _stateful_ data - which, when mutated correctly, will cause your UI to automatically update to reflect the changes.
- Define _event_ props to pass change requests (such as "toggle completed status" and "delete todo item") _up_ the component hierarchy (from children to parents).
- Handle these events to apppropriately mutate your todo list's state.

### Step 6: Styling

In this step, you will:

- Learn about the difference between _inline styles_, _global CSS_, and _CSS modules_ to style components
- Style your todo list however you like.

At the end of this step will be the last "compulsory" step in the workshop. We have two more steps which don't teach new content, but will give you more practice and help turn your app into something truly useful!

## Step 7: Searching

In this step, you will:

- Add a search bar (`<input>`) to the top of your todo list, keeping track of its value using _binding_.
- Filter the displayed todo items based on the search text.
- Style your search bar.

## Step 8: Creating todos

In this final step, you will:

- Add a "new todo" form to the page, (optionally) letting users show / hide the form as desired.
- Hook up the appropriate props / events / state mutations to allow users to add new todo items.
- Style your form.
