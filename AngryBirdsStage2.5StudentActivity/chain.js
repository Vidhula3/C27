class Chain{
constructor(bodyA,bodyB){
    var options={
   stiffness:0.04,
   bodyA:bodyA,
   bodyB:bodyB,
   length:9

    }
this.chain=Constraint.create(options)
World.add(world,this.chain)


}
display(){
    var pointA=this.chain.bodyA.position
    var pointB=this.chain.bodyB.position
    line (pointA.x,pointA.y,pointB.x,pointB.y)
}

}