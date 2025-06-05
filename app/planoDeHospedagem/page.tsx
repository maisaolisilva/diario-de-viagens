"use client"
import styles from "./page.module.css";
import { checkout } from "../lib/checkoutCompra";
import Card from "../componentes/Card";
import { useEffect, useState } from "react";

export default function Home() {
    const [url, setUrl] = useState('colagem2.png'); // Imagem padrão para telas maiores
    const [termos, setTermos] = useState(false);
    
    useEffect(() => {
        const updateImage = () => {
          if (window.innerWidth < 800) {
            setUrl('colagem.png'); // Imagem para telas menores
          } else {
            setUrl('colagem2.png'); // Imagem para telas maiores
          }
        };
        updateImage(); // Define a imagem inicial com base no tamanho da tela
        window.addEventListener('resize', updateImage); // Escuta mudanças de tamanho da janela

        return () => {
        window.removeEventListener('resize', updateImage); // Remove o listener ao desmontar
        };
    }, []);


  return (
    <main>
      <Card titulo="Plano de Hospedagem" url={url}/>
      <div className={styles.page}>
        <p>O plano no valor de R$ 129,90 mensais dá direito a 7 diárias por ciclo de assinatura, válidas por 12 meses, contados a partir do 8º dia após a assinatura, podendo ser utilizadas em até 2 períodos distintos. As diárias são para até 4 adultos mais 2 crianças de até 3 anos.</p>
        <p>As diárias são válidas para hospedagem em chalés localizados em um condomínio situado em Maringá - MG, na região de Visconde de Mauá. Para conhecer melhor o local, acesse: <a href="https://www.condominioshallonadonai.com.br" target="_blank" rel="noopener noreferrer" className={styles.ref_site}>www.condominioshallonadonai.com.br</a>.</p>
        <p>Leia atentamente todas as regras antes de assinar.</p>

        <h2>Regras da Assinatura</h2>
        <ul>
          <li>Cancelamento gratuito até 7 dias após a compra;</li>
          <li>A partir do 8º dia, o cliente poderá informar suas datas preferenciais e verificar a disponibilidade entrando em contato pelo WhatsApp (24) 99832-6422 ou pelo e-mail diariodeviagens.inf@gmail.com;</li>
          <li>É possível alterar as datas com no mínimo 30 dias de antecedência, exceto em casos de doença comprovada, em que a remarcação será permitida conforme a disponibilidade do condomínio;</li>
          <li>Em caso de não comparecimento sem justificativa médica, as diárias serão consideradas utilizadas;</li>
          <li>Caso deseje transferir a titularidade da assinatura, entre em contato pelo WhatsApp ou e-mail;</li>
          <li>Para datas em alta temporada (junho, julho, dezembro, janeiro e feriados), haverá um acréscimo de 18% sobre o valor total do plano por diária;</li>
          <li>As diárias não são cumulativas e deverão ser utilizadas dentro de 12 meses a partir do 8º dia de assinatura;</li>
          <li>O acréscimo será pago no check-in, via Pix ou transferência bancária. Pagamentos via cartão de crédito estarão sujeitos a taxas adicionais.</li>
        </ul>

        <h2>Configuração do Quarto</h2>
        <ul>
          <li>
            Cozinha equipada com:
            <ul>
              <li>Fogão com forno,</li>
              <li>Cafeteira elétrica,</li>
              <li>Geladeira,</li>
              <li>Utensílios básicos para cozinhar e servir</li>
            </ul>
          </li>
          <li>1 banheiro;</li>
          <li>1 ventilador;</li>
          <li>1 TV a cabo</li>
          <li>1 lareira;</li>
          <li>
            Rouparia básica:
            <ul>
              <li>edredom,</li>
              <li>cobertor,</li>
              <li>travesseiros</li>
            </ul>
          </li>
        </ul>

        <h2>Opções de Acomodação</h2>
        <ul>
          <li>1 cama de casal + 1 bicama de solteiro;</li>
          <li>2 camas de casal.</li>
        </ul>

        <h2>Serviços não inclusos</h2>
        <ul>
          <li>
            <p>Não oferecemos:</p>
            <ul>
              <li>Café da manhã ou qualquer outra refeição;</li>
              <li>Serviço de limpeza durante a estadia. A taxa de limpeza é opcional e poderá ser cobrada no check-out;</li>
              <li>Não oferecemos kit para uso da lareira (poderá ser comprado no condomínio ou na região);</li>
              <li>Lençóis, fronhas e toalhas (podem ser levados ou adquiridos no condomínio ou na região).</li>
            </ul>
          </li>
        </ul>

        <h2>Regras para Hospedagem</h2>
        <ul className="lista">
          <li>Check-in a partir das 14h (poderá ser antecipado para às 10h, caso o chalé esteja liberado);</li>
          <li>Check-out até às 12h (poderá ser estendido até às 15h, caso o chalé esteja liberado).</li>
        </ul>
        <div className={styles.checkbox}>
          <input className={styles.box} type="checkbox" id="concorda" name="concorda" value="concorda" onClick={_ => setTermos(valorAntigo => !valorAntigo)}/>
          <label htmlFor="concorda" className={styles.label_box}>Li e concordo com os <a href="/Termos e Condições Gerais de Uso e Adesão.pdf" className={styles.ref_termo} target="_blank">Termos de uso</a> e a <a href="/Política de Privacidade.pdf" className={styles.ref_termo} target="_blank">Política de Privacidade</a> (é necessário concordar para o botão de assinatura ser habilitado).</label>
        </div>
        <div className={styles.divBotao}><button className={styles.botao} onClick={() => checkout("price_1RWh4mJCpWARB20ShxsOwogt", "Pacote de Diárias")} disabled={!termos}>Assinar Plano</button></div>
      </div>
    </main>
  );
}
