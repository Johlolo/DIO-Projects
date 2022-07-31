import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'Johannes Rey';
  imageUrl = 'https://picsum.photos/300/300';
  imageDesc = 'essa é uma imagem';
  buttonText = 'Clique aqui';
  textRed = false;
  bgColor = 'green';
  textInput = '';
  number = 0;
  destroy = false;

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome() {
    return this.text;
  }

  clicou() {
    if (this.text === 'Johannes Rey') {
      this.text = 'Jhemila Rey'
      this.textRed = true;
    } else {
      this.text = 'Johannes Rey'
      this.textRed = false;
    }
    console.log('clicou aqui');
  }

  clicou2(value: any) {
    console.log('clicou aqui2', value);
  }

  clicouNoFilho(text: any) {
    console.log(text);
  }

  incrementa() {
    this.number++;
  }

  destroiComponente() {
    this.destroy = true;
  }

}
