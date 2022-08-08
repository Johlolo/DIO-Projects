package lab.project;

import lab.project.facade.Facade;
import lab.project.singleton.EagerSingleton;
import lab.project.singleton.LazyHolderSingleton;
import lab.project.singleton.LazySingleton;
import lab.project.strategy.*;

public class Test {
    public static void main(String[] args) {

        // Singleton:

        LazySingleton lazy = LazySingleton.getInstancia();
        System.out.println(lazy);
        lazy = LazySingleton.getInstancia();
        System.out.println(lazy);

        System.out.println("");

        EagerSingleton eager = EagerSingleton.getInstancia();
        System.out.println(eager);
        eager = EagerSingleton.getInstancia();
        System.out.println(eager);

        System.out.println("");

        LazyHolderSingleton lazyHolder = LazyHolderSingleton.getInstancia();
        System.out.println(lazyHolder);
        lazyHolder = LazyHolderSingleton.getInstancia();
        System.out.println(lazyHolder);

        System.out.println("");
        System.out.println("========================");

        // Strategy

        Comportamento defensivo = new ComportamentoDefensivo();
        Comportamento normal = new ComportamentoNormal();
        Comportamento agressivo = new ComportamentoAgressivo();

        Robo robo = new Robo();
        robo.setComportamento(normal);
        robo.mover();
        robo.mover();
        robo.setComportamento(defensivo);
        robo.mover();
        robo.setComportamento(agressivo);
        robo.mover();
        robo.mover();
        robo.mover();

        System.out.println("");
        System.out.println("========================");

        // Facade

        Facade facade = new Facade();
        facade.migrarCliente("Johannes", "89200000");

    }
}
