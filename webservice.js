// Consulta ao WebService da Feevale
import axios from 'axios';

// TODO: Criar flag para verificar a plataforma do usuário: Platform.OS === 'ios'

// Cria a instância do Axios que fará as requisições.
const instance = axios.create({
    baseURL: 'http://www.feevale.br/BusService/AppAluno/Aluno/AppAluno.svc',
    timeout: 30000,
    headers: {'content-type': 'text/xml; charset=utf-8;'}
});

// Executa a requisição de autenticação da sessão de usuário.
function LoginUsuario (usuarioCodigo, usuarioSenha) {  
    instance.post('', 
        `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:app="AppAluno">
            <soapenv:Header/>
            <soapenv:Body>
            <app:LogarBiblioteca>
                <app:codPessoa>${usuarioCodigo}</app:codPessoa>
                <app:senha>${usuarioSenha}</app:senha>
                <app:sisOp>Android</app:sisOp>
                <app:aplicativo>AppAluno</app:aplicativo>
                <app:versao>4.4.7</app:versao>
            </app:LogarBiblioteca>
            </soapenv:Body>
        </soapenv:Envelope>`,
        {
        headers:{
            SOAPAction: 'AppAluno/IAppAluno/LogarBiblioteca'
        }}
        )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
    });
}

// Requisição de dados do usuário com base em token (usuário já validado no serviço).
function BuscarCursos (sessionId, token) {
    instance.post('', 
        `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:app="AppAluno">
        <soapenv:Header/>
            <soapenv:Body>
            <app:BuscarCursosAluno>
                <!--Optional:-->
                <app:sessionID>${sessionId}</app:sessionID>
                <!--Optional:-->
                <app:token>${token}</app:token>
            </app:BuscarCursosAluno>
            </soapenv:Body>
        </soapenv:Envelope>`,
        {
        headers:{
            SOAPAction: 'AppAluno/IAppAluno/BuscarCursosAluno'
        }}
        )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
    });
}

export default webservice;
