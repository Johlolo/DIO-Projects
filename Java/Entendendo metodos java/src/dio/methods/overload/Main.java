package dio.methods.overload;

public class Main {

	public static void main(String[] args) {
		
		// Return
		System.out.println("Exercócio quadrilátero");
		
		double areaQuadrado = Quadrilatero.area(3);
		System.out.println("Área do quadrado: " + areaQuadrado);
		
		double areaRetangulo = Quadrilatero.area(5d, 4d);
		System.out.println("Área do retangulo: " + areaRetangulo);
		
		double areaTrapezio = Quadrilatero.area(7, 8, 9);
		System.out.println("Área do trapézio: " + areaTrapezio);
		
		float areaLosango = Quadrilatero.area(5f, 4f);
		System.out.println("Área do losango: " + areaLosango);
		
		
	}

}
