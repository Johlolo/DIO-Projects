package lab.project.singleton;

/*
* Singleton "preguiçoso"
*
*  @author johlolo
*/
public class LazySingleton {

    private static LazySingleton instancia;

    private LazySingleton() {
        super();
    }

    public static LazySingleton getInstancia() {
        if (instancia == null) {
            instancia = new LazySingleton();
        }
        return instancia;
    }
}
