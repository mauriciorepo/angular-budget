export class Company {

    constructor(
        public id?: number,



        public name?:  string,

        public telephone?: string,

        public localization?: string ,

        public contactName?: string ,

        public telephone2?: string ,

        public cellphone?: string ,

        public country?: string ,

        public stateRegistration?: string ,

        public neighborhood?: string ,

        //uf
        public StateAbbrev?: string ,

        public account?: string ,

        public registrationDate?: string ,

        public situation?: boolean,
        public email?: string
    ) { }

    get situationText(): string{

        return this.situation ? 'active' : 'idle'
    }

    static states: [
        { AC: 'Acre' },
        { AL: 'Alagoas' },
        { AP: 'Amapá' },
        { AM: 'Amazonas' },
        { BA: 'Bahia' },
        { CE: 'Ceará' },
        { DF: 'Distrito Federal' },
        { ES: 'Espírito Santo' },
        { GO: 'Goías' },
        { MA: 'Maranhão' },
        { MT: 'Mato Grosso' },
        { MS: 'Mato Grosso do Sul' },
        { MG: 'Minas Gerais' },
        { PA: 'Pará' },
        { PB: 'Paraíba' },
        { PR: 'Paraná' },
        { PE: 'Pernambuco' },
        { PI: 'Piauí' },
        { RJ: 'Rio de Janeiro' },
        { RN: 'Rio Grande do Norte' },
        { RS: 'Rio Grande do Sul' },
        { RO: 'Rondônia' },
        { RR: 'Roraíma' },
        { SC: 'Santa Catarina' },
        { SP: 'São Paulo' },
        { SE: 'Sergipe' },
        { TO: 'Tocantins' },
      ]
}