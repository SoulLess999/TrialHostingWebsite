function DNA(genes){
    if (genes){
      this.genes = genes;
    }else{
      this.genes = [];
      for(var i = 0; i < lifespan; i++){
        this.genes[i] = p5.Vector.random2D(); 
        this.genes[i].setMag(maxForce);
      }
    }
    
    this.crossover = function(partner_dna){
      var newgenes = [];
      var mid = floor(random(this.genes.length));
      for (var i = 0; i < this.genes.length; i++){
        if (i > mid){
          newgenes[i] = this.genes[i];
        }else{
          newgenes[i] = partner_dna.genes[i];
        }
      }
  
      return new DNA(newgenes);
    }
  
    this.mutation = function(){
      for (var i = 0; i < this.genes.length; i++){
        if (random(1) < mutationRate){
          this.genes[i] = p5.Vector.random2D(); 
          this.genes[i].setMag(maxForce);
        }
      }
    }
  }
  