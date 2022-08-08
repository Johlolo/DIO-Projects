package lab.project.singleton;

/*
* Singleton "Lazy Holder"
*
*  @author johlolo
*/
public class LazyHolderSingleton {

    private static class InstanceHolder {
        public static LazyHolderSingleton instancia = new LazyHolderSingleton();
    }

    private LazyHolderSingleton() {
        super();
    }

    public static LazyHolderSingleton getInstancia() {
        return InstanceHolder.instancia;
    }
}
