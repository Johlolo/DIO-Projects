package lab.project.singleton;

/*
* Singleton "apressado"
*
*  @author johlolo
*/
public class EagerSingleton {

    private static EagerSingleton instancia = new EagerSingleton();

    private EagerSingleton() {
        super();
    }

    public static EagerSingleton getInstancia() {
        return instancia;
    }
}
