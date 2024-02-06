'use client'

interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
      {children}
    </div>
  )
}

export default Container

//Explanation :

/*This code is written in TypeScript and utilizes React. Let's break it down:

1. `interface ContainerProps`: This defines a TypeScript interface named `ContainerProps`. It specifies that any object implementing this interface must have a property called `children` of type `React.ReactNode`.

2. `const Container: React.FC<ContainerProps> = ({ children }) => { ... }`: This declares a functional component named `Container` which takes in props conforming to the `ContainerProps` interface. It's written in arrow function syntax with destructuring of the `children` prop. The component simply renders a `<div>` element wrapping its children.

3. `export default Container`: This exports the `Container` component as the default export of the module, making it available for use in other parts of the application.

In summary, this code defines a reusable React component called `Container` which wraps its children in a `<div>` element. The component is designed to accept any valid React elements as children.*/
