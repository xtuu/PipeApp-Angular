import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'akuma'
})

export class AkumaPipes implements PipeTransform {
    transform(valor: boolean): string {
        return (valor) ? 'posee' : 'no posee'
    }
}
