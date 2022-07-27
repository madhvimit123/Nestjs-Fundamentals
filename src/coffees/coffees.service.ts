import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [{
        id: 1,
        name: 'Madhvi',
        brand: 'Letterical',
        flavors: ['chocolate', 'vanilla'],
    }];

    findAll () {
        return this.coffees;
    }

    findOne (id: string) {
        return this.coffees.find(item => item.id === +id);
        // throw 'A random error';
        // const coffee = this.coffees.find(item => item.id === +id);
        // if(!coffee) {
        //     throw new NotFoundException(`Coffee #{id} not found`)
        // }
        // return coffee;
    }

    create (createCoffeeDto: any) {
        this.coffees.push(createCoffeeDto);
        return createCoffeeDto;
    }

    update (id: string, updateCoffeeDto: any) {
        const existingCoffee = this.findOne(id);
        if(existingCoffee) {
            // update the existing entity
        }
    }

    remove (id: string) {
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
        if(coffeeIndex >= 0) {
            this.coffees.slice(coffeeIndex, 1);
        } 
    }
}
