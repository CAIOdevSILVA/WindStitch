import { w } from "windstitch";


const Container = w.div(
  `
   w-full
   h-screen 
   duration-500
  `,
 {
  variants: {
    background: {
      light: `bg-slate-300`,
      dark: `bg-gray-800`
    }
  }
 }
)

Container.displayName = "Container"


const HeaderContainer = w.header(
  `
    w-full
    h-20
    px-8
    bg-zinc-800
    flex
    items-center
  `,
  {
    variants:{
      justify: (direction) => (direction === "end" ? "justify-end" : "justify-start")
    }
  }
)

HeaderContainer.displayName = "HeaderContainer"

const StyledForm = w.form(
  `

  `
)

StyledForm.displayName = "StyledForm"

const Button = w.button(
  `
    text-white
    rounded
    font-medium
    duration-500
  `,
  {
    variants:{
      color:{
        light: `
          bg-orange-600
          hover:bg-orange-700
        `,
        dark: `
          bg-sky-600
          hover:bg-sky-700
        `,
      },
      size:{
        sm: `p-2 px-6`,
        lg: `p-4`
      }
    }
  }
)
Button.displayName = "Button"


export { Container, Button, HeaderContainer, StyledForm }