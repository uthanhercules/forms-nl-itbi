import { useState } from 'react';
import { Heading, Text, Switch, Button, Tooltip } from '@chakra-ui/react';

import './home.style.scss';

function Home() {
  const [questions, setQuestions] = useState<boolean[]>([false, false]);
  const [status, setStatus] = useState<string>('');
  const [msg, setMsg] = useState<string>('');
  const [bodyMsg, setBodyMsg] = useState<string[]>();

  const markQuestion = (props: { question: number }) => {
    const index = props.question - 1;
    const value = questions.map((question, i) => {
      if (i === index) return !question;

      return question;
    });

    setQuestions(value);
  };

  const verifyForm = () => {
    const allTrue = questions.every((value) => value);
    const modal: any = document.querySelector('.modal');

    if (allTrue) {
      setStatus('PERFECT');
      setMsg('Tudo leva a crer que você tem direito à restituição!');
      setBodyMsg([
        'Para que você tenha um atendimento personalizado, com mais tempo para falar sobre cálculos de verificação do valor de restituição, bem como, para que possa tirar eventuais dúvidas, encaminharemos você ao agendamento para conversar com advogado responsável por essas demandas',
        'Essa consulta não é cobrada e o agendamento é online, tudo muito fácil e rápido. É só clicar no link que vai direto para a agenda do advogado e escolher o melhor dia e o melhor horário para você!',
      ]);
    } else {
      setStatus('ERROR');
      setMsg('Infelizmente, não há como pedir a restituição do valor pago');
      setBodyMsg([
        'já que tem mais de 5 anos que o imóvel foi comprado, não sendo possível pedir judicialmente :/',
        'Além disso, o imposto foi calculado em cima do valor do negócio, do valor que efetivamente foi pago na venda, o que está correto, não havendo direito à restituição. Só cabe o pedido de restituição nos casos em que o valor do imposto tenha sido calculado com base no valor venal de IPTU.',
      ]);
    }

    modal.style.display = 'flex';
  };

  const closeModal = () => {
    const modal: any = document.querySelector('.modal');
    modal.style.display = 'none';
  };

  const redirect = () => {
    window.open(
      'https://calendly.com/nuneselisboa/agendeumaconsulta',
      '_blank'
    );

    closeModal();
  };

  return (
    <>
      <article className='modal hidden'>
        <section className='body'>
          <Heading as='h2'>{msg}</Heading>
          {bodyMsg?.map((item) => (
            <Text as='p'>{item}</Text>
          ))}
          <Button
            onClick={() => (status === 'PERFECT' ? redirect() : closeModal())}
            colorScheme={status === 'PERFECT' ? 'green' : 'red'}
          >
            {status === 'PERFECT'
              ? 'Quero entrar em contato!'
              : "É uma pena :'("}
          </Button>
        </section>
      </article>

      <main className='Home'>
        <Heading as='h1'>Restituição de ITBI</Heading>
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
              O valor de base para o cálculo do imposto de transmissão foi o
              valor venal de IPTU?{' '}
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
          <Button
            onClick={() => {
              verifyForm();
            }}
            colorScheme='green'
          >
            Verificar minha Situação
          </Button>
        </section>
      </main>
    </>
  );
}

export default Home;
