import React from "react";
import { ButtonComponent } from '../../components/button/index'
import { DivButtons, H1, H3, Main, SectionButtons, Image, H4, DivIconButtons,TitleDiv } from "../../styles/homePage/style";
import print1 from '../../assets/img/print1.png';
import print2 from '../../assets/img/print2.png';
import print3 from '../../assets/img/print3.png';
import print4 from '../../assets/img/print4.png';
import print5 from '../../assets/img/print5.png';
import print6 from '../../assets/img/print6.png';
import print7 from '../../assets/img/print7.png';

export function HomePage (){
    return(
        <Main>
            <TitleDiv>
                <H1>Demonstração do componente Button</H1>
            </TitleDiv>
            <SectionButtons>
                <DivButtons>
                    <H3>Exemplo de button com tema primary</H3>
                    <Image src={print1} alt='print 1'/>
                    <ButtonComponent primary={true} text='Text' desativado={false}/>
                    <H3>Desabilitado</H3>
                    <Image src={print2} alt='print 2'/>
                    <ButtonComponent primary={true} text='Text' desativado={true}/>
                </DivButtons>
                <DivButtons>
                    <H3>Exemplo de button com tema secondary</H3>
                    <Image src={print3} alt='print 3'/>
                    <ButtonComponent primary={false} text='Text' desativado={false}/>
                    <H3>Desabilitado</H3>
                    <Image src={print4} alt='print 4'/>
                    <ButtonComponent primary={false} text='Text' desativado={true}/>
                </DivButtons>
                <DivIconButtons>
                    <H3>Buttons com ícone:</H3>
                    <H4>Ícone com valor 'arrow-right'</H4>
                    <Image src={print5} alt='print 5'/>
                    <ButtonComponent primary={true} text='Text' desativado={false} icon={'arrow-right'}/>
                    <H4>ícone 'check', tema 'secondary'</H4>
                    <Image src={print6} alt='print 6'/>
                    <ButtonComponent primary={false} text='Text' desativado={false} icon={'check'}/>
                    <H4>Ícone 'refresh'</H4>
                    <Image src={print7} alt='print 7'/>
                    <ButtonComponent primary={true} text='Text' desativado={false} icon={'refresh'}/>
                </DivIconButtons>
            </SectionButtons>
        </Main>
    );
};