function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const car = {
  name: 'Mercedes',
  year: 2020,

  showCar(): void {
    console.log(this.name + ' ' + this.year);
  },
};

noReturn('jonthan', 'reis');
car.showCar();
