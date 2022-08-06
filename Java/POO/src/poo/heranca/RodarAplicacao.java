package poo.heranca;

public class RodarAplicacao {

    public static void main(String[] args) {

        Funcionario funcionario = new Funcionario();

        // Upcast implícito
        Funcionario gerente = new Gerente();
        Funcionario vendedor = new Gerente();
        Funcionario faxineiro = new Faxineiro();

        // Erro em Downcast
//        Gerente gerente_ = new Funcionario();

        // Downcast explícito - NÃO RECOMENDADO
        Vendedor vendedor_ = (Vendedor) new Funcionario();
    }
}
