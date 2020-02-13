
export default interface Search{
    error: boolean,
    pokemon: Pokemon
}

interface Pokemon{
    name: string,
    numberofAbilites: number,
    baseExperience: number,
    imageUrl: string
}
