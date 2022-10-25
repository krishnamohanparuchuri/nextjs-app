export default async function getProduct(req,res) {
    const{ id }= req.query.params;
    const url = `https://fakestoreapi.com/products/${id}`
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
    
}