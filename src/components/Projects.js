import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/eplay.svg";
import projImg2 from "../assets/img/efood.svg";
import projImg3 from "../assets/img/dinsey-clone.svg";
import projImg4 from "../assets/img/barcode.svg"
import projImg5 from "../assets/img/userAuth.svg"
import projImg6 from "../assets/img/building.png"
import projImg7 from "../assets/img/snakegame.png"
import projImg8 from "../assets/img/CardAuthenticator.svg"

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const frontEnd = [
    {
      title: "Loja de games fictícia",
      description: "Visando focar na conectividade com uma API para manipular sua exibição no front end, este projeto simula um e-coomerce ficticio para uma loja de games",
      imgUrl: projImg1,
      link: "https://eplay-psi.vercel.app/"
    },
    {
      title: "Delivery de restaurantes",
      description: "Tendo como foco a interface de preenchimento de dados para checkout em uma compra ficticia, este projeto simula um delivery de restaurantes que indexa os mesmos da melhor forma",  
      imgUrl: projImg2,
      link: "https://efood-amber-xi.vercel.app/"
    },
    {
      title: "Landing Page Dinsey+",
      description: "Buscando uma melhor semantica de HTML e CSS da Landing page da Disney+, este projeto reconstroi a mesma com melhores tags para facilitar sua indexação aos motores de busca",
      imgUrl: projImg3,
      link: "https://clone-disneyplus-j4v2.vercel.app/"
    },
  ];

  const backEnd = [
    {
      title: "API para autenticação de usuários",
      description: "Após necessitar de uma API para autenticar o acesso de usuários, realizei a criação desta para facilitar meus outros projetos pessoais, a API foi construída em Node.js e utiliza do token JWT para melhor segurança e o mongodb como noSQL para facilitar o uso",
      imgUrl: projImg5,
      link: "https://github.com/brunobahri/userAuthenticator"
    },
    {
      title: "API para geração de código de barras",
      description: "Em uma situação real em um controle de estoque, não tinhamos uma solução de fácil uso para gerar códigos de barras proveninete de textos, desenvolvi esse projeto completo para utilização em um website interno. Esta simples solução trouxe uma economia de tempo incalculavel no ambiente de trabalho",
      imgUrl: projImg4,
      link: "https://github.com/brunobahri/barcode"
    },
    {
      title: "API para autenticação de cartões",
      description: "Construída em Java com Spring Boot a API tem como função realizar a validação primaria de um cartão. O projeto utiliza o algoritmo de Luhn para o número do cartão, além de verificar a validade e a bandeira do mesmo.",
      imgUrl: projImg8,
      link: "https://github.com/brunobahri/CardAuthenticator"
    }
  ]

  const building = [
    {
      title: "Recriação do Jogo Snake em C",
      description: "Com o intuíto de aprender mais sobre ponteiros e endereços na memória em C, este projeto recria o jogo Snake na liguagem C",
      imgUrl: projImg7,
      link: "https://github.com/brunobahri/snake_game"
    },
    {
      title: "",
      description: "",
      imgUrl: projImg6,
    },
    
  ]



  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <p>Sinta-se a vontade para explorar meus projetos</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Front end</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Back end</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Variados</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                        <p>Projetos com paginas focadas em mostrar o conhecimento em front end, clique sob as imagens para ir até o projeto</p>
                      <Row>
                        {
                          frontEnd.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>API's completas com documentação, se tratando na lógica do servidor, abordo diversas linguagens e frameworks diferentes, clique sobre as imagens para ir até o repositorio  e conhecer mais</p>
                      <Row>
                        {
                          backEnd.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Projetos variados, de cunho estudantil para aprendizados em novas tecnologias e linguagens</p>
                      <Row>
                        {
                          building.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="right background"></img>
    </section>
  )
}
