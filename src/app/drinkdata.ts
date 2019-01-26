export class Drinkdata 
{
    constructor(id : number, testo:string, immagine:string) 
    {
        this.id=id;
        this.testo=testo;
        this.immagine=immagine;
    }
   
   
    public set id(v : number) 
    {
        this.id = v;
    }

    public get id() 
    {
        return this.id;
    }
     
     
    public set testo(v : string) 
    {
        this.testo = v;
    }
    
    public get testo() 
    {
        return this.testo;
    }


    public set immagine(v : string) 
    {
        this.immagine = v;
    }
    
    public get immagine() 
    {
        return this.immagine;
    }

}
