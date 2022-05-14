import mongoose from "mongoose"
var articleSchema = mongoose.Schema({ 
    caracteristiques:String,
    designation:String,
    marque:String,
    reference:String,
    qtestock:Number,
    prixAchat:Number,
    prixVente:Number,
    prixSolde:Number,
    imageartpetitf:String,
    imageartgrandf:String,
    
    scategorie: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Scategorie'
    }, 
    categorie: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Categorie'
    }, 

}) 
const Article = mongoose.model('Article', articleSchema); 
export default Article