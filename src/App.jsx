import { useState } from "react"

import { Container, Button, HeaderContainer, StyledForm, ContainerInput,Input } from "./App.style"

function App() {
  const [theme, setTheme] = useState("light")
  const [form, setForm] = useState([{
    name: "",
    email: "",
    password: ""
  }])

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setForm({...form, [name]:value })
  }

  return (
    <Container background={theme}>
      <HeaderContainer
       justify={"end"}
      >
        <Button 
          color={theme}
          size="lg"
          onClick={() => {
            setTheme( theme === "light" ? "dark" : "light")
          }}
        >Switch Theme</Button>
      </HeaderContainer>

      <div className="w-full mt-20 flex justify-center items-center ">
        <StyledForm>
          <ContainerInput>
            <label className={`${theme === "light" ? "text-zinc-900" : "text-white"} font-medium`}>Nome</label>
            <Input type="text" name="name" value={form.name}  onChange={handleFormChange}/>
          </ContainerInput>
          <ContainerInput>
            <label className={`${theme === "light" ? "text-zinc-900" : "text-white"} font-medium`}>Email</label>
            <Input type="email" name="email" value={form.email} onChange={handleFormChange}/>
          </ContainerInput>
          <ContainerInput>
            <label className={`${theme === "light" ? "text-zinc-900" : "text-white"} font-medium`}>Senha</label>
            <Input type="password" name="password" value={form.password} onChange={handleFormChange}/>
          </ContainerInput>

          <Button 
            color={theme}
            size="sm"
            type="submit"
            onClick={(e) => {
              e.preventDefault()
              console.log(form)
            }}
          >Enviar</Button>
        </StyledForm>
      </div>
    </Container>
  )
}

export default App
