// Navegação principal com menu lateral.

import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from "react-navigation";

// Telas Nativas
import Matricula from '../pages/NativeMatricula';
import AulasHoje from '../pages/NativeAulasHoje';
import CartaoFeevale from '../pages/WebviewCartaoFeevale';
import Configuracao from '../pages/NativeConfiguracao';
import Sair from '../pages/NativeSair';

// Telas Webview
import MatriculaOnline from '../pages/WebViewMatriculaOnline';
import Estacionamento from '../pages/WebViewEstacionamento';
import FaleFeevale from '../pages/WebViewFaleComAFeevale';
import Financeiro from '../pages/WebViewConsultaFinanceira';
import GuiaAcad from '../pages/WebViewGuiaAcademico';
import InfCadastrais from '../pages/WebViewInformacoesCadastrais';
import MinhasMens from '../pages/WebViewMinhasMensagens';
import MinhasSoli from '../pages/WebViewMinhasSolicitacoes';
import Sobre from '../pages/WebViewSobre';
import Sos from '../pages/WebViewSOSFeevale';
import Biblioteca from '../pages/WebViewBiblioteca';

// Itens da gaveta (menu lateral)
const DrawerNavigator = createDrawerNavigator({

    Matricula: {
      screen: Matricula,
      navigationOptions: {
        drawerLabel: "Matrícula",
        title: "Matrícula",
      },
    },

    MatriculaOnline: {
      screen: MatriculaOnline,
      navigationOptions: {
        title: "Matrícula Online",
      },
    },

    AulasHoje: {
      screen: AulasHoje,
      navigationOptions: {
        title: "Aulas Hoje"
      }
    },

    Biblioteca: {
      screen: Biblioteca,
      navigationOptions: {
        title: "Biblioteca"
      }
    },

    CartaoFeevale: {
       screen: CartaoFeevale,
       navigationOptions: {
         title: "Cartão Feevale"
       }
     },
 
     Estacionamento: {
       screen: Estacionamento,
       navigationOptions: {
         title: "Estacionamento"
       }
     },

     Financeiro: {
        screen: Financeiro,
        navigationOptions: {
         title: "Financeiro"
       }
     },

     GuiaAcad: {
        screen: GuiaAcad,
        navigationOptions: {
          title: "Guia Acadêmico"
       }
     },

     InfCadastrais: {
        screen: InfCadastrais,
        navigationOptions: {
          title: "Informações Cadastrais"
       }
     },

     MinhasMens: {
        screen: MinhasMens,
        navigationOptions: {
          title: "Minhas Mensagens"
       }
     },

     MinhasSoli: {
        screen: MinhasSoli,
        navigationOptions: {
         title: "Minhas Solicitações"
       }
     },

     Sos: {
        screen: Sos,
        navigationOptions: {
         title: "SOS Feevale"
       }
     },

     FaleFeevale: {
        screen: FaleFeevale,
        navigationOptions: {
         title: "Fale com a Feevale"
       }
     },

     Sobre: {
       screen: Sobre,
       navigationOptions: {
         title: "Sobre o Aplicativo"
       }
     },

     Configuracao: {
        screen: Configuracao,
        navigationOptions: {
         title: "Configurações"
        }
     },

    //  Disciplina: {
    //   screen: Disciplina,
    //   navigationOptions: {
    //     title: "Disciplina",
    //   },
    // },

     Sair: {
       screen: Sair,
       navigationOptions: {
         title: "Sair"
       }
     },
},
  {
    initialRouteName: 'Matricula',
    drawerBackgroundColor: '#5EC135',
    contentOptions: {
      labelStyle: {
        color: 'white',
      },
    },
  },
);


const Menu = createAppContainer(DrawerNavigator);

export default Menu;