// types
// interfaces
/*
interface IAnimal {
    name: string;
    type: 'land' | 'aquatic' | 'fly';
    domestic: boolean;
}

interface IFeline extends IAnimal {
    nightVistion: boolean;
}

interface ICanine extends IAnimal {
    size: 'small' | 'medium' | 'large';
}

type IDomestic = IFeline | ICanine;

const animal: IDomestic = {
    domestic: true,
    name: 'dog',
    size: 'medium',
    type: 'land',
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////

const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => (
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value)
));
