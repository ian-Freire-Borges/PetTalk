import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useState } from 'react';

function Depoimentos() {
    const [visiveis, setVisiveis] = useState(8);

  const mostrarMais = () => {
    setVisiveis(prev => prev + 8);
  };
    const Comment = [
  {
      nome: "Ana Souza",
      comentario: "O PetTalk foi uma surpresa maravilhosa! Agora entendo muito melhor as necessidades do meu cachorro. As traduções são precisas e ajudam muito no dia a dia.",
      stars: 5
    },
    {
      nome: "Carlos Mendes",
      comentario: "A proposta é ótima e o app cumpre o que promete. Às vezes a tradução parece genérica, mas no geral é bem útil. Usamos todos os dias aqui em casa.",
      stars: 4
    },
    {
      nome: "Juliana Lima",
      comentario: "Fiquei impressionada com a tecnologia! O app realmente identifica comportamentos do meu gato e me ajuda a entender o que ele quer.",
      stars: 5
    },
    {
      nome: "Rafael Costa",
      comentario: "Funciona muito bem com a Alexa e a integração facilita o uso. Achei que poderia ter mais personalizações para tipos de pet.",
      stars: 4
    },
    {
      nome: "Fernanda Rocha",
      comentario: "No começo fiquei cética, mas o PetTalk me surpreendeu. Consigo identificar sinais de estresse ou fome do meu cachorro com muito mais clareza agora.",
      stars: 5
    },
    {
      nome: "Lucas Ferreira",
      comentario: "O atendimento ao cliente foi excelente quando precisei tirar dúvidas. O produto é inovador e ajuda muito no relacionamento com meu pet.",
      stars: 5
    },
    {
      nome: "Camila Martins",
      comentario: "Gostei bastante, mas acho que poderiam melhorar a interface do app. Fora isso, tem sido bem útil pra entender os miados do meu gato.",
      stars: 3
    },
    {
      nome: "Bruno Almeida",
      comentario: "Minha esposa e eu usamos todos os dias com nosso golden retriever. A tradução dos latidos parece certeira e ele até responde diferente agora.",
      stars: 5
    },
    {
      nome: "Mariana Nunes",
      comentario: "Super interessante! A proposta é muito boa, principalmente para quem tem mais de um pet. Facilitou minha vida!",
      stars: 4
    },
    {
      nome: "João Silva",
      comentario: "A tecnologia é nova, então tem espaço para evoluir. Mas no geral cumpre bem a proposta e eu indicaria para amigos com pets.",
      stars: 4
    },
    {
      nome: "Patrícia Dias",
      comentario: "Achei o preço um pouco salgado, mas como o produto é único no mercado, valeu o investimento. Estou usando há 3 meses.",
      stars: 3
    },
    {
      nome: "Felipe Gomes",
      comentario: "Funciona muito bem e me deu mais segurança para deixar meu cão sozinho em casa. Recebo alertas úteis com base nos sons dele.",
      stars: 5
    },
    {
      nome: "Larissa Ramos",
      comentario: "Adorei a ideia e o app é bem intuitivo. Meu gato é muito expressivo e agora consigo compreender melhor seus miados e comportamentos.",
      stars: 4
    },
    {
      nome: "Eduardo Lopes",
      comentario: "Acho que poderiam incluir mais raças no banco de dados. Meu cão é mestiço e algumas traduções parecem não se aplicar.",
      stars: 2
    },
    {
      nome: "Aline Barros",
      comentario: "Super recomendo para qualquer tutor de pet! Ajudou bastante no adestramento e me deixou mais tranquila em saber como ele está.",
      stars: 5
    },
    {
      nome: "Diego Rocha",
      comentario: "Tecnologia promissora. Ainda tem ajustes a fazer, mas estou gostando bastante da experiência até agora.",
      stars: 4
    },
    {
      nome: "Natália Pires",
      comentario: "A interface com Google Home foi muito fácil de configurar. Uso todos os dias e virou parte da nossa rotina.",
      stars: 5
    },
    {
      nome: "Vinícius Cruz",
      comentario: "O app reconhece os sons rapidamente e dá sugestões práticas. Meu cachorro late muito e agora entendo o motivo!",
      stars: 5
    },
    {
      nome: "Tatiane Moreira",
      comentario: "Vale cada centavo! Senti que fiquei mais próxima do meu gato depois que comecei a usar o PetTalk.",
      stars: 5
    },
    {
      nome: "André Lima",
      comentario: "Funciona, mas em alguns momentos parece genérico. Estou aguardando atualizações com mais precisão.",
      stars: 3
    },
  ];
  return (
    <section id="Comentarios" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Depoimentos De Usuarios Do PetTalk</h2>
        <Row>
           {Comment.slice(0, visiveis).map((Comment, index) => (
             <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center">
              <Card className="text-center shadow-sm mx-auto" style={{ minHeight: '200px', width: '300px' }}>
                <Card.Body>
                  <Card.Title as="h3">{Comment.nome}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{Comment.comentario}</Card.Subtitle>
                  {Array.from({ length: Comment.stars }, (_, i) => (
                  <i key={i} className="bi bi-star-fill text-warning me-1"></i>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
           {visiveis < Comment.length && (
          <div className="text-center mt-4">
            <Button variant="info" className="btn btn-primary rounded-pill cta-btn" onClick={mostrarMais}>Ver Mais</Button>
          </div>
        )}
      </Container>
    </section>
  )
}

export default Depoimentos