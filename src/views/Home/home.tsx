import React, { useEffect, useState } from 'react';
import { Heading, Text, Switch, Button, Tooltip } from '@chakra-ui/react';

import './home.style.scss';

function Home() {
  const [questions, setQuestions] = useState<boolean[]>([]);

  useEffect(() => console.log(questions), [questions]);
  useEffect(() => {
    const totalOfQuestions = document.querySelectorAll('.question');
    const value: any[] = [];

    totalOfQuestions.forEach((item) => value.push(false));

    setQuestions(value);
  }, []);

  const markQuestion = (props: { question: number }) => {
    const index = props.question - 1;
    const value = questions.map((question, i) => {
      if (i === index) return !question;

      return question;
    });

    setQuestions(value);
  };

  return (
    <main className='Home'>
      <Heading as='h1'>Título do Formulário</Heading>
      <section className='question'>
        <Switch
          colorScheme='green'
          onChange={() => markQuestion({ question: 1 })}
        />
        <div className='text'>
          <Text as='p'>Você comprou o imóvel depois de 2017?</Text>
        </div>
      </section>
      <section className='question'>
        <Switch
          colorScheme='green'
          onChange={() => markQuestion({ question: 2 })}
        />
        <div className='text'>
          <Text as='p'>
            O valor de base para o cálculo do imposto de transmissão foi o valor
            venal de IPTU?{' '}
          </Text>
        </div>
      </section>
      <section className='finish'>
        <span>
          <Tooltip
            placement='top'
            textAlign='justify'
            label='Quando você comprou o imóvel, foi emitida pela prefeitura uma guia para pagamento do imposto de transmissão, em razão da venda do imóvel. Nessa guia deve constar o valor da base de cálculo do imposto. Pegue a guia e verifique se o valor que consta é o que você pagou na compra ou o valor venal.'
          >
            Não sei como verificar meu imposto de transmissão
          </Tooltip>
        </span>
        <Button colorScheme='green'>Verificar</Button>
      </section>
    </main>
  );
}

export default Home;
