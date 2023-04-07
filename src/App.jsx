import { useState } from "react"

import { Container, Button, HeaderContainer, StyledForm } from "./App.style"

function App() {
  const [theme, setTheme] = useState("light")
  const end = "end"
  return (
    <Container background={theme}>
      <HeaderContainer
        direction={end}
      >
        <Button 
          color={theme}
          size="lg"
          onClick={() => {
            setTheme( theme === "light" ? "dark" : "light")
          }}
        >Switch Theme</Button>
      </HeaderContainer>

      <div className="w-full ">
        <StyledForm>
          <div>
            <label>Nome</label>
            <input type="text" />
          </div>
          <div>
            <label>Email</label>
            <input type="text" />
          </div>
          <div>
            <label>Senha</label>
            <input type="text" />
          </div>

          <Button 
            color={theme}
            size="sm"
            type="submit"
            onClick={(e) => {
              e.preventDefault()
            }}
          >Enviar</Button>
        </StyledForm>
      </div>
    </Container>
  )
}

export default App
