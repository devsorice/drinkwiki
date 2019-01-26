export class Drink 
{
   
   /*id:number = 0;
  nome:string = "Martini";
  categoria:number=1;
  link:string="https://it.wikipedia.org/wiki/Cocktail_ufficiali_IBA";
  */

  
 /*public set id(v : number) {
    this.id = v;
  }
  
  public set nome(v : string) {
    this.nome = v;
  }

  public set categoria(v : number) {
    this.categoria = v;
  }

  public set link(v : string) {
    this.link = v;
  }*/


    constructor(id : number, nome:string, categoria:number, link:string) 
    {
        this.id=id;
        this.nome=nome;
        this.categoria=categoria;
        this.link=link;
    }
   
   
    public set id(v : number) 
    {
        this.id = v;
    }

    public get id() 
    {
        return this.id;
    }
     


     
    public set nome(v : string) 
    {
        this.nome = v;
    }
    
    public get nome() 
    {
        return this.nome;
    }



    
    public set categoria(v : number) 
    {
       this.categoria = v;
    }
    
    public get categoria() 
    {
       return this.categoria;
    }

    


    public set link(v : string) 
    {
        this.link = v;
    }

    
    public get link() 
    {
        return this.link;
    }
  

}
