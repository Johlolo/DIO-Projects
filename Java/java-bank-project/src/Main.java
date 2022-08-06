public class Main {
    public static void main(String[] args) {
        Cliente johannes = new Cliente();
        johannes.setNome("Johannes");

        Conta cc = new ContaCorrente(johannes);
        cc.depositar(100);

        Conta poupanca = new ContaPoupanca(johannes);
        cc.transferir(30, poupanca);

        cc.imprimirExtrato();
        poupanca.imprimirExtrato();
    }
}
