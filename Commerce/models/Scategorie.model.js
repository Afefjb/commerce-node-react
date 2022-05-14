import mongoose from "mongoose"
var scategorieSchema = mongoose.Schema({ 
    nomscategorie:String,
    imagescat:String,
    
    categorie: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Categorie'
    }, 
    
}) 
const Scategorie = mongoose.model('Scategorie', scategorieSchema); 
export default Scategorie